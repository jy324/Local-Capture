import { Modal, Setting } from "obsidian";
import type LocalCapturePlugin from "../main";
import { CaptureItem, CaptureType } from "../types";

export class BatchTypeModal extends Modal {
  private type: CaptureType = "note";

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
    contentEl.createEl("h2", { text: "批量修改类型" });
    contentEl.createEl("p", {
      text: `将修改 ${this.captures.length} 条记录。切换为任务时，未完成状态会默认设为待办。`,
      cls: "local-capture-modal-desc"
    });

    new Setting(contentEl)
      .setName("目标类型")
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
          .setButtonText("应用")
          .setCta()
          .onClick(() => this.plugin.runAction("批量修改类型", () => this.submit()));
      })
      .addButton((button) => {
        button.setButtonText("取消").onClick(() => this.close());
      });
  }

  private async submit(): Promise<void> {
    await this.plugin.captureService.setTypeMany(this.captures, this.type);
    this.close();
  }
}

