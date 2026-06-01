import { describe, expect, it } from "vitest";
import { extractInlineTags, mergeTags } from "../src/utils/tags";

describe("tags", () => {
  it("extracts inline markdown tags", () => {
    expect(extractInlineTags("记录 #Project/Alpha 和 #灵感，忽略普通文字")).toEqual([
      "Project/Alpha",
      "灵感"
    ]);
  });

  it("deduplicates tags case-insensitively", () => {
    expect(mergeTags(["Idea", "#idea"], ["Work"])).toEqual(["Idea", "Work"]);
  });
});

