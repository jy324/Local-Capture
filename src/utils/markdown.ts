import { CaptureItem } from "../types";
import { formatDisplayDateTime } from "./dates";

export function formatCaptureForAppend(capture: CaptureItem): string {
  const title = capture.title ?? "未命名记录";
  const sourceLine = `来源：[[${capture.path}|${title}]]`;
  const header = `## ${formatDisplayDateTime(capture.createdAt)}`;
  return `\n\n${header}\n\n${capture.bodyMarkdown.trim()}\n\n> ${sourceLine}\n`;
}

