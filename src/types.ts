export type CaptureType = "note" | "task";
export type TaskStatus = "todo" | "done";
export type CaptureStatus = "active" | "archived" | "deleted";
export type CaptureSourceType = "manual" | "clipboard" | "uri" | "mobile-share";
export type DailySummaryTarget = "generated" | "daily-note";

export interface CaptureSource {
  type: CaptureSourceType;
  url?: string;
}

export interface CaptureItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  path: string;
  title?: string;
  bodyMarkdown: string;
  type: CaptureType;
  taskStatus?: TaskStatus;
  tags: string[];
  pinned: boolean;
  status: CaptureStatus;
  sentTo: string[];
  source?: CaptureSource;
}

export interface CreateCaptureInput {
  bodyMarkdown: string;
  type: CaptureType;
  taskStatus?: TaskStatus;
  source?: CaptureSource;
}

export interface CaptureFilterState {
  query: string;
  status: CaptureStatus | "all";
  selectedDay?: string;
}

export type CaptureIndexListener = () => void;
