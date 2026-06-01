import Fuse from "fuse.js";
import {
  Archive,
  ArchiveRestore,
  Check,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileInput,
  Pencil,
  Pin,
  PinOff,
  RefreshCcw,
  RotateCcw,
  Save,
  Search,
  Send,
  Trash2,
  X
} from "lucide-react";
import { Notice } from "obsidian";
import { KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type LocalCapturePlugin from "../main";
import { CaptureItem, CaptureStatus, CaptureType } from "../types";
import { dayKeyFromIso, formatDisplayDateTime, formatDisplayTime, recentDayKeys } from "../utils/dates";
import { MarkdownPreview } from "./MarkdownPreview";

interface LocalCaptureAppProps {
  plugin: LocalCapturePlugin;
}

type StatusFilter = CaptureStatus | "all";

export function LocalCaptureApp({ plugin }: LocalCaptureAppProps): JSX.Element {
  const [items, setItems] = useState<CaptureItem[]>(() => plugin.index.getItems());
  const [draft, setDraft] = useState("");
  const [draftType, setDraftType] = useState<CaptureType>(plugin.settings.defaultType);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("active");
  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    return plugin.index.subscribe(() => {
      setItems(plugin.index.getItems());
    });
  }, [plugin]);

  useEffect(() => {
    plugin.setSelectedCaptureIds(selectedIds);
  }, [plugin, selectedIds]);

  useEffect(() => {
    const validIds = new Set(items.map((item) => item.id));
    setSelectedIds((current) => current.filter((id) => validIds.has(id)));
  }, [items]);

  const filteredItems = useMemo(() => {
    const byStatus = status === "all" ? items : items.filter((item) => item.status === status);
    const byDate = selectedDay
      ? byStatus.filter((item) => dayKeyFromIso(item.createdAt) === selectedDay)
      : byStatus;

    if (!query.trim()) return byDate;

    const fuse = new Fuse(byDate, {
      keys: ["title", "bodyMarkdown", "tags", "path", "type"],
      threshold: 0.35,
      ignoreLocation: true
    });

    return fuse.search(query.trim()).map((result) => result.item);
  }, [items, query, selectedDay, status]);

  const selectedItems = useMemo(
    () => items.filter((item) => selectedIds.includes(item.id)),
    [items, selectedIds]
  );

  async function submitDraft(): Promise<void> {
    const bodyMarkdown = draft.trim();
    if (!bodyMarkdown) return;

    await plugin.captureService.createCapture({
      bodyMarkdown,
      type: draftType,
      source: { type: "manual" }
    });
    setDraft("");
  }

  function onDraftKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      void submitDraft();
    }
  }

  function toggleSelected(id: string): void {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((selectedId) => selectedId !== id) : [...current, id]
    );
  }

  async function archiveSelected(): Promise<void> {
    await plugin.captureService.archiveMany(selectedItems);
    setSelectedIds([]);
  }

  async function deleteSelected(): Promise<void> {
    await plugin.captureService.softDeleteMany(selectedItems);
    setSelectedIds([]);
  }

  async function restoreSelected(): Promise<void> {
    await plugin.captureService.restoreMany(selectedItems);
    setSelectedIds([]);
  }

  return (
    <div className="local-capture-app">
      <section className="local-capture-composer" aria-label="快速记录">
        <textarea
          className="local-capture-input"
          value={draft}
          placeholder="写下记录，支持 Markdown 和 #标签"
          onChange={(event) => setDraft(event.currentTarget.value)}
          onKeyDown={onDraftKeyDown}
        />
        <div className="local-capture-composer-row">
          <div className="local-capture-segmented" role="group" aria-label="记录类型">
            <button
              type="button"
              className={draftType === "note" ? "is-active" : ""}
              onClick={() => setDraftType("note")}
            >
              笔记
            </button>
            <button
              type="button"
              className={draftType === "task" ? "is-active" : ""}
              onClick={() => setDraftType("task")}
            >
              任务
            </button>
          </div>
          <button
            type="button"
            className="mod-cta local-capture-primary"
            onClick={() => void submitDraft()}
            disabled={!draft.trim()}
          >
            <Save size={15} aria-hidden="true" />
            保存
          </button>
        </div>
      </section>

      <section className="local-capture-tools" aria-label="筛选">
        <div className="local-capture-search">
          <Search size={15} aria-hidden="true" />
          <input
            value={query}
            placeholder="搜索记录、标签或路径"
            onChange={(event) => setQuery(event.currentTarget.value)}
          />
        </div>

        <div className="local-capture-status-tabs" role="tablist" aria-label="状态筛选">
          <StatusButton label="活跃" value="active" status={status} onChange={setStatus} />
          <StatusButton label="归档" value="archived" status={status} onChange={setStatus} />
          <StatusButton label="删除" value="deleted" status={status} onChange={setStatus} />
          <StatusButton label="全部" value="all" status={status} onChange={setStatus} />
        </div>

        <Heatmap
          items={items}
          days={plugin.settings.heatmapDays}
          selectedDay={selectedDay}
          onSelectDay={(day) => setSelectedDay((current) => (current === day ? undefined : day))}
        />

        {selectedDay ? (
          <button
            type="button"
            className="local-capture-filter-chip"
            onClick={() => setSelectedDay(undefined)}
          >
            {selectedDay}
            <X size={14} aria-hidden="true" />
          </button>
        ) : null}
      </section>

      {selectedItems.length > 0 ? (
        <div className="local-capture-batchbar">
          <span>{selectedItems.length} 条</span>
          <button type="button" title="发送到文件" onClick={() => void plugin.pickTargetAndSend(selectedItems)}>
            <Send size={15} aria-hidden="true" />
          </button>
          <button type="button" title="归档" onClick={() => void archiveSelected()}>
            <Archive size={15} aria-hidden="true" />
          </button>
          <button type="button" title="恢复" onClick={() => void restoreSelected()}>
            <RotateCcw size={15} aria-hidden="true" />
          </button>
          <button type="button" title="删除" onClick={() => void deleteSelected()}>
            <Trash2 size={15} aria-hidden="true" />
          </button>
          <button type="button" title="取消选择" onClick={() => setSelectedIds([])}>
            <X size={15} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <Timeline
        plugin={plugin}
        items={filteredItems}
        selectedIds={selectedIds}
        onToggleSelected={toggleSelected}
      />
    </div>
  );
}

interface StatusButtonProps {
  label: string;
  value: StatusFilter;
  status: StatusFilter;
  onChange: (status: StatusFilter) => void;
}

function StatusButton({ label, value, status, onChange }: StatusButtonProps): JSX.Element {
  return (
    <button type="button" className={status === value ? "is-active" : ""} onClick={() => onChange(value)}>
      {label}
    </button>
  );
}

interface HeatmapProps {
  items: CaptureItem[];
  days: number;
  selectedDay?: string;
  onSelectDay: (day: string) => void;
}

function Heatmap({ items, days, selectedDay, onSelectDay }: HeatmapProps): JSX.Element {
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of items) {
      if (item.status === "deleted") continue;
      const day = dayKeyFromIso(item.createdAt);
      map.set(day, (map.get(day) ?? 0) + 1);
    }
    return map;
  }, [items]);

  const dayKeys = useMemo(() => recentDayKeys(days), [days]);
  const max = Math.max(1, ...dayKeys.map((day) => counts.get(day) ?? 0));

  return (
    <div className="local-capture-heatmap" aria-label="记录热力图">
      {dayKeys.map((day) => {
        const count = counts.get(day) ?? 0;
        const level = count === 0 ? 0 : Math.ceil((count / max) * 4);
        return (
          <button
            key={day}
            type="button"
            className={selectedDay === day ? "is-selected" : ""}
            data-level={level}
            title={`${day}: ${count} 条`}
            aria-label={`${day}: ${count} 条`}
            onClick={() => onSelectDay(day)}
          />
        );
      })}
    </div>
  );
}

