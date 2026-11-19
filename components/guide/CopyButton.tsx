"use client";

import { useState } from "react";

export function CopyButton({
  text,
  label = "Copy",
  accent = false,
}: {
  text: string;
  label?: string;
  accent?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-live="polite"
      className={
        accent
          ? "inline-flex shrink-0 items-center rounded-sm bg-claude px-3 py-1.5 text-xs font-medium text-ink transition duration-300 hover:brightness-110"
          : "inline-flex shrink-0 items-center rounded-sm border border-line-strong px-3 py-1.5 text-xs font-medium text-fg transition duration-300 hover:border-fg hover:bg-white/[0.06]"
      }
    >
      {copied ? "Copied" : label}
    </button>
  );
}
