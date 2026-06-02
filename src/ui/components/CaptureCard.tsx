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
import { JSX, useEffect, useState } from "react";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";
import { formatDisplayDateTime, formatDisplayTime } from "../../utils/dates";
import { IconButton } from "../shared/IconButton";
import { statusText } from "../shared/formatters";
import { MarkdownPreview } from "../MarkdownPreview";

interface CaptureCardProps {
  plugin: LocalCapturePlugin;
  item: CaptureItem;
  selected: boolean;
  onToggleSelected: () => void;
}

export function CaptureCard({ plugin, item, selected, onToggleSelected }: CaptureCardProps): JSX.Element {
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(item.bodyMarkdown);

  useEffect(() => {
    if (!editing) {
      setBody(item.bodyMarkdown);
    }
  }, [editing, item.bodyMarkdown]);

  async function saveEdit(): Promise<void> {
    await plugin.captureService.updateBody(item, body);
    setEditing(false);
  }

  async function toggleTask(): Promise<void> {
    await plugin.captureService.setTaskStatus(item, item.taskStatus === "done" ? "todo" : "done");
  }

  async function restore(): Promise<void> {
    await plugin.captureService.setStatus(item, "active");
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
          <span>{item.type === "task" ? "任务" : "笔记"}</span>
          {item.status !== "active" ? <span>{statusText(item.status)}</span> : null}
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
              <IconButton title="保存编辑" onClick={saveEdit}>
                <Check size={16} />
              </IconButton>
              <IconButton title="取消编辑" onClick={() => setEditing(false)}>
                <X size={16} />
              </IconButton>
            </>
          ) : (
            <IconButton title="编辑" onClick={() => setEditing(true)}>
              <Pencil size={16} />
            </IconButton>
          )}
          <IconButton title="发送到文件" onClick={() => plugin.pickTargetAndSend([item])}>
            <Send size={16} />
          </IconButton>
          <IconButton title="打开源文件" onClick={() => plugin.openCaptureFile(item)}>
            <ExternalLink size={16} />
          </IconButton>
          {item.status === "active" ? (
            <IconButton title="归档" onClick={() => plugin.captureService.setStatus(item, "archived")}>
              <Archive size={16} />
            </IconButton>
          ) : (
            <IconButton title="恢复" onClick={restore}>
              <ArchiveRestore size={16} />
            </IconButton>
          )}
          {item.status !== "deleted" ? (
            <IconButton title="删除" onClick={() => plugin.captureService.setStatus(item, "deleted")}>
              <Trash2 size={16} />
            </IconButton>
          ) : null}
        </div>
      </header>

      <div className="local-capture-card-body">
        {editing ? (
          <textarea
            className="local-capture-edit"
            value={body}
            onChange={(event) => setBody(event.currentTarget.value)}
          />
        ) : (
          <MarkdownPreview markdown={item.bodyMarkdown} sourcePath={item.path} plugin={plugin} />
        )}
      </div>

      <footer className="local-capture-card-footer">
        <span>{formatDisplayTime(item.createdAt)}</span>
        <div className="local-capture-tags">
          {item.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}
