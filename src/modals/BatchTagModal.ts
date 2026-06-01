import { Modal, Setting } from "obsidian";
import type LocalCapturePlugin from "../main";
import { BatchTagMode, CaptureItem } from "../types";
import { uniqueTags } from "../utils/tags";

export class BatchTagModal extends Modal {
  private mode: BatchTagMode = "add";
  private tagsText = "";

  constructor(
    private readonly plugin: LocalCapturePlugin,
    private readonly captures: CaptureItem[]
  ) {
    super(plugin.app);
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "批量处理标签" });
    contentEl.createEl("p", {
      text: `将处理 ${this.captures.length} 条记录。标签可用空格、逗号或中文逗号分隔；移除和替换不会改写正文里的 #标签。`,
      cls: "local-capture-modal-desc"
    });

    new Setting(contentEl)
      .setName("处理方式")
      .addDropdown((dropdown) => {
        dropdown
          .addOption("add", "添加标签")
          .addOption("remove", "移除标签")
          .addOption("replace", "替换为这些标签")
          .setValue(this.mode)
          .onChange((value) => {
            this.mode = value as BatchTagMode;
          });
      });

    const input = contentEl.createEl("textarea", {
      cls: "local-capture-modal-textarea local-capture-tags-textarea",
      attr: {
        placeholder: "project inbox review"
      }
    });
    input.addEventListener("input", () => {
      this.tagsText = input.value;
    });

    new Setting(contentEl)
      .addButton((button) => {
        button
          .setButtonText("应用")
          .setCta()
          .onClick(() => void this.submit());
      })
      .addButton((button) => {
        button.setButtonText("取消").onClick(() => this.close());
      });

    input.focus();
  }

  private async submit(): Promise<void> {
    const tags = parseTagsText(this.tagsText);
    if (tags.length === 0) return;

    await this.plugin.captureService.updateTagsMany(this.captures, tags, this.mode);
    this.close();
  }
}

function parseTagsText(value: string): string[] {
  return uniqueTags(value.split(/[\s,，]+/).filter(Boolean));
}
