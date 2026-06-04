import { Archive, ListTodo, RotateCcw, Send, Tags, Trash2, X } from "lucide-react";
import { JSX } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";

interface BatchBarProps {
  plugin: LocalCapturePlugin;
  selectedItems: CaptureItem[];
  onArchive: () => void | Promise<void>;
  onRestore: () => void | Promise<void>;
  onDelete: () => void | Promise<void>;
  onClear: () => void;
}

export function BatchBar({
  plugin,
  selectedItems,
  onArchive,
  onRestore,
  onDelete,
  onClear
}: BatchBarProps): JSX.Element | null {
  if (selectedItems.length === 0) return null;

  return (
    <div className="local-capture-batchbar">
      <span className="local-capture-batchbar-count">{selectedItems.length}</span>
      <span className="local-capture-batchbar-label">条</span>
      <button type="button" title="发送到文件" onClick={() => plugin.runAction("发送到文件", () => plugin.pickTargetAndSend(selectedItems))}>
        <Send size={15} aria-hidden="true" />
      </button>
      <button type="button" title="批量标签" onClick={() => plugin.runAction("批量标签", () => plugin.openBatchTagModal(selectedItems))}>
        <Tags size={15} aria-hidden="true" />
      </button>
      <button type="button" title="批量类型" onClick={() => plugin.runAction("批量类型", () => plugin.openBatchTypeModal(selectedItems))}>
        <ListTodo size={15} aria-hidden="true" />
      </button>
      <button type="button" title="归档" onClick={() => plugin.runAction("归档", onArchive)}>
        <Archive size={15} aria-hidden="true" />
      </button>
      <button type="button" title="恢复" onClick={() => plugin.runAction("恢复", onRestore)}>
        <RotateCcw size={15} aria-hidden="true" />
      </button>
      <button type="button" title="删除" onClick={() => plugin.runAction("删除", onDelete)}>
        <Trash2 size={15} aria-hidden="true" />
      </button>
      <button type="button" title="取消选择" onClick={onClear}>
        <X size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
