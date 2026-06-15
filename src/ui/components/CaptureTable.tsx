import { Columns3, Send } from "lucide-react";
import { JSX, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type LocalCapturePlugin from "../../main";
import { CaptureItem } from "../../types";
import { formatDisplayDateTime } from "../../utils/dates";
import { OverflowMenu } from "../shared/OverflowMenu";
import { statusText, tableColumns } from "../shared/formatters";
import { SortDirection, TableColumn, TableSortKey } from "../types";

interface CaptureTableProps {
  plugin: LocalCapturePlugin;
  items: CaptureItem[];
  isSelected: (id: string) => boolean;
  onToggleSelected: (id: string) => void;
  visibleColumns: Set<TableColumn>;
  sortKey: TableSortKey;
  sortDirection: SortDirection;
  onSort: (key: TableSortKey) => void;
}

const ROW_HEIGHT = 38;

export function TableColumnControls({
  visibleColumns,
  onToggle
}: {
  visibleColumns: Set<TableColumn>;
  onToggle: (column: TableColumn) => void;
}): JSX.Element {
  return (
    <OverflowMenu
      title="表格列显示"
      align="right"
      trigger={<Columns3 size={16} aria-hidden="true" />}
    >
      <div className="local-capture-column-popover" aria-label="表格列显示">
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
    </OverflowMenu>
  );
}

export function CaptureTable({
  plugin,
  items,
  isSelected,
  onToggleSelected,
  visibleColumns,
  sortKey,
  sortDirection,
  onSort
}: CaptureTableProps): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 12
  });

  const virtualRows = virtualizer.getVirtualItems();
  const totalSize = virtualizer.getTotalSize();
  const paddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0;
  const paddingBottom =
    virtualRows.length > 0 ? totalSize - virtualRows[virtualRows.length - 1].end : 0;

  const colCount = visibleColumns.size + 2;

  return (
    <div ref={parentRef} className="local-capture-table-wrap">
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
          {paddingTop > 0 ? (
            <tr aria-hidden="true">
              <td colSpan={colCount} style={{ height: `${paddingTop}px`, padding: 0, border: 0 }} />
            </tr>
          ) : null}
          {virtualRows.map((virtualRow) => {
            const item = items[virtualRow.index];
            return (
              <tr key={item.id} className={isSelected(item.id) ? "is-selected" : ""}>
                <td>
                  <input
                    type="checkbox"
                    checked={isSelected(item.id)}
                    onChange={() => onToggleSelected(item.id)}
                  />
                </td>
                {visibleColumns.has("time") ? <td>{formatDisplayDateTime(item.createdAt)}</td> : null}
                {visibleColumns.has("type") ? <td>{item.type === "task" ? "任务" : "笔记"}</td> : null}
                {visibleColumns.has("status") ? <td>{statusText(item.status)}</td> : null}
                {visibleColumns.has("title") ? <td>
                  <button type="button" onClick={() => plugin.runAction("打开源文件", () => plugin.openCaptureFile(item))}>
                    {item.title ?? "未命名记录"}
                  </button>
                </td> : null}
                {visibleColumns.has("tags") ? <td>{item.tags.map((tag) => `#${tag}`).join(" ")}</td> : null}
                <td>
                  <button type="button" title="发送到文件" onClick={() => plugin.runAction("发送到文件", () => plugin.pickTargetAndSend([item]))}>
                    <Send size={14} aria-hidden="true" />
                  </button>
                </td>
              </tr>
            );
          })}
          {paddingBottom > 0 ? (
            <tr aria-hidden="true">
              <td colSpan={colCount} style={{ height: `${paddingBottom}px`, padding: 0, border: 0 }} />
            </tr>
          ) : null}
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
