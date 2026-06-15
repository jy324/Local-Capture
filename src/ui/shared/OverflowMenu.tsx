import { MoreHorizontal } from "lucide-react";
import { CSSProperties, JSX, ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface OverflowMenuProps {
  title?: string;
  align?: "left" | "right";
  trigger?: ReactNode;
  children: ReactNode;
}

export function OverflowMenu({
  title = "更多",
  align = "right",
  trigger,
  children
}: OverflowMenuProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [panelStyle, setPanelStyle] = useState<CSSProperties>({});
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open) return;
    const trigger = wrapRef.current?.querySelector("button");
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const style: CSSProperties = { top: rect.bottom + 4 };
    if (align === "right") style.left = rect.right;
    else style.left = rect.left;
    setPanelStyle(style);
  }, [open, align]);

  useEffect(() => {
    if (!open) return;

    function handlePointer(event: PointerEvent): void {
      const wrap = wrapRef.current;
      const panel = panelRef.current;
      const target = event.target as Node;
      if (wrap?.contains(target) || panel?.contains(target)) return;
      setOpen(false);
    }

    function handleKey(event: KeyboardEvent): void {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("pointerdown", handlePointer, true);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("pointerdown", handlePointer, true);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  function onPanelClick(event: React.MouseEvent<HTMLDivElement>): void {
    const target = event.target as HTMLElement;
    if (target.closest("button, [role='menuitem'], a, input")) {
      setOpen(false);
    }
  }

  return (
    <div className="local-capture-overflow" ref={wrapRef}>
      <button
        type="button"
        className="local-capture-icon-button"
        title={title}
        aria-label={title}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        {trigger ?? <MoreHorizontal size={16} aria-hidden="true" />}
      </button>
      {open
        ? createPortal(
            <div
              ref={panelRef}
              className={`local-capture-overflow-panel align-${align}`}
              role="menu"
              style={panelStyle}
              onClick={onPanelClick}
            >
              {children}
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
