import { App, Notice, TFile, normalizePath } from "obsidian";
import { LocalCaptureSettings } from "../settings";
import { CaptureIndex } from "./CaptureIndex";
import {
  BatchTagMode,
  CaptureSourceType,
  CaptureItem,
  CaptureStatus,
  CaptureType,
  CreateCaptureInput,
  LocalCaptureDiagnostics,
  TaskStatus
} from "../types";
import { buildCapturePath, dayKeyFromIso } from "../utils/dates";
import { extractInlineTags, mergeTags, normalizeTag, replaceInlineTag, uniqueTags } from "../utils/tags";
import { parseCaptureFile, serializeCaptureFile } from "../utils/frontmatter";
import { formatCaptureForAppend, formatDailySummaryBlock, upsertDailySummaryBlock } from "../utils/markdown";

export class CaptureService {
  constructor(
    private readonly app: App,
    private readonly getSettings: () => LocalCaptureSettings,
    private readonly index: CaptureIndex
  ) {}

  async createCapture(input: CreateCaptureInput): Promise<CaptureItem> {
    const now = new Date();
    const settings = this.getSettings();
    const { id, path } = await this.createUniquePath(settings.captureFolder, now, createShortId());
    const bodyMarkdown = applyCaptureTemplate(
      input.bodyMarkdown.trim(),
      input.type,
      input.source?.type ?? "manual",
      input.source?.url,
      settings
    );
    const item: CaptureItem = {
      id,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      path,
      bodyMarkdown,
      title: undefined,
      type: input.type,
      taskStatus: input.type === "task" ? input.taskStatus ?? "todo" : undefined,
      status: "active",
      pinned: false,
      tags: extractInlineTags(bodyMarkdown),
      sentTo: [],
      source: input.source
    };

    await this.ensureParentFolder(path);
    await this.app.vault.create(path, serializeCaptureFile(item));

    const file = this.getFile(path);
    if (file) {
      await this.index.updateFile(file);
    }

    return item;
  }

  async updateBody(capture: CaptureItem, bodyMarkdown: string): Promise<void> {
    const file = this.requireFile(capture.path);
    if (!file) return;

    const updated: CaptureItem = {
      ...capture,
      bodyMarkdown: bodyMarkdown.trimEnd(),
      updatedAt: new Date().toISOString(),
      tags: mergeTags(capture.tags, extractInlineTags(bodyMarkdown))
    };

    await this.app.vault.process(file, () => serializeCaptureFile(updated));
    await this.index.updateFile(file);
  }

  async setPinned(capture: CaptureItem, pinned: boolean): Promise<void> {
    await this.updateFrontmatter(capture, (frontmatter) => {
      frontmatter.pinned = pinned;
      frontmatter.updated = new Date().toISOString();
    });
  }

  async setTaskStatus(capture: CaptureItem, taskStatus: TaskStatus): Promise<void> {
    await this.updateFrontmatter(capture, (frontmatter) => {
      frontmatter.type = "task";
      frontmatter.task_status = taskStatus;
      frontmatter.updated = new Date().toISOString();
    });
  }

  async setStatus(capture: CaptureItem, status: CaptureStatus): Promise<void> {
    await this.updateFrontmatter(capture, (frontmatter) => {
      frontmatter.status = status;
      frontmatter.updated = new Date().toISOString();
    });
  }

  async archiveMany(captures: CaptureItem[]): Promise<void> {
    await Promise.all(captures.map((capture) => this.setStatus(capture, "archived")));
  }

  async softDeleteMany(captures: CaptureItem[]): Promise<void> {
    await Promise.all(captures.map((capture) => this.setStatus(capture, "deleted")));
  }

  async restoreMany(captures: CaptureItem[]): Promise<void> {
    await Promise.all(captures.map((capture) => this.setStatus(capture, "active")));
  }

  async updateTagsMany(captures: CaptureItem[], tags: string[], mode: BatchTagMode): Promise<void> {
    const normalizedTags = uniqueTags(tags);
    if (normalizedTags.length === 0) return;

    await Promise.all(
      captures.map((capture) =>
        this.updateFrontmatter(capture, (frontmatter) => {
          const current = frontmatterTags(frontmatter.tags);
          if (mode === "replace") {
            frontmatter.tags = normalizedTags;
          } else if (mode === "remove") {
            const removeSet = new Set(normalizedTags.map((tag) => tag.toLocaleLowerCase()));
            frontmatter.tags = current.filter((tag) => !removeSet.has(tag.toLocaleLowerCase()));
          } else {
            frontmatter.tags = uniqueTags([...current, ...normalizedTags]);
          }
          frontmatter.updated = new Date().toISOString();
        })
      )
    );

    new Notice(`已处理 ${captures.length} 条记录的标签`);
  }

