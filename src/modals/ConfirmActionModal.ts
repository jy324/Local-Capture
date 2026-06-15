import { Modal, Setting } from "obsidian";
import type LocalCapturePlugin from "../main";

interface ConfirmActionOptions {
  title: string;
  message: string;
  confirmText: string;
  cancelText?: string;
  destructive?: boolean;
}

export function confirmAction(plugin: LocalCapturePlugin, options: ConfirmActionOptions): Promise<boolean> {
  return new Promise((resolve) => {
    new ConfirmActionModal(plugin, options, resolve).open();
  });
}

class ConfirmActionModal extends Modal {
  private resolved = false;

  constructor(
    plugin: LocalCapturePlugin,
    private readonly options: ConfirmActionOptions,
    private readonly resolve: (confirmed: boolean) => void
  ) {
    super(plugin.app);
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: this.options.title });
    contentEl.createEl("p", {
      text: this.options.message,
      cls: "local-capture-modal-desc"
    });

    new Setting(contentEl)
      .addButton((button) => {
        button
          .setButtonText(this.options.cancelText ?? "取消")
          .onClick(() => {
            this.finish(false);
          });
      })
      .addButton((button) => {
        button
          .setButtonText(this.options.confirmText)
          .setCta()
          .onClick(() => {
            this.finish(true);
          });
        if (this.options.destructive) {
          button.buttonEl.addClass("mod-warning");
        }
      });
  }

  onClose(): void {
    if (!this.resolved) {
      this.finish(false);
    }
  }

  private finish(confirmed: boolean): void {
    if (this.resolved) return;
    this.resolved = true;
    this.resolve(confirmed);
    this.close();
  }
}
