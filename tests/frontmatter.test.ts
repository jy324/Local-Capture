import { describe, expect, it } from "vitest";
import { CaptureItem } from "../src/types";
import { parseCaptureFile, serializeCaptureFile } from "../src/utils/frontmatter";

describe("frontmatter", () => {
  const capture: CaptureItem = {
    id: "a81f",
    createdAt: "2026-05-28T09:30:12.000Z",
    updatedAt: "2026-05-28T09:30:12.000Z",
    path: "Captures/2026/05/20260528-093012-a81f.md",
    bodyMarkdown: "阅读论文 #research\n\n- 比较基线模型",
    type: "task",
    taskStatus: "todo",
    status: "active",
    pinned: false,
    tags: ["research"],
    sentTo: [],
    source: { type: "manual" }
  };

  it("round-trips local capture metadata", () => {
    const raw = serializeCaptureFile(capture);
    const parsed = parseCaptureFile(capture.path, raw);

    expect(parsed?.id).toBe("a81f");
    expect(parsed?.type).toBe("task");
    expect(parsed?.taskStatus).toBe("todo");
    expect(parsed?.status).toBe("active");
    expect(parsed?.tags).toEqual(["research"]);
    expect(parsed?.bodyMarkdown).toContain("阅读论文");
  });

  it("ignores markdown files without capture ids", () => {
    expect(parseCaptureFile("Notes/a.md", "---\ntags: [x]\n---\nBody")).toBeNull();
  });
});

