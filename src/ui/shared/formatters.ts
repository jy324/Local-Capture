import { CSSProperties } from "react";
import { CaptureItem, CaptureStatus } from "../../types";
import { SortDirection, StatusFilter, TableColumn, TableSortKey } from "../types";

export function statusText(status: CaptureStatus): string {
  if (status === "archived") return "归档";
  if (status === "deleted") return "删除";
  return "活跃";
}

export function buildDefaultQueryName(query: string, status: StatusFilter, selectedDay?: string): string {
  const parts = [
    selectedDay,
    status === "all" ? "全部" : statusText(status),
    query.trim() ? `"${query.trim()}"` : undefined
  ].filter(Boolean);

  return parts.join(" · ") || "当前筛选";
}

export const tableColumns: Array<{ key: TableColumn; label: string }> = [
  { key: "time", label: "时间" },
  { key: "type", label: "类型" },
  { key: "status", label: "状态" },
  { key: "title", label: "标题" },
  { key: "tags", label: "标签" }
];

export function sortTableItems(items: CaptureItem[], key: TableSortKey, direction: SortDirection): CaptureItem[] {
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

export function tagColorStyle(color: string | undefined): CSSProperties | undefined {
  if (!color) return undefined;
  return {
    borderColor: color,
    color
  };
}
