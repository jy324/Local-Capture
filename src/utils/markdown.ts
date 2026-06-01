import { CaptureItem } from "../types";
import { dayKeyFromIso, formatDisplayDateTime, formatDisplayTime } from "./dates";

export function formatCaptureForAppend(capture: CaptureItem): string {
  const title = capture.title ?? "未命名记录";
  const sourceLine = `来源：[[${capture.path}|${title}]]`;
  const header = `## ${formatDisplayDateTime(capture.createdAt)}`;
  return `\n\n${header}\n\n${capture.bodyMarkdown.trim()}\n\n> ${sourceLine}\n`;
}

export function formatDailySummaryBlock(dayKey: string, captures: CaptureItem[]): string {
  const sorted = captures
    .filter((capture) => capture.status !== "deleted" && dayKeyFromIso(capture.createdAt) === dayKey)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  const noteCount = sorted.filter((capture) => capture.type === "note").length;
  const taskCount = sorted.filter((capture) => capture.type === "task").length;
  const doneTaskCount = sorted.filter((capture) => capture.type === "task" && capture.taskStatus === "done").length;
  const lines = [
    summaryStartMarker(dayKey),
    `## Local Capture · ${dayKey}`,
    "",
    `共 ${sorted.length} 条记录：${noteCount} 条笔记，${taskCount} 个任务，${doneTaskCount} 个已完成。`,
    ""
  ];

  if (sorted.length === 0) {
    lines.push("今日暂无记录。", "");
  } else {
    for (const capture of sorted) {
      const typeText = capture.type === "task" ? taskStatusText(capture) : "笔记";
      const tags = capture.tags.length > 0 ? ` · ${capture.tags.map((tag) => `#${tag}`).join(" ")}` : "";
      const title = capture.title ?? "未命名记录";
      lines.push(`### ${formatDisplayTime(capture.createdAt)} · ${typeText}${tags}`);
      lines.push(`![[${capture.path}|${title}]]`);
      lines.push("");
    }
  }

  lines.push(summaryEndMarker(dayKey), "");
  return lines.join("\n");
}

export function upsertDailySummaryBlock(current: string, dayKey: string, block: string): string {
  const start = summaryStartMarker(dayKey);
  const end = summaryEndMarker(dayKey);
  const escapedStart = escapeRegExp(start);
  const escapedEnd = escapeRegExp(end);
  const existingBlock = new RegExp(`${escapedStart}[\\s\\S]*?${escapedEnd}\\n?`);

  if (existingBlock.test(current)) {
    return current.replace(existingBlock, block);
  }

  const prefix = current.trimEnd();
  return prefix ? `${prefix}\n\n${block}` : block;
}

export function summaryStartMarker(dayKey: string): string {
  return `<!-- local-capture-summary:start ${dayKey} -->`;
}

export function summaryEndMarker(dayKey: string): string {
  return `<!-- local-capture-summary:end ${dayKey} -->`;
}

function taskStatusText(capture: CaptureItem): string {
  return capture.taskStatus === "done" ? "任务已完成" : "任务待办";
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
