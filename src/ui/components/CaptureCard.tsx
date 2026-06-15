import {
  Archive,
  ArchiveRestore,
  Check,
  CheckCircle2,
  Circle,
  ExternalLink,
  Pencil,
  Pin,
  PinOff,
  Send,
  Trash2,
  X
} from "lucide-react";
import { JSX, KeyboardEvent } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";
import { formatDisplayDateTime } from "../../utils/dates";
import { IconButton } from "../shared/IconButton";
import { OverflowMenu } from "../shared/OverflowMenu";
import { statusText, tagColorStyle } from "../shared/formatters";
import { MarkdownPreview } from "../MarkdownPreview";

interface CaptureCardProps {
  plugin: LocalCapturePlugin;
  item: CaptureItem;
  selected: boolean;
  onToggleSelected: () => void;
  editing: boolean;
  editBody: string;
  editDirty: boolean;
  editConflict: boolean;
  onStartEdit: () => void;
  onEditBodyChange: (body: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
}

export function CaptureCard({
  plugin,
  item,
  selected,
  onToggleSelected,
  editing,
  editBody,
  editDirty,
  editConflict,
  onStartEdit,
  onEditBodyChange,
  onSaveEdit,
  onCancelEdit
}: CaptureCardProps): JSX.Element {
  async function toggleTask(): Promise<void> {
    await plugin.captureService.setTaskStatus(item, item.taskStatus === "done" ? "todo" : "done");
  }

  async function restore(): Promise<void> {
    await plugin.captureService.setStatus(item, "active");
  }

  function onEditKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      onSaveEdit();
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      onCancelEdit();
    }
  }

  return (
    <article className={`local-capture-card ${selected ? "is-selected" : ""} status-${item.status}`}>
      <header className="local-capture-card-header">
        <label className="local-capture-select">
          <input type="checkbox" checked={selected} onChange={onToggleSelected} />
          <span />
        </label>

        <div className="local-capture-card-meta">
          <time>{formatDisplayDateTime(item.createdAt)}</time>
          <span className={`local-capture-type-badge local-capture-type-${item.type}`}>
            {item.type === "task" ? "任务" : "笔记"}
          </span>
          {item.status !== "active" ? (
            <span className="local-capture-status-badge">{statusText(item.status)}</span>
          ) : null}
        </div>

        <div className="local-capture-card-actions">
          {item.type === "task" ? (
            <IconButton
              title={item.taskStatus === "done" ? "标记为待办" : "标记为完成"}
              onClick={toggleTask}
            >
              {item.taskStatus === "done" ? <CheckCircle2 size={16} /> : <Circle size={16} />}
            </IconButton>
          ) : null}
          <IconButton
            title={item.pinned ? "取消置顶" : "置顶"}
            onClick={() => plugin.captureService.setPinned(item, !item.pinned)}
          >
            {item.pinned ? <PinOff size={16} /> : <Pin size={16} />}
          </IconButton>
          {editing ? (
            <>
              <IconButton title="保存编辑" onClick={onSaveEdit}>
                <Check size={16} />
              </IconButton>
              <IconButton title="取消编辑" onClick={onCancelEdit}>
                <X size={16} />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton title="编辑" onClick={onStartEdit}>
                <Pencil size={16} />
              </IconButton>
              <OverflowMenu title="更多操作" align="right">
                <button type="button" role="menuitem" onClick={() => plugin.pickTargetAndSend([item])}>
                  <Send size={14} aria-hidden="true" />
                  <span>发送到文件</span>
                </button>
                <button type="button" role="menuitem" onClick={() => plugin.openCaptureFile(item)}>
                  <ExternalLink size={14} aria-hidden="true" />
                  <span>打开源文件</span>
                </button>
                {item.status === "active" ? (
                  <button type="button" role="menuitem" onClick={() => plugin.captureService.setStatus(item, "archived")}>
                    <Archive size={14} aria-hidden="true" />
                    <span>归档</span>
                  </button>
                ) : (
                  <button type="button" role="menuitem" onClick={restore}>
                    <ArchiveRestore size={14} aria-hidden="true" />
                    <span>恢复</span>
                  </button>
                )}
                {item.status !== "deleted" ? (
                  <button
                    type="button"
                    role="menuitem"
                    className="local-capture-destructive"
                    onClick={() => plugin.captureService.setStatus(item, "deleted")}
                  >
                    <Trash2 size={14} aria-hidden="true" />
                    <span>删除</span>
                  </button>
                ) : null}
              </OverflowMenu>
            </>
          )}
        </div>
      </header>

      <div className="local-capture-card-body">
        {editing ? (
          <div className="local-capture-edit-wrap">
            {editConflict ? (
              <div className="local-capture-edit-alert" role="status">
                源文件已更新，保存会覆盖当前正文。
              </div>
            ) : editDirty ? (
              <div className="local-capture-edit-status" role="status">
                未保存
              </div>
            ) : null}
            <textarea
              className="local-capture-edit"
              value={editBody}
              onChange={(event) => onEditBodyChange(event.currentTarget.value)}
              onKeyDown={onEditKeyDown}
            />
          </div>
        ) : (
          <MarkdownPreview markdown={item.bodyMarkdown} sourcePath={item.path} plugin={plugin} />
        )}
      </div>

      {item.tags.length > 0 ? (
        <footer className="local-capture-card-footer">
          <div className="local-capture-tags">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="local-capture-tag-pill"
                style={tagColorStyle(plugin.settings.tagColors[tag])}
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      ) : null}
    </article>
  );
}
