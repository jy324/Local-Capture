import { Archive, ListTodo, RotateCcw, Send, Tags, Trash2, X } from "lucide-react";
import { JSX } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";

interface BatchBarProps {
  plugin: LocalCapturePlugin;
  selectedItems: CaptureItem[];
  onArchive: () => void;
  onRestore: () => void;
  onDelete: () => void;
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
      <span>{selectedItems.length} 条</span>
      <button type="button" title="发送到文件" onClick={() => void plugin.pickTargetAndSend(selectedItems)}>
        <Send size={15} aria-hidden="true" />
      </button>
      <button type="button" title="批量标签" onClick={() => plugin.openBatchTagModal(selectedItems)}>
        <Tags size={15} aria-hidden="true" />
      </button>
      <button type="button" title="批量类型" onClick={() => plugin.openBatchTypeModal(selectedItems)}>
        <ListTodo size={15} aria-hidden="true" />
      </button>
      <button type="button" title="归档" onClick={onArchive}>
        <Archive size={15} aria-hidden="true" />
      </button>
      <button type="button" title="恢复" onClick={onRestore}>
        <RotateCcw size={15} aria-hidden="true" />
      </button>
      <button type="button" title="删除" onClick={onDelete}>
        <Trash2 size={15} aria-hidden="true" />
      </button>
      <button type="button" title="取消选择" onClick={onClear}>
        <X size={15} aria-hidden="true" />
      </button>
    </div>
  );
}
