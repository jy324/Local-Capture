import { CaptureItem, CaptureSourceType, CaptureStatus, CaptureType, TaskStatus } from "../types";
import { extractInlineTags, mergeTags } from "./tags";

interface FrontmatterParts {
  frontmatter: Record<string, unknown>;
  body: string;
}

const FRONTMATTER_BLOCK = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

function parseScalar(value: string): unknown {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean);
  }
  return trimmed.replace(/^["']|["']$/g, "");
}

function parseSimpleYaml(yaml: string): Record<string, unknown> {
  const lines = yaml.split(/\r?\n/);
  const result: Record<string, unknown> = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (rawValue.trim()) {
      result[key] = parseScalar(rawValue);
      continue;
    }

    const values: string[] = [];
    let cursor = index + 1;
    while (cursor < lines.length) {
      const itemMatch = /^\s*-\s*(.*)$/.exec(lines[cursor]);
      if (!itemMatch) break;
      values.push(String(parseScalar(itemMatch[1])));
      cursor += 1;
    }

    result[key] = values;
    index = cursor - 1;
  }

  return result;
}

export function splitFrontmatter(raw: string): FrontmatterParts {
  const match = FRONTMATTER_BLOCK.exec(raw);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }

  return {
    frontmatter: parseSimpleYaml(match[1]),
    body: raw.slice(match[0].length)
  };
}

/**
 * Replace only the body of a capture file, preserving the original frontmatter
 * block verbatim (including any user-authored keys we don't model). When the
 * file has no frontmatter, the body is replaced wholesale.
 */
export function replaceBody(raw: string, newBody: string): string {
  const match = FRONTMATTER_BLOCK.exec(raw);
  const body = `${newBody.trimEnd()}\n`;
  if (!match) {
    return body;
  }
  return `${match[0]}${body}`;
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function asBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function asStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }
  return [];
}

function normalizeType(value: unknown): CaptureType {
  return value === "task" ? "task" : "note";
}

function normalizeTaskStatus(value: unknown): TaskStatus | undefined {
  return value === "done" ? "done" : value === "todo" ? "todo" : undefined;
}

function normalizeStatus(value: unknown): CaptureStatus {
  if (value === "archived" || value === "deleted") return value;
  return "active";
}

function normalizeSource(value: unknown): CaptureSourceType | undefined {
  if (value === "manual" || value === "clipboard" || value === "uri" || value === "mobile-share") {
    return value;
  }
  return undefined;
}

function deriveTitle(markdown: string): string | undefined {
  const firstLine = markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find(Boolean);

  if (!firstLine) return undefined;

  return firstLine
    .replace(/^#+\s*/, "")
    .replace(/^[-*]\s+/, "")
    .replace(/^\[[ xX]\]\s*/, "")
    .slice(0, 96);
}

function quoteYaml(value: string): string {
  return JSON.stringify(value);
}

function serializeArray(key: string, values: string[]): string[] {
  if (values.length === 0) return [`${key}: []`];
  return [
    `${key}:`,
    ...values.map((value) => `  - ${quoteYaml(value)}`)
  ];
}

export function parseCaptureFile(path: string, raw: string): CaptureItem | null {
  const { frontmatter, body } = splitFrontmatter(raw);
  const id = asString(frontmatter.capture_id);
  if (!id) return null;

  const type = normalizeType(frontmatter.type);
  const sourceType = normalizeSource(frontmatter.source);
  const sourceUrl = asString(frontmatter.source_url);
  const frontmatterTags = asStringArray(frontmatter.tags);
  const tags = mergeTags(frontmatterTags, extractInlineTags(body));
  const createdAt = asString(frontmatter.created) ?? new Date(0).toISOString();
  const updatedAt = asString(frontmatter.updated) ?? createdAt;

  return {
    id,
    createdAt,
    updatedAt,
    path,
    title: deriveTitle(body),
    bodyMarkdown: body.trimEnd(),
    type,
    taskStatus: type === "task" ? normalizeTaskStatus(frontmatter.task_status) ?? "todo" : undefined,
    status: normalizeStatus(frontmatter.status),
    pinned: asBoolean(frontmatter.pinned, false),
    tags,
    sentTo: asStringArray(frontmatter.sent_to),
    source: sourceType
      ? {
          type: sourceType,
          url: sourceUrl
        }
      : undefined
  };
}

export function serializeCaptureFile(item: CaptureItem): string {
  const lines: string[] = [
    "---",
    `capture_id: ${quoteYaml(item.id)}`,
    `created: ${quoteYaml(item.createdAt)}`,
    `updated: ${quoteYaml(item.updatedAt)}`,
    `type: ${quoteYaml(item.type)}`,
    ...(item.type === "task" ? [`task_status: ${quoteYaml(item.taskStatus ?? "todo")}`] : []),
    `status: ${quoteYaml(item.status)}`,
    `pinned: ${item.pinned ? "true" : "false"}`,
    ...serializeArray("tags", item.tags)
  ];

  if (item.sentTo.length > 0) {
    lines.push(...serializeArray("sent_to", item.sentTo));
  }

  if (item.source?.type) {
    lines.push(`source: ${quoteYaml(item.source.type)}`);
  }

  if (item.source?.url) {
    lines.push(`source_url: ${quoteYaml(item.source.url)}`);
  }

  lines.push("---", "", item.bodyMarkdown.trimEnd(), "");
  return lines.join("\n");
}

