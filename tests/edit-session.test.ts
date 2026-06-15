import { describe, expect, it } from "vitest";
import { CaptureItem } from "../src/types";
import {
  canDiscardEditWithoutConfirm,
  createEditSession,
  hasEditConflict,
  isEditDirty,
  isEditingCapture,
  updateEditDraft
} from "../src/ui/editSession";

describe("edit session helpers", () => {
  it("does not require confirmation when a draft is unchanged", () => {
    const session = createEditSession(makeCapture("one", "原文"));

    expect(isEditDirty(session)).toBe(false);
    expect(canDiscardEditWithoutConfirm(session)).toBe(true);
  });

  it("marks changed drafts dirty so cancel/switch can ask for confirmation", () => {
    const session = updateEditDraft(createEditSession(makeCapture("one", "原文")), "修改后的正文");

    expect(isEditDirty(session)).toBe(true);
    expect(canDiscardEditWithoutConfirm(session)).toBe(false);
  });

  it("keeps a draft associated with its capture id across unmount/remount", () => {
    const session = updateEditDraft(createEditSession(makeCapture("one", "原文")), "保留的草稿");

    expect(isEditingCapture(session, "one")).toBe(true);
    expect(isEditingCapture(session, "two")).toBe(false);
    expect(session.draftBody).toBe("保留的草稿");
  });

  it("detects source body changes while an edit is active", () => {
    const session = updateEditDraft(createEditSession(makeCapture("one", "原文")), "用户草稿");

    expect(hasEditConflict(session, makeCapture("one", "外部更新"))).toBe(true);
    expect(hasEditConflict(session, makeCapture("one", "原文"))).toBe(false);
    expect(hasEditConflict(session, makeCapture("two", "外部更新"))).toBe(false);
  });
});

function makeCapture(id: string, bodyMarkdown: string): CaptureItem {
  return {
    id,
    createdAt: "2026-06-04T00:00:00.000Z",
    updatedAt: "2026-06-04T00:00:00.000Z",
    path: `Captures/2026/06/${id}.md`,
    bodyMarkdown,
    title: bodyMarkdown,
    type: "note",
    tags: [],
    pinned: false,
    status: "active",
    sentTo: []
  };
}
