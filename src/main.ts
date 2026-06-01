import { Notice, Plugin, TFile, WorkspaceLeaf } from "obsidian";
import { PLUGIN_ID, VIEW_TYPE_LOCAL_CAPTURE } from "./constants";
import {
  DEFAULT_SETTINGS,
  LocalCaptureSettingTab,
  LocalCaptureSettings,
  normalizeCaptureFolder,
  normalizeFolder
} from "./settings";
import { CaptureIndex } from "./services/CaptureIndex";
import { CaptureService } from "./services/CaptureService";
import { CaptureItem, CaptureType } from "./types";
import { QuickCaptureModal } from "./modals/QuickCaptureModal";
import { TargetFileSuggestModal } from "./modals/TargetFileSuggestModal";
import { LocalCaptureView } from "./view";
import { todayDayKey } from "./utils/dates";

export default class LocalCapturePlugin extends Plugin {
  settings!: LocalCaptureSettings;
  index!: CaptureIndex;
  captureService!: CaptureService;

  private selectedCaptureIds = new Set<string>();
  private activeDayKey: string | undefined;

  async onload(): Promise<void> {
    await this.loadSettings();

    this.index = new CaptureIndex(this.app, () => this.settings);
    this.captureService = new CaptureService(this.app, () => this.settings, this.index);

    this.registerView(
      VIEW_TYPE_LOCAL_CAPTURE,
      (leaf: WorkspaceLeaf) => new LocalCaptureView(leaf, this)
    );

    this.addRibbonIcon("inbox", "Local Capture", () => {
      void this.activateView();
    });

    this.addSettingTab(new LocalCaptureSettingTab(this.app, this));
    this.registerFileEvents();
    this.registerCommands();
    this.registerUriCapture();

    await this.index.rebuild();
  }

