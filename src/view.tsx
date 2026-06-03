import { ItemView, WorkspaceLeaf } from "obsidian";
import { createRoot, Root } from "react-dom/client";
import { VIEW_TYPE_LOCAL_CAPTURE } from "./constants";
import type LocalCapturePlugin from "./main";
import { LocalCaptureApp } from "./ui/LocalCaptureApp";

export class LocalCaptureView extends ItemView {
  private root?: Root;

  constructor(
    leaf: WorkspaceLeaf,
    private readonly plugin: LocalCapturePlugin
  ) {
    super(leaf);
  }

  getViewType(): string {
    return VIEW_TYPE_LOCAL_CAPTURE;
  }

  getDisplayText(): string {
    return "Local Capture";
  }

  getIcon(): string {
    return "inbox";
  }

  async onOpen(): Promise<void> {
    this.addHeaderActions();
    const container = this.containerEl.children[1] as HTMLElement;
    container.empty();
    container.addClass("local-capture-host");
    this.root = createRoot(container);
    this.root.render(<LocalCaptureApp plugin={this.plugin} />);
  }

  private addHeaderActions(): void {
    this.addAction("refresh-cw", "重建索引", () => {
      this.plugin.runAction("重建索引", () => this.plugin.captureService.rebuildIndex());
    });
    this.addAction("calendar-plus", "生成当前日期摘要", () => {
      this.plugin.runAction("生成当前日期摘要", () => this.plugin.generateSummaryForActiveDay());
    });
    this.addAction("send", "发送当前日期摘要到文件", () => {
      this.plugin.runAction("发送当前日期摘要到文件", () => this.plugin.pickTargetAndGenerateSummary());
    });
    this.addAction("tags", "标签管理", () => {
      this.plugin.runAction("标签管理", () => this.plugin.openTagManagementModal());
    });
    this.addAction("stethoscope", "运行诊断", () => {
      this.plugin.runAction("运行诊断", () => this.plugin.runDiagnostics());
    });
  }

  async onClose(): Promise<void> {
    this.root?.unmount();
  }
}
