import { App, PluginSettingTab, Setting, normalizePath } from "obsidian";
import type LocalCapturePlugin from "./main";
import { DEFAULT_CAPTURE_FOLDER } from "./constants";
import { CaptureType } from "./types";

export interface LocalCaptureSettings {
  captureFolder: string;
  defaultType: CaptureType;
  autoArchiveAfterSend: boolean;
  timelinePageSize: number;
  heatmapDays: number;
}

export const DEFAULT_SETTINGS: LocalCaptureSettings = {
  captureFolder: DEFAULT_CAPTURE_FOLDER,
  defaultType: "note",
  autoArchiveAfterSend: true,
  timelinePageSize: 80,
  heatmapDays: 90
};

export function normalizeCaptureFolder(folder: string): string {
  const trimmed = folder.trim() || DEFAULT_CAPTURE_FOLDER;
  return normalizePath(trimmed).replace(/^\/+|\/+$/g, "");
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
  }
}
