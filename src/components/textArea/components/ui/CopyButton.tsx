import { useCopy } from "../../hooks/useCopy";
import { CopyIcon, CheckIcon } from "../icons";
import type { CopyButtonProps } from "../../types";

// ─── CopyButton ───────────────────────────────────────────────────────────────
// Single Responsibility: renders the copy-to-clipboard button with feedback.
// Depends on useCopy hook abstraction, not directly on navigator.clipboard.

export function CopyButton({ text }: CopyButtonProps) {
  const { copied, copy } = useCopy();

  return (
    <button
      onClick={() => copy(text)}
      title="Copy to clipboard"
      className="
        absolute top-3 right-3 z-10
        flex items-center gap-1.5 px-2.5 py-1.5
        rounded-lg bg-[#161b22] border border-[#30363d]
        text-[#8b949e] hover:text-[#e6edf3] hover:border-[#484f58]
        transition-all duration-150 text-[11px] font-mono
      "
    >
      {copied ? (
        <>
          <CheckIcon />
          <span className="text-[#3fb950]">copied</span>
        </>
      ) : (
        <>
          <CopyIcon />
          copy
        </>
      )}
    </button>
  );
}