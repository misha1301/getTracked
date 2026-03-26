import { ChevronIcon } from "../icons";
import type { ExpandToggleProps } from "../../types";

// ─── ExpandToggle ─────────────────────────────────────────────────────────────
// Single Responsibility: renders the expand/collapse affordance and fade overlay.
// Has zero knowledge of JSON, clipboard, or textarea behaviour.

export function ExpandToggle({ expanded, onToggle }: ExpandToggleProps) {
  return (
    <div className="relative">
      {!expanded && (
        <div className="absolute bottom-full left-0 right-0 h-12 bg-gradient-to-t from-(--gtr-color-primary-foreground) to-transparent pointer-events-none" />
      )}
      <button
        onClick={onToggle}
        className="
          w-full flex items-center justify-center gap-2 py-2.5
           border-(--gtr-color-muted-foreground)/50
          text-[#8b949e] hover:text-[#e6edf3] hover:bg-(--gtr-color-primary)
          transition-all duration-150 text-[12px] font-mono
        "
      >
        <ChevronIcon expanded={expanded} />
        {expanded ? "show less" : "show more"}
      </button>
    </div>
  );
}