  async setTypeMany(captures: CaptureItem[], type: CaptureType): Promise<void> {
    await Promise.all(
      captures.map((capture) =>
        this.updateFrontmatter(capture, (frontmatter) => {
          frontmatter.type = type;
          if (type === "task") {
            frontmatter.task_status = frontmatter.task_status === "done" ? "done" : "todo";
          } else {
            delete frontmatter.task_status;
          }
          frontmatter.updated = new Date().toISOString();
        })
      )
    );

    new Notice(`已将 ${captures.length} 条记录改为${type === "task" ? "任务" : "笔记"}`);
  }

  async renameTag(oldTag: string, newTag: string): Promise<void> {
    const from = normalizeTag(oldTag);
    const to = normalizeTag(newTag);
    if (!from || !to || from.toLocaleLowerCase() === to.toLocaleLowerCase()) return;

    const matching = this.index.getItems().filter((capture) => hasTag(capture.tags, from));
    await Promise.all(
      matching.map(async (capture) => {
        const updatedTags = uniqueTags(capture.tags.map((tag) => sameTag(tag, from) ? to : tag));
        await this.rewriteCapture(capture, {
          bodyMarkdown: replaceInlineTag(capture.bodyMarkdown, from, to),
          tags: updatedTags
        });
      })
    );

    new Notice(`已将 #${from} 重命名为 #${to}`);
  }

  async deleteTag(tag: string): Promise<void> {
    const target = normalizeTag(tag);
    if (!target) return;

    const matching = this.index.getItems().filter((capture) => hasTag(capture.tags, target));
    await Promise.all(
      matching.map(async (capture) => {
        await this.rewriteCapture(capture, {
          bodyMarkdown: replaceInlineTag(capture.bodyMarkdown, target),
          tags: capture.tags.filter((current) => !sameTag(current, target))
        });
      })
    );

    new Notice(`已删除 #${target}`);
  }

  async appendToFile(captures: CaptureItem[], target: TFile): Promise<void> {
    if (captures.length === 0) return;

    const payload = captures.map(formatCaptureForAppend).join("");
    await this.app.vault.process(target, (current) => `${current.trimEnd()}${payload}`);

    await Promise.all(
      captures.map((capture) =>
        this.updateFrontmatter(capture, (frontmatter) => {
          const sentTo = Array.isArray(frontmatter.sent_to)
            ? frontmatter.sent_to.filter((value: unknown): value is string => typeof value === "string")
            : [];

          frontmatter.sent_to = [...new Set([...sentTo, target.path])];
          if (this.getSettings().autoArchiveAfterSend) {
            frontmatter.status = "archived";
          }
          frontmatter.updated = new Date().toISOString();
        })
      )
    );

    new Notice(`已发送 ${captures.length} 条记录到 ${target.basename}`);
  }

  async rebuildIndex(): Promise<void> {
    await this.index.rebuild();
    new Notice("Local Capture 索引已重建");
  }

  async generateDailySummary(dayKey: string, targetFile?: TFile): Promise<TFile | null> {
    const captures = this.index
      .getItems()
      .filter((capture) => capture.status !== "deleted" && dayKeyFromIso(capture.createdAt) === dayKey);
    const target = targetFile ?? (await this.getOrCreateDailySummaryTarget(dayKey));
    if (!target) return null;

    const block = formatDailySummaryBlock(dayKey, captures);
    await this.app.vault.process(target, (current) => upsertDailySummaryBlock(current, dayKey, block));
    new Notice(`已生成 ${dayKey} 摘要到 ${target.path}`);
    return target;
  }

  async runDiagnostics(): Promise<LocalCaptureDiagnostics> {
    const settings = this.getSettings();
    const issues: string[] = [];
    const captureProbe = await this.probeFolder(settings.captureFolder);
    const summaryFolder =
      settings.dailySummaryTarget === "daily-note"
        ? settings.dailyNoteFolder || "."
        : settings.dailySummaryFolder;
    const summaryProbe = await this.probeFolder(summaryFolder === "." ? "" : summaryFolder);

    if (!captureProbe) {
      issues.push(`无法写入记录目录：${settings.captureFolder}`);
    }
    if (!summaryProbe) {
      issues.push(`无法写入摘要目录：${summaryFolder}`);
    }

    return {
      captureCount: this.index.getItems().length,
      captureFolder: settings.captureFolder,
      dailySummaryFolder: summaryFolder,
      canWriteCaptureFolder: captureProbe,
      canWriteDailySummaryFolder: summaryProbe,
      issues
    };
  }

