import { Modal, Setting } from "obsidian";
import type LocalCapturePlugin from "../main";
import { CaptureType } from "../types";

export class QuickCaptureModal extends Modal {
  private body = "";
  private type: CaptureType;

  constructor(
    private readonly plugin: LocalCapturePlugin,
    initialBody = ""
  ) {
    super(plugin.app);
    this.body = initialBody;
    this.type = plugin.settings.defaultType;
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "快速记录" });

    const textarea = contentEl.createEl("textarea", {
      cls: "local-capture-modal-textarea",
      attr: {
        placeholder: "写下要捕获的内容，支持 Markdown 和 #标签。"
      }
    });
    textarea.value = this.body;
    textarea.addEventListener("input", () => {
      this.body = textarea.value;
    });
    textarea.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        event.preventDefault();
        void this.submit();
      }
    });

    new Setting(contentEl)
      .setName("类型")
      .addDropdown((dropdown) => {
        dropdown
          .addOption("note", "笔记")
          .addOption("task", "任务")
          .setValue(this.type)
          .onChange((value) => {
            this.type = value as CaptureType;
          });
      });

    new Setting(contentEl)
      .addButton((button) => {
        button
          .setButtonText("保存")
          .setCta()
          .onClick(() => void this.submit());
      })
      .addButton((button) => {
        button
          .setButtonText("取消")
          .onClick(() => this.close());
      });

    textarea.focus();
  }

  private async submit(): Promise<void> {
    const bodyMarkdown = this.body.trim();
    if (!bodyMarkdown) return;

    await this.plugin.captureService.createCapture({
      bodyMarkdown,
      type: this.type,
      source: { type: "manual" }
    });
    this.close();
  }
}
