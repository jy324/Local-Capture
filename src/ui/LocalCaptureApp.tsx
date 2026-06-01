import Fuse from "fuse.js";
import {
  Archive,
  ArchiveRestore,
  CalendarPlus,
  Columns3,
  Check,
  CheckCircle2,
  Circle,
  ExternalLink,
  FileInput,
  List,
  ListTodo,
  Pencil,
  Pin,
  PinOff,
  RefreshCcw,
  RotateCcw,
  Save,
  Star,
  Search,
  Send,
  SlidersHorizontal,
  Tags,
  Table2,
  Trash2,
  X
} from "lucide-react";
import { Notice } from "obsidian";
import { CSSProperties, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type LocalCapturePlugin from "../main";
import { CaptureItem, CaptureStatus, CaptureType, SavedQuery } from "../types";
import { dayKeyFromIso, formatDisplayDateTime, formatDisplayTime, recentDayKeys, todayDayKey } from "../utils/dates";
import { MarkdownPreview } from "./MarkdownPreview";

interface LocalCaptureAppProps {
  plugin: LocalCapturePlugin;
}

type StatusFilter = CaptureStatus | "all";
type ViewMode = "timeline" | "table";
type TableSortKey = "createdAt" | "type" | "status" | "title" | "tags";
type SortDirection = "asc" | "desc";
type TableColumn = "time" | "type" | "status" | "title" | "tags";

export function LocalCaptureApp({ plugin }: LocalCaptureAppProps): JSX.Element {
  const [items, setItems] = useState<CaptureItem[]>(() => plugin.index.getItems());
  const [draft, setDraft] = useState("");
  const [draftType, setDraftType] = useState<CaptureType>(plugin.settings.defaultType);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("active");
  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");
  const [savedQueryName, setSavedQueryName] = useState("");
  const [savedQueryId, setSavedQueryId] = useState("");
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>(() => plugin.settings.savedQueries);
  const [tableSortKey, setTableSortKey] = useState<TableSortKey>("createdAt");
  const [tableSortDirection, setTableSortDirection] = useState<SortDirection>("desc");
  const [visibleColumns, setVisibleColumns] = useState<Set<TableColumn>>(
    () => new Set(["time", "type", "status", "title", "tags"])
  );

  useEffect(() => {
    return plugin.index.subscribe(() => {
      setItems(plugin.index.getItems());
    });
  }, [plugin]);

  useEffect(() => {
    plugin.setSelectedCaptureIds(selectedIds);
  }, [plugin, selectedIds]);

  useEffect(() => {
    plugin.setActiveDayKey(selectedDay);
  }, [plugin, selectedDay]);

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

  const tableItems = useMemo(
    () => sortTableItems(filteredItems, tableSortKey, tableSortDirection),
    [filteredItems, tableSortDirection, tableSortKey]
  );

  const selectedItems = useMemo(
    () => items.filter((item) => selectedIds.includes(item.id)),
    [items, selectedIds]
  );

  const tagCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      if (item.status === "deleted") continue;
      for (const tag of item.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [items]);

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

  const summaryDay = selectedDay ?? todayDayKey();

  async function saveCurrentQuery(): Promise<void> {
    const name = savedQueryName.trim() || buildDefaultQueryName(query, status, selectedDay);
    const saved = await plugin.saveQuery(name, { query, status, selectedDay });
    setSavedQueries([...plugin.settings.savedQueries]);
    setSavedQueryId(saved.id);
    setSavedQueryName("");
  }

  async function deleteCurrentSavedQuery(): Promise<void> {
    if (!savedQueryId) return;
    await plugin.deleteQuery(savedQueryId);
    setSavedQueries([...plugin.settings.savedQueries]);
    setSavedQueryId("");
  }

  function applySavedQuery(id: string): void {
    setSavedQueryId(id);
    const saved = savedQueries.find((savedQuery) => savedQuery.id === id);
    if (!saved) return;
    setQuery(saved.query);
    setStatus(saved.status);
    setSelectedDay(saved.selectedDay);
  }

  function toggleTableColumn(column: TableColumn): void {
    setVisibleColumns((current) => {
      const next = new Set(current);
      if (next.has(column) && next.size > 1) {
        next.delete(column);
      } else {
        next.add(column);
      }
      return next;
    });
  }

  function toggleSelectAllVisible(): void {
    const visibleIds = (viewMode === "table" ? tableItems : filteredItems).map((item) => item.id);
    const allSelected = visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));
    setSelectedIds((current) => {
      if (allSelected) {
        const visible = new Set(visibleIds);
        return current.filter((id) => !visible.has(id));
      }
      return [...new Set([...current, ...visibleIds])];
    });
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

        <div className="local-capture-view-tabs" role="tablist" aria-label="视图切换">
          <button
            type="button"
            className={viewMode === "timeline" ? "is-active" : ""}
            title="时间线视图"
            onClick={() => setViewMode("timeline")}
          >
            <List size={14} aria-hidden="true" />
            时间线
          </button>
          <button
            type="button"
            className={viewMode === "table" ? "is-active" : ""}
            title="表格视图"
            onClick={() => setViewMode("table")}
          >
            <Table2 size={14} aria-hidden="true" />
            表格
          </button>
        </div>

        <div className="local-capture-saved-query-row">
          <select value={savedQueryId} onChange={(event) => applySavedQuery(event.currentTarget.value)}>
            <option value="">保存查询</option>
            {savedQueries.map((savedQuery) => (
              <option key={savedQuery.id} value={savedQuery.id}>
                {savedQuery.name}
              </option>
            ))}
          </select>
          <input
            value={savedQueryName}
            placeholder="命名当前筛选"
            onChange={(event) => setSavedQueryName(event.currentTarget.value)}
          />
          <button type="button" title="保存当前查询" onClick={() => void saveCurrentQuery()}>
            <Star size={14} aria-hidden="true" />
          </button>
          <button
            type="button"
            title="删除选中查询"
            disabled={!savedQueryId}
            onClick={() => void deleteCurrentSavedQuery()}
          >
            <Trash2 size={14} aria-hidden="true" />
          </button>
        </div>

        {tagCounts.length > 0 ? (
          <div className="local-capture-tag-cloud" aria-label="标签列表">
            {tagCounts.slice(0, 18).map(([tag, count]) => (
              <button
                key={tag}
                type="button"
                title={`筛选 #${tag}`}
                style={tagColorStyle(plugin.settings.tagColors[tag])}
                onClick={() => setQuery(`#${tag}`)}
              >
                #{tag}
                <span>{count}</span>
              </button>
            ))}
          </div>
        ) : null}

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

        <div className="local-capture-tool-row">
          <button
            type="button"
            title="重建索引"
            onClick={() => void plugin.captureService.rebuildIndex()}
          >
            <RefreshCcw size={14} aria-hidden="true" />
            重建
          </button>
          <button
            type="button"
            title={`生成 ${summaryDay} 摘要`}
            onClick={() => void plugin.captureService.generateDailySummary(summaryDay)}
          >
            <CalendarPlus size={14} aria-hidden="true" />
            摘要
          </button>
          <button
            type="button"
            title={`发送 ${summaryDay} 摘要到文件`}
            onClick={() => void plugin.pickTargetAndGenerateSummary(summaryDay)}
          >
            <Send size={14} aria-hidden="true" />
            到文件
          </button>
          <button
            type="button"
            title="运行诊断"
            onClick={() => void plugin.runDiagnostics()}
          >
            <Columns3 size={14} aria-hidden="true" />
            诊断
          </button>
          <button
            type="button"
            title="标签管理"
            onClick={() => plugin.openTagManagementModal()}
          >
            <Tags size={14} aria-hidden="true" />
            标签
          </button>
          <button
            type="button"
            title="选择/取消当前结果"
            onClick={toggleSelectAllVisible}
          >
            <SlidersHorizontal size={14} aria-hidden="true" />
            选择结果
          </button>
        </div>
      </section>

      {selectedItems.length > 0 ? (
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

      {viewMode === "timeline" ? (
        <Timeline
          plugin={plugin}
          items={filteredItems}
          selectedIds={selectedIds}
          onToggleSelected={toggleSelected}
        />
      ) : (
        <>
          <TableColumnControls visibleColumns={visibleColumns} onToggle={toggleTableColumn} />
          <CaptureTable
          plugin={plugin}
          items={tableItems}
          selectedIds={selectedIds}
          onToggleSelected={toggleSelected}
          visibleColumns={visibleColumns}
          sortKey={tableSortKey}
          sortDirection={tableSortDirection}
          onSort={(nextKey) => {
            if (tableSortKey === nextKey) {
              setTableSortDirection((current) => current === "asc" ? "desc" : "asc");
            } else {
              setTableSortKey(nextKey);
              setTableSortDirection("asc");
            }
          }}
        />
        </>
      )}
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

interface CaptureTableProps extends TimelineProps {
  visibleColumns: Set<TableColumn>;
  sortKey: TableSortKey;
  sortDirection: SortDirection;
  onSort: (key: TableSortKey) => void;
}

function TableColumnControls({
  visibleColumns,
  onToggle
}: {
  visibleColumns: Set<TableColumn>;
  onToggle: (column: TableColumn) => void;
}): JSX.Element {
  return (
    <div className="local-capture-column-controls" aria-label="表格列显示">
      {tableColumns.map((column) => (
        <label key={column.key}>
          <input
            type="checkbox"
            checked={visibleColumns.has(column.key)}
            onChange={() => onToggle(column.key)}
          />
          {column.label}
        </label>
      ))}
    </div>
  );
}

function CaptureTable({
  plugin,
  items,
  selectedIds,
  onToggleSelected,
  visibleColumns,
  sortKey,
  sortDirection,
  onSort
}: CaptureTableProps): JSX.Element {
  if (items.length === 0) {
    return (
      <div className="local-capture-empty">
        <FileInput size={28} aria-hidden="true" />
        <span>没有匹配的记录</span>
      </div>
    );
  }

  return (
    <div className="local-capture-table-wrap">
      <table className="local-capture-table">
        <thead>
          <tr>
            <th aria-label="选择" />
            {visibleColumns.has("time") ? <SortableHeader label="时间" sortKey="createdAt" activeKey={sortKey} direction={sortDirection} onSort={onSort} /> : null}
            {visibleColumns.has("type") ? <SortableHeader label="类型" sortKey="type" activeKey={sortKey} direction={sortDirection} onSort={onSort} /> : null}
            {visibleColumns.has("status") ? <SortableHeader label="状态" sortKey="status" activeKey={sortKey} direction={sortDirection} onSort={onSort} /> : null}
            {visibleColumns.has("title") ? <SortableHeader label="标题" sortKey="title" activeKey={sortKey} direction={sortDirection} onSort={onSort} /> : null}
            {visibleColumns.has("tags") ? <SortableHeader label="标签" sortKey="tags" activeKey={sortKey} direction={sortDirection} onSort={onSort} /> : null}
            <th aria-label="操作" />
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={selectedIds.includes(item.id) ? "is-selected" : ""}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => onToggleSelected(item.id)}
                />
              </td>
              {visibleColumns.has("time") ? <td>{formatDisplayDateTime(item.createdAt)}</td> : null}
              {visibleColumns.has("type") ? <td>{item.type === "task" ? "任务" : "笔记"}</td> : null}
              {visibleColumns.has("status") ? <td>{statusText(item.status)}</td> : null}
              {visibleColumns.has("title") ? <td>
                <button type="button" onClick={() => void plugin.openCaptureFile(item)}>
                  {item.title ?? "未命名记录"}
                </button>
              </td> : null}
              {visibleColumns.has("tags") ? <td>{item.tags.map((tag) => `#${tag}`).join(" ")}</td> : null}
              <td>
                <button type="button" title="发送到文件" onClick={() => void plugin.pickTargetAndSend([item])}>
                  <Send size={14} aria-hidden="true" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SortableHeader({
  label,
  sortKey,
  activeKey,
  direction,
  onSort
}: {
  label: string;
  sortKey: TableSortKey;
  activeKey: TableSortKey;
  direction: SortDirection;
  onSort: (key: TableSortKey) => void;
}): JSX.Element {
  const suffix = activeKey === sortKey ? (direction === "asc" ? " ↑" : " ↓") : "";
  return (
    <th>
      <button type="button" onClick={() => onSort(sortKey)}>
        {label}{suffix}
      </button>
    </th>
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

function buildDefaultQueryName(query: string, status: StatusFilter, selectedDay?: string): string {
  const parts = [
    selectedDay,
    status === "all" ? "全部" : statusText(status),
    query.trim() ? `"${query.trim()}"` : undefined
  ].filter(Boolean);

  return parts.join(" · ") || "当前筛选";
}

const tableColumns: Array<{ key: TableColumn; label: string }> = [
  { key: "time", label: "时间" },
  { key: "type", label: "类型" },
  { key: "status", label: "状态" },
  { key: "title", label: "标题" },
  { key: "tags", label: "标签" }
];

function sortTableItems(items: CaptureItem[], key: TableSortKey, direction: SortDirection): CaptureItem[] {
  const multiplier = direction === "asc" ? 1 : -1;
  return [...items].sort((a, b) => multiplier * compareTableItems(a, b, key));
}

function compareTableItems(a: CaptureItem, b: CaptureItem, key: TableSortKey): number {
  if (key === "createdAt") {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  }
  if (key === "tags") {
    return a.tags.join(" ").localeCompare(b.tags.join(" "));
  }
  return String(a[key] ?? "").localeCompare(String(b[key] ?? ""));
}

function tagColorStyle(color: string | undefined): CSSProperties | undefined {
  if (!color) return undefined;
  return {
    borderColor: color,
    color
  };
}