  private async updateFrontmatter(
    capture: CaptureItem,
    update: (frontmatter: Record<string, unknown>) => void
  ): Promise<void> {
    const file = this.requireFile(capture.path);
    if (!file) return;

    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      update(frontmatter as Record<string, unknown>);
    });
    await this.index.updateFile(file);
  }

  private async rewriteCapture(
    capture: CaptureItem,
    patch: Partial<Pick<CaptureItem, "bodyMarkdown" | "tags" | "type" | "taskStatus" | "status" | "pinned">>
  ): Promise<void> {
    const file = this.requireFile(capture.path);
    if (!file) return;

    const updated: CaptureItem = {
      ...capture,
      ...patch,
      updatedAt: new Date().toISOString()
    };
    updated.tags = uniqueTags(updated.tags);
    await this.app.vault.process(file, () => serializeCaptureFile(updated));
    await this.index.updateFile(file);
  }

  private async createUniquePath(
    folder: string,
    createdAt: Date,
    firstId: string
  ): Promise<{ id: string; path: string }> {
    let id = firstId;
    let path = buildCapturePath(folder, createdAt, id);

    while (await this.app.vault.adapter.exists(path)) {
      id = createShortId();
      path = buildCapturePath(folder, createdAt, id);
    }

    return { id, path };
  }

  private async getOrCreateDailySummaryTarget(dayKey: string): Promise<TFile | null> {
    const settings = this.getSettings();
    const fileName = `${dayKey}.md`;
    const path =
      settings.dailySummaryTarget === "daily-note"
        ? normalizePath(settings.dailyNoteFolder ? `${settings.dailyNoteFolder}/${fileName}` : fileName)
        : normalizePath(`${settings.dailySummaryFolder}/${fileName}`);

    const existing = this.getFile(path);
    if (existing) return existing;

    await this.ensureParentFolder(path);
    await this.app.vault.create(path, "");
    return this.getFile(path);
  }

  private async probeFolder(folder: string): Promise<boolean> {
    const safeFolder = normalizePath(folder).replace(/^\/+|\/+$/g, "");
    const probePath = normalizePath(
      `${safeFolder ? `${safeFolder}/` : ""}.local-capture-diagnostic-${Date.now()}.md`
    );

    try {
      await this.ensureParentFolder(probePath);
      await this.app.vault.adapter.write(probePath, "Local Capture diagnostic probe\n");
      await this.app.vault.adapter.remove(probePath);
      return true;
    } catch (error) {
      console.error("Local Capture diagnostics failed", error);
      try {
        if (await this.app.vault.adapter.exists(probePath)) {
          await this.app.vault.adapter.remove(probePath);
        }
      } catch (cleanupError) {
        console.error("Local Capture diagnostics cleanup failed", cleanupError);
      }
      return false;
    }
  }

  private async ensureParentFolder(path: string): Promise<void> {
    const normalized = normalizePath(path);
    const parent = normalized.slice(0, normalized.lastIndexOf("/"));
    if (!parent) return;

    const segments = parent.split("/");
    let current = "";
    for (const segment of segments) {
      current = current ? `${current}/${segment}` : segment;
      if (!(await this.app.vault.adapter.exists(current))) {
        await this.app.vault.adapter.mkdir(current);
      }
    }
  }

  private getFile(path: string): TFile | null {
    const abstractFile = this.app.vault.getAbstractFileByPath(path);
    return abstractFile instanceof TFile ? abstractFile : null;
  }

  private requireFile(path: string): TFile | null {
    const file = this.getFile(path);
    if (!file) {
      new Notice(`找不到记录文件：${path}`);
    }
    return file;
  }
}

export function hydrateCaptureFromRaw(path: string, raw: string): CaptureItem | null {
  return parseCaptureFile(path, raw);
}

function createShortId(): string {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi?.getRandomValues) {
    const values = new Uint8Array(4);
    cryptoApi.getRandomValues(values);
    return [...values].map((value) => value.toString(16).padStart(2, "0")).join("").slice(0, 8);
  }

  return Math.random().toString(36).slice(2, 10);
}

function frontmatterTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return uniqueTags(value.filter((item): item is string => typeof item === "string"));
  }
  if (typeof value === "string" && value.trim()) {
    return uniqueTags([value]);
  }
  return [];
}

function applyCaptureTemplate(
  rawContent: string,
  type: CaptureType,
  sourceType: CaptureSourceType,
  sourceUrl: string | undefined,
  settings: LocalCaptureSettings
): string {
  const template =
    sourceType === "clipboard"
      ? settings.captureTemplates.clipboard
      : sourceType === "uri"
        ? settings.captureTemplates.uri
        : type === "task"
          ? settings.captureTemplates.task
          : settings.captureTemplates.note;
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toTimeString().slice(0, 5);
  const result = replaceToken(
    replaceToken(
      replaceToken(
        replaceToken(
          replaceToken(template, "{{content}}", rawContent),
          "{{date}}",
          date
        ),
        "{{time}}",
        time
      ),
      "{{datetime}}",
      now.toISOString()
    ),
    "{{source_url}}",
    sourceUrl ?? ""
  );

  return result.trim();
}

function replaceToken(value: string, token: string, replacement: string): string {
  return value.split(token).join(replacement);
}

function hasTag(tags: string[], tag: string): boolean {
  return tags.some((current) => sameTag(current, tag));
}

function sameTag(a: string, b: string): boolean {
  return normalizeTag(a).toLocaleLowerCase() === normalizeTag(b).toLocaleLowerCase();
}
