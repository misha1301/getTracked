
import { WarnIcon } from "../icons";

// ─── InvalidBadge ─────────────────────────────────────────────────────────────
// Single Responsibility: renders the "invalid JSON" indicator badge.
// Stateless — the parent decides whether to render it at all.

export function InvalidBadge() {
  return (
    <div className="
      absolute top-3 right-3 z-10
      flex items-center gap-1.5 px-2 py-1
      rounded-md bg-red-500/10 border border-red-500/20
      text-red-400 text-[11px] font-mono select-none
    ">
      <WarnIcon />
      invalid JSON
    </div>
  );
}