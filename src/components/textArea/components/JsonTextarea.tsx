// ─── JsonTextarea ─────────────────────────────────────────────────────────────
// Open/Closed: new modes (e.g. diff view) can be added without modifying this
//   component — just add a new branch and a new sub-component.
// Dependency Inversion: depends on useJsonState / normaliseValue / parseJson
//   abstractions, never on raw JSON.parse or DOM APIs directly.

import { normaliseValue, parseJson } from "../lib/jsonService";
import { useJsonState } from "../hooks/useJsonState";
import { EditableTextarea } from "./EditableTextarea";
import { ReadonlyBlock } from "./ReadonlyBlock";
import type { JsonTextareaProps } from "../types";

export function JsonTextarea({
  value,
  editable = false,
  maxHeight = 320,
  className,
  onChange,
}: JsonTextareaProps) {
  const { raw, valid, handleChange, handleFormat } = useJsonState(value, onChange);

  if (!editable) {
    const { formatted } = parseJson(normaliseValue(value));
    return (
      <ReadonlyBlock
        formatted={formatted}
        maxHeight={maxHeight}
        className={className}
      />
    );
  }

  return (
    <EditableTextarea
      raw={raw}
      valid={valid}
      className={className}
      onChange={handleChange}
      onFormat={handleFormat}
    />
  );
}