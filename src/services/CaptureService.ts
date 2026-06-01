import { App, Notice, TFile, normalizePath } from "obsidian";
import { LocalCaptureSettings } from "../settings";
import { CaptureIndex } from "./CaptureIndex";
import { CaptureItem, CaptureStatus, CreateCaptureInput, TaskStatus } from "../types";
import { buildCapturePath } from "../utils/dates";
import { extractInlineTags, mergeTags } from "../utils/tags";
import { parseCaptureFile, serializeCaptureFile } from "../utils/frontmatter";
import { formatCaptureForAppend } from "../utils/markdown";

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
    const bodyMarkdown = input.bodyMarkdown.trim();
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
