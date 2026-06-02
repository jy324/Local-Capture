import { describe, expect, it, vi } from "vitest";

vi.mock("obsidian", () => {
  class TFile {
    path: string;
    extension: string;
    basename: string;

    constructor(path: string) {
      this.path = path;
      this.extension = path.split(".").pop() ?? "";
      this.basename = path.split("/").pop()?.replace(/\.md$/, "") ?? path;
    }
  }

  return {
    App: class {},
    Notice: class {
      constructor(_message: string) {}
    },
    TFile,
    normalizePath: (path: string) => path.replace(/\\/g, "/").replace(/\/+/g, "/")
  };
});

const { TFile } = await import("obsidian");
const { CaptureService } = await import("../src/services/CaptureService");
const { parseCaptureFile, splitFrontmatter } = await import("../src/utils/frontmatter");

function makeRaw(tags: string[], body: string): string {
  return [
    "---",
    'capture_id: "batch-1"',
    'created: "2026-06-03T00:00:00.000Z"',
    'updated: "2026-06-03T00:00:00.000Z"',
    'type: "note"',
    'status: "active"',
    "pinned: false",
    "tags:",
    ...tags.map((tag) => `  - "${tag}"`),
    'source: "manual"',
    "---",
    "",
    body,
    ""
  ].join("\n");
}

function serializeFrontmatter(frontmatter: Record<string, unknown>, body: string): string {
  const lines = ["---"];
  for (const [key, value] of Object.entries(frontmatter)) {
    if (Array.isArray(value)) {
      lines.push(`${key}:`, ...value.map((entry) => `  - "${entry}"`));
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value ? "true" : "false"}`);
    } else {
      lines.push(`${key}: "${String(value)}"`);
    }
  }
  lines.push("---", body.trim(), "");
  return lines.join("\n");
}

function makeService(raw: string) {
  const path = "Captures/2026/06/batch.md";
  const file = new (TFile as unknown as { new (path: string): InstanceType<typeof TFile> })(path);
  let content = raw;
  const updateFile = vi.fn(async () => {});

  const app = {
    vault: {
      getAbstractFileByPath: vi.fn(() => file),
      process: vi.fn(async (_file: unknown, fn: (current: string) => string) => {
        content = fn(content);
        return content;
      })
    },
    fileManager: {
      processFrontMatter: vi.fn(async (_file: unknown, fn: (frontmatter: Record<string, unknown>) => void) => {
        const parts = splitFrontmatter(content);
        fn(parts.frontmatter);
        content = serializeFrontmatter(parts.frontmatter, parts.body);
      })
    }
  };

  const service = new CaptureService(
    app as never,
    () => ({
      captureFolder: "Captures",
      defaultType: "note",
      autoArchiveAfterSend: true,
      timelinePageSize: 80,
      heatmapDays: 90,
      dailySummaryTarget: "generated",
      dailySummaryFolder: "Captures/Generated/Daily Summary",
      dailyNoteFolder: "",
      savedQueries: [],
      tagColors: {},
      captureTemplates: {
        note: "{{content}}",
        task: "{{content}}",
        clipboard: "{{content}}",
        uri: "{{content}}"
      },
      advancedFiltersOpen: false
    }),
    { updateFile } as never
  );

  return {
    service,
    getContent: () => content,
    getItem: () => parseCaptureFile(path, content)!
  };
}

describe("batch tag updates", () => {
  it("removes tags from frontmatter and inline body so rebuild will not restore them", async () => {
    const context = makeService(makeRaw(["qa", "keep"], "Body with #qa and #keep tags."));
    await context.service.updateTagsMany([context.getItem()], ["qa"], "remove");

    const updated = context.getItem();
    expect(updated.tags).toEqual(["keep"]);
    expect(updated.bodyMarkdown).not.toContain("#qa");
    expect(updated.bodyMarkdown).toContain("#keep");
  });

  it("replaces frontmatter tags and removes old inline tags from the body", async () => {
    const context = makeService(makeRaw(["qa", "old"], "Body with #qa and #old tags."));
    await context.service.updateTagsMany([context.getItem()], ["next"], "replace");

    const updated = context.getItem();
    expect(updated.tags).toEqual(["next"]);
    expect(updated.bodyMarkdown).not.toContain("#qa");
    expect(updated.bodyMarkdown).not.toContain("#old");
  });

  it("adds tags to frontmatter without editing inline body", async () => {
    const context = makeService(makeRaw(["qa"], "Body with #qa tag."));
    await context.service.updateTagsMany([context.getItem()], ["added"], "add");

    const updated = context.getItem();
    expect(updated.tags).toEqual(["qa", "added"]);
    expect(updated.bodyMarkdown).toBe("Body with #qa tag.");
  });
});
