import { CaptureStatus } from "../types";

export type StatusFilter = CaptureStatus | "all";
export type ViewMode = "timeline" | "table";
export type TableSortKey = "createdAt" | "type" | "status" | "title" | "tags";
export type SortDirection = "asc" | "desc";
export type TableColumn = "time" | "type" | "status" | "title" | "tags";
