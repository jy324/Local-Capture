import { JSX } from "react";
import { runGuardedAction } from "../../actionErrors";

interface IconButtonProps {
  title: string;
  children: JSX.Element;
  onClick: () => void | Promise<void>;
}

export function IconButton({ title, children, onClick }: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="local-capture-icon-button"
      title={title}
      aria-label={title}
      onClick={() => {
        runGuardedAction(title, onClick);
      }}
    >
      {children}
    </button>
  );
}
