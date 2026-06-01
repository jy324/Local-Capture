import { MarkdownRenderer } from "obsidian";
import { useEffect, useRef } from "react";
import type LocalCapturePlugin from "../main";

interface MarkdownPreviewProps {
  markdown: string;
  sourcePath: string;
  plugin: LocalCapturePlugin;
}

export function MarkdownPreview({ markdown, sourcePath, plugin }: MarkdownPreviewProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.empty();
    void MarkdownRenderer.render(plugin.app, markdown, element, sourcePath, plugin);
  }, [markdown, plugin, sourcePath]);

  return <div ref={ref} className="local-capture-markdown markdown-rendered" />;
}

