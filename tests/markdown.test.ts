import { describe, expect, it } from "vitest";
import { CaptureItem } from "../src/types";
import { formatCaptureForAppend, formatDailySummaryBlock, upsertDailySummaryBlock } from "../src/utils/markdown";

describe("markdown append formatting", () => {
  it("includes body and source wikilink", () => {
    const capture: CaptureItem = {
      id: "a81f",
      createdAt: "2026-05-28T09:30:12.000Z",
      updatedAt: "2026-05-28T09:30:12.000Z",
      path: "Captures/2026/05/20260528-093012-a81f.md",
      title: "阅读论文",
      bodyMarkdown: "阅读论文 #research",
      type: "note",
      status: "active",
      pinned: false,
      tags: ["research"],
      sentTo: []
    };

    const output = formatCaptureForAppend(capture);
    expect(output).toContain("阅读论文 #research");
    expect(output).toContain("[[Captures/2026/05/20260528-093012-a81f.md|阅读论文]]");
  });

  it("builds and upserts daily summary blocks", () => {
    const capture: CaptureItem = {
      id: "a81f",
      createdAt: "2026-05-28T09:30:12.000Z",
      updatedAt: "2026-05-28T09:30:12.000Z",
      path: "Captures/2026/05/20260528-093012-a81f.md",
      title: "阅读论文",
      bodyMarkdown: "阅读论文 #research",
      type: "note",
      status: "active",
      pinned: false,
      tags: ["research"],
      sentTo: []
    };

    const first = formatDailySummaryBlock("2026-05-28", [capture]);
    const inserted = upsertDailySummaryBlock("# Daily\n", "2026-05-28", first);
    const second = formatDailySummaryBlock("2026-05-28", [{ ...capture, title: "更新标题" }]);
    const updated = upsertDailySummaryBlock(inserted, "2026-05-28", second);

    expect(updated.match(/local-capture-summary:start 2026-05-28/g)?.length).toBe(1);
    expect(updated).toContain("![[Captures/2026/05/20260528-093012-a81f.md|更新标题]]");
  });
});
