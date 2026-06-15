import { CaptureItem } from "../types";
import { EditSession } from "./types";

export function createEditSession(capture: CaptureItem, now = new Date()): EditSession {
  return {
    captureId: capture.id,
    originalBody: capture.bodyMarkdown,
    draftBody: capture.bodyMarkdown,
    startedAt: now.toISOString()
  };
}

export function updateEditDraft(session: EditSession, draftBody: string): EditSession {
  return {
    ...session,
    draftBody
  };
}

export function isEditDirty(session: EditSession | null | undefined): boolean {
  return Boolean(session && session.draftBody !== session.originalBody);
}

export function isEditingCapture(session: EditSession | null | undefined, captureId: string): boolean {
  return session?.captureId === captureId;
}

export function hasEditConflict(session: EditSession | null | undefined, capture: CaptureItem): boolean {
  return Boolean(session && session.captureId === capture.id && capture.bodyMarkdown !== session.originalBody);
}

export function canDiscardEditWithoutConfirm(session: EditSession | null | undefined): boolean {
  return !isEditDirty(session);
}
