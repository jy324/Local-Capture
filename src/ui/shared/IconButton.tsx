import { Notice } from "obsidian";
import { JSX } from "react";

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
        const result = onClick();
        if (result instanceof Promise) {
          result.catch((error) => {
            console.error(error);
            new Notice("操作失败，请查看控制台");
          });
        }
      }}
    >
      {children}
    </button>
  );
}
