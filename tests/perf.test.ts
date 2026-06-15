import Fuse from "fuse.js";
import { describe, expect, it } from "vitest";
import { CaptureItem } from "../src/types";
import { sortTableItems } from "../src/ui/shared/formatters";
import { parseCaptureFile } from "../src/utils/frontmatter";

function makeItems(count: number): CaptureItem[] {
  const items: CaptureItem[] = [];
  const base = Date.parse("2026-01-01T00:00:00.000Z");
  for (let i = 0; i < count; i += 1) {
    const created = new Date(base + i * 60_000).toISOString();
    items.push({
      id: `id-${i}`,
      createdAt: created,
      updatedAt: created,
      path: `Captures/2026/01/item-${i}.md`,
      title: `记录 ${i}`,
      bodyMarkdown: `这是第 ${i} 条记录 #tag${i % 50}`,
      type: i % 3 === 0 ? "task" : "note",
      taskStatus: i % 3 === 0 ? "todo" : undefined,
      status: i % 7 === 0 ? "archived" : "active",
      pinned: i % 101 === 0,
      tags: [`tag${i % 50}`],
      sentTo: []
    });
  }
  return items;
}

function makeRawCapture(index: number): { path: string; raw: string } {
  const created = new Date(Date.parse("2026-01-01T00:00:00.000Z") + index * 60_000).toISOString();
  const tag = `tag${index % 50}`;
  const path = `Captures/2026/01/item-${index}.md`;
  return {
    path,
    raw: [
      "---",
      `capture_id: "id-${index}"`,
      `created: "${created}"`,
      `updated: "${created}"`,
      `type: "${index % 3 === 0 ? "task" : "note"}"`,
      ...(index % 3 === 0 ? ['task_status: "todo"'] : []),
      `status: "${index % 7 === 0 ? "archived" : "active"}"`,
      `pinned: ${index % 101 === 0 ? "true" : "false"}`,
      "tags:",
      `  - "${tag}"`,
      "---",
      "",
      `这是第 ${index} 条记录 #${tag}`,
      ""
    ].join("\n")
  };
}

// These are regression guards, not precise benchmarks: they assert that the
// hot paths complete well within generous budgets at 1k/5k/10k records so
// future changes can't silently make them quadratic.
describe("performance guards", () => {
  for (const count of [1_000, 5_000, 10_000]) {
    it(`sorts ${count} table items quickly`, () => {
      const items = makeItems(count);
      const start = performance.now();
      const sorted = sortTableItems(items, "createdAt", "desc");
      const elapsed = performance.now() - start;
      expect(sorted.length).toBe(count);
      // Newest first.
      expect(new Date(sorted[0].createdAt).getTime()).toBeGreaterThanOrEqual(
        new Date(sorted[sorted.length - 1].createdAt).getTime()
      );
      expect(elapsed).toBeLessThan(500);
    });

    it(`runs Fuse search over ${count} items quickly`, () => {
      const items = makeItems(count);
      const fuse = new Fuse(items, {
        keys: ["title", "bodyMarkdown", "tags", "path", "type"],
        threshold: 0.35,
        ignoreLocation: true
      });
      const start = performance.now();
      const results = fuse.search("记录 42");
      const elapsed = performance.now() - start;
      expect(results.length).toBeGreaterThan(0);
      expect(elapsed).toBeLessThan(1_000);
    });
  }

  it("reuses a memoized Fuse index across searches without rebuilding", () => {
    const items = makeItems(5_000);
    const fuse = new Fuse(items, {
      keys: ["title", "bodyMarkdown", "tags"],
      threshold: 0.35,
      ignoreLocation: true
    });
    // Repeated searches on the same index should be cheap in aggregate.
    const start = performance.now();
    for (let i = 0; i < 20; i += 1) {
      fuse.search(`记录 ${i}`);
    }
    const elapsed = performance.now() - start;
    expect(elapsed).toBeLessThan(2_000);
  });

  for (const count of [1_000, 5_000, 10_000]) {
    it(`parses and sorts ${count} Markdown capture files quickly`, () => {
      const captures = Array.from({ length: count }, (_value, index) => makeRawCapture(index));
      const start = performance.now();
      const items = captures
        .map((capture) => parseCaptureFile(capture.path, capture.raw))
        .filter((item): item is CaptureItem => item !== null);
      const sorted = sortTableItems(items, "createdAt", "desc");
      const elapsed = performance.now() - start;

      expect(sorted.length).toBe(count);
      expect(sorted[0].id).toBe(`id-${count - 1}`);
      expect(elapsed).toBeLessThan(2_500);
    });
  }
});
