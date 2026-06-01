import { Modal, Setting } from "obsidian";
import type LocalCapturePlugin from "../main";
import { normalizeTag } from "../utils/tags";

export class TagManagementModal extends Modal {
  constructor(private readonly plugin: LocalCapturePlugin) {
    super(plugin.app);
  }

  onOpen(): void {
    this.render();
  }

  private render(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("local-capture-modal");
    contentEl.createEl("h2", { text: "标签管理" });

    const counts = collectTagCounts(this.plugin);
    if (counts.length === 0) {
      contentEl.createEl("p", { text: "暂无标签。", cls: "local-capture-modal-desc" });
      return;
    }

    for (const [tag, count] of counts) {
      const row = contentEl.createDiv({ cls: "local-capture-tag-manager-row" });
      row.createEl("span", { text: `#${tag}` });
      row.createEl("span", { text: `${count} 条`, cls: "local-capture-tag-count" });

      const color = row.createEl("input", {
        attr: {
          type: "color",
          value: this.plugin.settings.tagColors[tag] ?? "#7c8cff",
          title: "标签颜色"
        }
      });
      color.addEventListener("change", () => {
        void this.plugin.setTagColor(tag, color.value);
      });

      new Setting(row)
        .addText((text) => {
          text.setPlaceholder("新标签名");
          text.inputEl.addClass("local-capture-tag-rename-input");
        })
        .addButton((button) => {
          button
            .setButtonText("重命名")
            .onClick(async () => {
              const input = row.querySelector<HTMLInputElement>(".local-capture-tag-rename-input");
              const next = normalizeTag(input?.value ?? "");
              if (!next) return;
              await this.plugin.captureService.renameTag(tag, next);
              await this.plugin.setTagColor(next, this.plugin.settings.tagColors[tag] ?? "#7c8cff");
              delete this.plugin.settings.tagColors[tag];
              await this.plugin.saveSettings();
              this.render();
            });
        })
        .addButton((button) => {
          button
            .setButtonText("删除")
            .onClick(async () => {
              await this.plugin.captureService.deleteTag(tag);
              delete this.plugin.settings.tagColors[tag];
              await this.plugin.saveSettings();
              this.render();
            });
        });
    }
  }
}

function collectTagCounts(plugin: LocalCapturePlugin): Array<[string, number]> {
  const counts = new Map<string, number>();
  for (const capture of plugin.index.getItems()) {
    if (capture.status === "deleted") continue;
    for (const tag of capture.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

