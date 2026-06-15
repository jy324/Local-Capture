import { FileInput, Inbox } from "lucide-react";
import { JSX } from "react";

interface EmptyStateProps {
  variant: "first-run" | "no-match" | "loading";
  captureFolder?: string;
  onClearFilters?: () => void;
}

export function EmptyState({ variant, captureFolder, onClearFilters }: EmptyStateProps): JSX.Element {
  if (variant === "loading") {
    return (
      <div className="local-capture-empty" aria-busy="true">
        <div className="local-capture-spinner" aria-hidden="true" />
        <span>正在加载记录…</span>
      </div>
    );
  }

  if (variant === "first-run") {
    return (
      <div className="local-capture-empty local-capture-empty-onboarding">
        <Inbox size={36} aria-hidden="true" />
        <span className="local-capture-empty-title">还没有任何记录</span>
        <p className="local-capture-empty-desc">
          在上方输入框写下想法，按
          <kbd>Ctrl/⌘ + Enter</kbd>
          即可保存。记录会以 Markdown 文件存到
          <code>{captureFolder ?? "Captures"}</code>
          目录，可随时在 Obsidian 中直接打开。
        </p>
        <p className="local-capture-empty-desc">
          也可以从命令面板运行 <strong>新建快速记录</strong> 或 <strong>从剪贴板创建记录</strong>。
        </p>
      </div>
    );
  }

  return (
    <div className="local-capture-empty">
      <FileInput size={28} aria-hidden="true" />
      <span>没有匹配的记录</span>
      {onClearFilters ? (
        <button type="button" className="local-capture-empty-action" onClick={onClearFilters}>
          清除筛选
        </button>
      ) : null}
    </div>
  );
}
