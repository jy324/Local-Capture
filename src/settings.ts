import { App, PluginSettingTab, Setting, normalizePath } from "obsidian";
import type LocalCapturePlugin from "./main";
import { DEFAULT_CAPTURE_FOLDER, DEFAULT_DAILY_SUMMARY_FOLDER } from "./constants";
import { CaptureStatus, CaptureType, DailySummaryTarget, SavedQuery } from "./types";

export interface LocalCaptureSettings {
  captureFolder: string;
  defaultType: CaptureType;
  autoArchiveAfterSend: boolean;
  timelinePageSize: number;
  heatmapDays: number;
  dailySummaryTarget: DailySummaryTarget;
  dailySummaryFolder: string;
  dailyNoteFolder: string;
  savedQueries: SavedQuery[];
}

export const DEFAULT_SETTINGS: LocalCaptureSettings = {
  captureFolder: DEFAULT_CAPTURE_FOLDER,
  defaultType: "note",
  autoArchiveAfterSend: true,
  timelinePageSize: 80,
  heatmapDays: 90,
  dailySummaryTarget: "generated",
  dailySummaryFolder: DEFAULT_DAILY_SUMMARY_FOLDER,
  dailyNoteFolder: "",
  savedQueries: []
};

export function normalizeCaptureFolder(folder: string): string {
  const trimmed = folder.trim() || DEFAULT_CAPTURE_FOLDER;
  return normalizePath(trimmed).replace(/^\/+|\/+$/g, "");
}

export function normalizeFolder(folder: string): string {
  return normalizePath(folder.trim()).replace(/^\/+|\/+$/g, "");
}

export function normalizeSavedQueries(value: unknown): SavedQuery[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((query): query is Partial<SavedQuery> => typeof query === "object" && query !== null)
    .map((query) => {
      const status = normalizeQueryStatus(query.status);
      const name = typeof query.name === "string" && query.name.trim() ? query.name.trim() : "未命名查询";
      const id =
        typeof query.id === "string" && query.id.trim()
          ? query.id.trim()
          : `query-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

      return {
        id,
        name,
        query: typeof query.query === "string" ? query.query : "",
        status,
        selectedDay: typeof query.selectedDay === "string" && query.selectedDay ? query.selectedDay : undefined,
        createdAt:
          typeof query.createdAt === "string" && query.createdAt
            ? query.createdAt
            : new Date().toISOString()
      };
    });
}

function normalizeQueryStatus(status: unknown): CaptureStatus | "all" {
  if (status === "active" || status === "archived" || status === "deleted" || status === "all") {
    return status;
  }
  return "active";
}

export class LocalCaptureSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: LocalCapturePlugin) {
    super(app, plugin);
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Local Capture 设置" });

    new Setting(containerEl)
      .setName("保存目录")
      .setDesc("记录会按 年/月 分层保存到这个目录。")
      .addText((text) => {
        text
          .setPlaceholder(DEFAULT_CAPTURE_FOLDER)
          .setValue(this.plugin.settings.captureFolder)
          .onChange(async (value) => {
            this.plugin.settings.captureFolder = normalizeCaptureFolder(value);
            await this.plugin.saveSettings();
            await this.plugin.index.rebuild();
          });
      });

    new Setting(containerEl)
      .setName("默认记录类型")
      .setDesc("快速输入框创建新记录时使用的默认类型。")
      .addDropdown((dropdown) => {
        dropdown
          .addOption("note", "笔记")
          .addOption("task", "任务")
          .setValue(this.plugin.settings.defaultType)
          .onChange(async (value) => {
            this.plugin.settings.defaultType = value as CaptureType;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("发送后自动归档")
      .setDesc("Send to File 成功后，将原记录从主时间线移到归档视图。")
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.autoArchiveAfterSend)
          .onChange(async (value) => {
            this.plugin.settings.autoArchiveAfterSend = value;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("时间线加载数量")
      .setDesc("首次渲染的记录数量；滚动仍会使用虚拟列表保持性能。")
      .addText((text) => {
        text
          .setValue(String(this.plugin.settings.timelinePageSize))
          .onChange(async (value) => {
            const parsed = Number.parseInt(value, 10);
            this.plugin.settings.timelinePageSize = Number.isFinite(parsed)
              ? Math.max(20, Math.min(parsed, 500))
              : DEFAULT_SETTINGS.timelinePageSize;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("热力图天数")
      .setDesc("侧边栏顶部显示最近多少天的记录热力图。")
      .addText((text) => {
        text
          .setValue(String(this.plugin.settings.heatmapDays))
          .onChange(async (value) => {
            const parsed = Number.parseInt(value, 10);
            this.plugin.settings.heatmapDays = Number.isFinite(parsed)
              ? Math.max(14, Math.min(parsed, 365))
              : DEFAULT_SETTINGS.heatmapDays;
            await this.plugin.saveSettings();
          });
      });

    containerEl.createEl("h3", { text: "每日摘要" });

    new Setting(containerEl)
      .setName("默认摘要目标")
      .setDesc("生成每日摘要时，默认写入独立摘要文件或 Daily Note。")
      .addDropdown((dropdown) => {
        dropdown
          .addOption("generated", "独立摘要文件")
          .addOption("daily-note", "Daily Note")
          .setValue(this.plugin.settings.dailySummaryTarget)
          .onChange(async (value) => {
            this.plugin.settings.dailySummaryTarget = value as DailySummaryTarget;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("摘要文件目录")
      .setDesc("默认模式为独立摘要文件时使用。")
      .addText((text) => {
        text
          .setPlaceholder(DEFAULT_DAILY_SUMMARY_FOLDER)
          .setValue(this.plugin.settings.dailySummaryFolder)
          .onChange(async (value) => {
            this.plugin.settings.dailySummaryFolder = normalizeFolder(value) || DEFAULT_DAILY_SUMMARY_FOLDER;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("Daily Note 目录")
      .setDesc("默认模式为 Daily Note 时使用；留空表示 vault 根目录。文件名固定为 YYYY-MM-DD.md。")
      .addText((text) => {
        text
          .setPlaceholder("Daily")
          .setValue(this.plugin.settings.dailyNoteFolder)
          .onChange(async (value) => {
            this.plugin.settings.dailyNoteFolder = normalizeFolder(value);
            await this.plugin.saveSettings();
          });
      });
  }
}
