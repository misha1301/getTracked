import { useCallback } from "react";
import { parseJson } from "../lib/jsonService";
import { useAutoResize } from "../hooks/useAutoResize";
import { InvalidBadge } from "./ui/InvalidBadge";
import type { EditableTextareaProps } from "../types";
import { cn } from "@/lib/utils";
import { Textarea } from '@/components/ui/textarea';

// ─── EditableTextarea ─────────────────────────────────────────────────────────
// Single Responsibility: renders the controlled <textarea> for JSON editing.
// Delegates: auto-resize → useAutoResize, validation badge → InvalidBadge,
//            JSON parsing → jsonService (no parsing logic lives here).

export function EditableTextarea({
  raw,
  valid,
  className,
  onChange,
  onFormat,
}: EditableTextareaProps) {
  const textareaRef = useAutoResize(raw);

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text");
      const { formatted } = parseJson(pasted);
      onChange(formatted);
    },
    [onChange],
  );

  const isInvalid = !valid && raw.trim() !== "";

  return (
    <div aria-invalid={isInvalid} className={cn("relative group", className)}>
      {isInvalid && <InvalidBadge />}

      <Textarea
        ref={textareaRef}
        value={raw}
        spellCheck={false}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onFormat}
        onPaste={handlePaste}
        className={cn("w-full min-h-[120px] resize-none",
          "text-[#e6edf3]",
          "font-mono text-[13px] leading-[1.7]",
          "py-3.5",
          "border transition-colors duration-200 outline-none",
          "placeholder:text-[#484f58]",
          "disabled:pointer-events-none field-sizing-content rounded-[11px] text-[14px] px-[10px] bg-[#181818] dark:bg-[#181818] whitespace-pre group-aria-invalid:focus-visible:border-[#CF3434] group-aria-invalid:animate-shake",
          "border border-transparent hover:border-(--gtr-color-muted-foreground)/50 group-aria-invalid:border group-aria-invalid:ring-destructive/20 dark:group-aria-invalid:ring-destructive/40 group-aria-invalid:border-[#CF3434] group-aria-invalid:hover:border-[#CF3434]/60",
          "whitespace-pre scrollbar-hidden")}
      />
    </div>
  );
}