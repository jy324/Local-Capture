import { FuzzySuggestModal, TFile } from "obsidian";
import type LocalCapturePlugin from "../main";

export class TargetFileSuggestModal extends FuzzySuggestModal<TFile> {
  constructor(
    private readonly plugin: LocalCapturePlugin,
    private readonly onChoose: (file: TFile) => void | Promise<void>
  ) {
    super(plugin.app);
    this.setPlaceholder("选择要追加到的目标笔记");
  }

  getItems(): TFile[] {
    return this.app.vault
      .getMarkdownFiles()
      .filter((file) => !this.plugin.index.isCapturePath(file.path));
  }

  getItemText(file: TFile): string {
    return file.path;
  }

  onChooseItem(file: TFile): void {
    void this.onChoose(file);
  }
}
