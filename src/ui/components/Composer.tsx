import { Save } from "lucide-react";
import { JSX, KeyboardEvent } from "react";
import { CaptureType } from "../../types";

interface ComposerProps {
  draft: string;
  draftType: CaptureType;
  onDraftChange: (value: string) => void;
  onDraftTypeChange: (type: CaptureType) => void;
  onSubmit: () => void;
}

export function Composer({
  draft,
  draftType,
  onDraftChange,
  onDraftTypeChange,
  onSubmit
}: ComposerProps): JSX.Element {
  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      onSubmit();
    }
  }

  return (
    <section className="local-capture-composer" aria-label="快速记录">
      <textarea
        className="local-capture-input"
        value={draft}
        placeholder="写下记录，支持 Markdown 和 #标签（Ctrl/⌘ + Enter 保存）"
        onChange={(event) => onDraftChange(event.currentTarget.value)}
        onKeyDown={onKeyDown}
      />
      <div className="local-capture-composer-row">
        <div className="local-capture-segmented" role="group" aria-label="记录类型">
          <button
            type="button"
            className={draftType === "note" ? "is-active" : ""}
            onClick={() => onDraftTypeChange("note")}
          >
            笔记
          </button>
          <button
            type="button"
            className={draftType === "task" ? "is-active" : ""}
            onClick={() => onDraftTypeChange("task")}
          >
            任务
          </button>
        </div>
        <button
          type="button"
          className="mod-cta local-capture-primary"
          onClick={onSubmit}
          disabled={!draft.trim()}
          title="保存记录（Ctrl/⌘ + Enter）"
        >
          <Save size={15} aria-hidden="true" />
          保存
        </button>
      </div>
    </section>
  );
}
