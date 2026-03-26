import { useState } from "react";
import { highlight } from "../lib/highlighter";
import { useOverflow } from "../hooks/useOverflow";
import { CopyButton } from "./ui/CopyButton";
import { ExpandToggle } from "./ui/ExpandToggle";
import type { ReadonlyBlockProps } from "../types";
import { cn } from "@/lib/utils";

// ─── ReadonlyBlock ────────────────────────────────────────────────────────────
// Single Responsibility: renders the read-only highlighted JSON view.
// Delegates: overflow detection → useOverflow, copy → CopyButton,
//            expand toggle → ExpandToggle, highlighting → highlighter service.

export function ReadonlyBlock({ formatted, maxHeight, className }: ReadonlyBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const { ref: innerRef, overflows } = useOverflow(maxHeight, [formatted]);

  const highlighted = highlight(formatted);

  return (
    <div className={cn("relative rounded-xl border border-(--gtr-color-muted-foreground)/50 bg-(--gtr-color-primary-foreground) dark:bg-(--gtr-color-primary-foreground) overflow-hidden", className)}>
      <CopyButton text={formatted} />

      <div
        className="overflow-hidden"
        style={{
          maxHeight: overflows && !expanded ? maxHeight : undefined,
          transition: "max-height 300ms ease-in-out",
        }}
      >
        <div ref={innerRef}>
          <pre
            className="font-mono text-[13px] leading-[1.7] px-4 py-3.5 pr-24 text-[#e6edf3] whitespace-pre scrollbar-hidden overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </div>
      </div>

      {overflows && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded((v) => !v)}
        />
      )}
    </div>
  );
}