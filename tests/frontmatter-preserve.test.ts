import { describe, expect, it } from "vitest";
import { replaceBody, splitFrontmatter } from "../src/utils/frontmatter";

describe("replaceBody preserves frontmatter", () => {
  const raw = [
    "---",
    'capture_id: "a81f"',
    'created: "2026-05-28T09:30:12.000Z"',
    'type: "note"',
    'status: "active"',
    "aliases:",
    "  - mynote",
    "cssclass: custom-card",
    "tags:",
    "  - research",
    "---",
    "",
    "原始正文 #research",
    ""
  ].join("\n");

  it("keeps user-authored keys when only the body changes", () => {
    const next = replaceBody(raw, "更新后的正文 #research\n\n- 新增一行");

    // Frontmatter block is preserved verbatim.
    expect(next).toContain("aliases:");
    expect(next).toContain("  - mynote");
    expect(next).toContain("cssclass: custom-card");
    expect(next).toContain('capture_id: "a81f"');

    // Body is replaced.
    expect(next).toContain("更新后的正文 #research");
    expect(next).toContain("- 新增一行");
    expect(next).not.toContain("原始正文");

    // The parsed frontmatter still has the custom keys.
    const { frontmatter, body } = splitFrontmatter(next);
    expect(frontmatter.aliases).toEqual(["mynote"]);
    expect(frontmatter.cssclass).toBe("custom-card");
    expect(body.trim()).toBe("更新后的正文 #research\n\n- 新增一行");
  });

  it("replaces whole content when there is no frontmatter", () => {
    expect(replaceBody("just a body", "new body")).toBe("new body\n");
  });

  it("ends the body with a single trailing newline", () => {
    const next = replaceBody(raw, "body\n\n\n");
    expect(next.endsWith("body\n")).toBe(true);
    expect(next.endsWith("body\n\n")).toBe(false);
  });
});