interface TimelineProps {
  plugin: LocalCapturePlugin;
  items: CaptureItem[];
  selectedIds: string[];
  onToggleSelected: (id: string) => void;
}

function Timeline({ plugin, items, selectedIds, onToggleSelected }: TimelineProps): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 220,
    overscan: 8
  });

  if (items.length === 0) {
    return (
      <div className="local-capture-empty">
        <FileInput size={28} aria-hidden="true" />
        <span>没有匹配的记录</span>
      </div>
    );
  }

  return (
    <div ref={parentRef} className="local-capture-timeline">
      <div
        className="local-capture-virtual-space"
        style={{
          height: `${virtualizer.getTotalSize()}px`
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = items[virtualItem.index];
          return (
            <div
              key={item.id}
              className="local-capture-virtual-row"
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                transform: `translateY(${virtualItem.start}px)`
              }}
            >
              <CaptureCard
                plugin={plugin}
                item={item}
                selected={selectedIds.includes(item.id)}
                onToggleSelected={() => onToggleSelected(item.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface CaptureCardProps {
  plugin: LocalCapturePlugin;
  item: CaptureItem;
  selected: boolean;
  onToggleSelected: () => void;
}

function CaptureCard({ plugin, item, selected, onToggleSelected }: CaptureCardProps): JSX.Element {
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

interface IconButtonProps {
  title: string;
  children: JSX.Element;
  onClick: () => void | Promise<void>;
}

function IconButton({ title, children, onClick }: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="local-capture-icon-button"
      title={title}
      aria-label={title}
      onClick={() => {
        const result = onClick();
        if (result instanceof Promise) {
          result.catch((error) => {
            console.error(error);
            new Notice("操作失败，请查看控制台");
          });
        }
      }}
    >
      {children}
    </button>
  );
}

function statusText(status: CaptureStatus): string {
  if (status === "archived") return "归档";
  if (status === "deleted") return "删除";
  return "活跃";
}

