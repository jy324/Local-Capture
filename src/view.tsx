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
    const container = this.containerEl.children[1] as HTMLElement;
    container.empty();
    container.addClass("local-capture-host");
    this.root = createRoot(container);
    this.root.render(<LocalCaptureApp plugin={this.plugin} />);
  }

  async onClose(): Promise<void> {
    this.root?.unmount();
  }
}