  onunload(): void {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_LOCAL_CAPTURE);
  }

  async loadSettings(): Promise<void> {
    const loaded = (await this.loadData()) as Partial<LocalCaptureSettings> | null;
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...loaded,
      captureFolder: normalizeCaptureFolder(loaded?.captureFolder ?? DEFAULT_SETTINGS.captureFolder),
      dailySummaryFolder:
        normalizeFolder(loaded?.dailySummaryFolder ?? DEFAULT_SETTINGS.dailySummaryFolder) ||
        DEFAULT_SETTINGS.dailySummaryFolder,
      dailyNoteFolder: normalizeFolder(loaded?.dailyNoteFolder ?? DEFAULT_SETTINGS.dailyNoteFolder)
    };
  }

  async saveSettings(): Promise<void> {
    this.settings.captureFolder = normalizeCaptureFolder(this.settings.captureFolder);
    this.settings.dailySummaryFolder =
      normalizeFolder(this.settings.dailySummaryFolder) || DEFAULT_SETTINGS.dailySummaryFolder;
    this.settings.dailyNoteFolder = normalizeFolder(this.settings.dailyNoteFolder);
    await this.saveData(this.settings);
  }

  async activateView(): Promise<void> {
    const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE_LOCAL_CAPTURE)[0];
    if (existing) {
      await this.app.workspace.revealLeaf(existing);
      return;
    }

    const leaf = this.app.workspace.getRightLeaf(false) ?? this.app.workspace.getLeaf(true);
    await leaf.setViewState({ type: VIEW_TYPE_LOCAL_CAPTURE, active: true });
    await this.app.workspace.revealLeaf(leaf);
  }

  setSelectedCaptureIds(ids: string[]): void {
    this.selectedCaptureIds = new Set(ids);
  }

  setActiveDayKey(dayKey: string | undefined): void {
    this.activeDayKey = dayKey;
  }

  getSelectedCaptures(): CaptureItem[] {
    return this.index.getByIds(this.selectedCaptureIds);
  }

  async pickTargetAndSend(captures: CaptureItem[]): Promise<void> {
    if (captures.length === 0) {
      new Notice("请先选择至少一条记录");
      return;
    }

    new TargetFileSuggestModal(this, async (target) => {
      await this.captureService.appendToFile(captures, target);
      this.selectedCaptureIds.clear();
    }).open();
  }

  async generateSummaryForActiveDay(): Promise<void> {
    await this.captureService.generateDailySummary(this.activeDayKey ?? todayDayKey());
  }

  async pickTargetAndGenerateSummary(dayKey = this.activeDayKey ?? todayDayKey()): Promise<void> {
    new TargetFileSuggestModal(this, async (target) => {
      await this.captureService.generateDailySummary(dayKey, target);
    }).open();
  }

  async openCaptureFile(capture: CaptureItem): Promise<void> {
    const file = this.app.vault.getAbstractFileByPath(capture.path);
    if (!(file instanceof TFile)) {
      new Notice(`找不到记录文件：${capture.path}`);
      return;
    }

    await this.app.workspace.getLeaf(false).openFile(file);
  }

  private registerFileEvents(): void {
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        void this.index.updateFile(file);
      })
    );

    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        void this.index.updateFile(file);
      })
    );

    this.registerEvent(
      this.app.vault.on("delete", (file) => {
        this.index.removePath(file.path);
      })
    );

    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        this.index.removePath(oldPath);
        void this.index.updateFile(file);
      })
    );

    this.registerEvent(
      this.app.metadataCache.on("changed", (file) => {
        if (this.index.isCapturePath(file.path)) {
          void this.index.updateFile(file);
        }
      })
    );
  }

  private registerCommands(): void {
    this.addCommand({
      id: "open-local-capture",
      name: "打开 Local Capture",
      callback: () => void this.activateView()
    });

    this.addCommand({
      id: "new-capture",
      name: "新建快速记录",
      callback: () => new QuickCaptureModal(this).open()
    });

    this.addCommand({
      id: "paste-clipboard-capture",
      name: "从剪贴板创建记录",
      callback: () => void this.createFromClipboard()
    });

    this.addCommand({
      id: "rebuild-local-capture-index",
      name: "重建 Local Capture 索引",
      callback: () => void this.captureService.rebuildIndex()
    });

    this.addCommand({
      id: "send-selected-captures-to-file",
      name: "发送选中记录到文件",
      callback: () => void this.pickTargetAndSend(this.getSelectedCaptures())
    });

    this.addCommand({
      id: "archive-selected-captures",
      name: "归档选中记录",
      callback: () => void this.captureService.archiveMany(this.getSelectedCaptures())
    });

    this.addCommand({
      id: "delete-selected-captures",
      name: "删除选中记录",
      callback: () => void this.captureService.softDeleteMany(this.getSelectedCaptures())
    });

    this.addCommand({
      id: "restore-selected-captures",
      name: "恢复选中记录",
      callback: () => void this.captureService.restoreMany(this.getSelectedCaptures())
    });

    this.addCommand({
      id: "generate-today-daily-summary",
      name: "生成今日摘要",
      callback: () => void this.captureService.generateDailySummary(todayDayKey())
    });

    this.addCommand({
      id: "generate-current-day-daily-summary",
      name: "生成当前日期摘要",
      callback: () => void this.generateSummaryForActiveDay()
    });

    this.addCommand({
      id: "send-current-day-summary-to-file",
      name: "发送当前日期摘要到文件",
      callback: () => void this.pickTargetAndGenerateSummary()
    });
  }

  private registerUriCapture(): void {
    this.registerObsidianProtocolHandler(PLUGIN_ID, async (params) => {
      const bodyMarkdown = firstValue(params.text) ?? firstValue(params.body) ?? firstValue(params.content) ?? "";
      const type = normalizeCaptureType(firstValue(params.type), this.settings.defaultType);
      const url = firstValue(params.url) ?? firstValue(params.source_url);

      if (!bodyMarkdown.trim()) {
        new Notice("URI 捕获缺少 text、body 或 content 参数");
        return;
      }

      await this.captureService.createCapture({
        bodyMarkdown,
        type,
        source: {
          type: "uri",
          url
        }
      });
      await this.activateView();
    });
  }

  private async createFromClipboard(): Promise<void> {
    const clipboard = navigator.clipboard;
    if (!clipboard?.readText) {
      new Notice("当前环境无法读取剪贴板");
      return;
    }

    const text = await clipboard.readText();
    if (!text.trim()) {
      new Notice("剪贴板为空");
      return;
    }

    await this.captureService.createCapture({
      bodyMarkdown: text,
      type: this.settings.defaultType,
      source: { type: "clipboard" }
    });
    await this.activateView();
  }
}

function firstValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function normalizeCaptureType(value: string | undefined, fallback: CaptureType): CaptureType {
  return value === "task" || value === "note" ? value : fallback;
}
