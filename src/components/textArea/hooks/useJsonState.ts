import { useState, useEffect, useCallback } from "react";
import { parseJson, normaliseValue } from "../lib/jsonService";
import type { JsonValue } from "../types";

// ─── useJsonState ─────────────────────────────────────────────────────────────
// Single Responsibility: manages the raw text + validity state for the editable
//   mode, and re-syncs when the external `value` prop changes.

export function useJsonState(
  value: JsonValue,
  onChange?: (value: string) => void,
) { 
  const [raw, setRaw] = useState(() => {
    const { formatted } = parseJson(normaliseValue(value));
    return formatted;
  });

  const [valid, setValid] = useState(() => parseJson(normaliseValue(value)).valid);

  // Sync when the controlled prop changes from outside.
  useEffect(() => {
    const next = normaliseValue(value);
    const { formatted, valid: v } = parseJson(next);
    setRaw(formatted);
    setValid(v);
  }, []); //there was the "value" dependency 

  const handleChange = useCallback(
    (text: string) => {
      setRaw(text);
      setValid(parseJson(text).valid);
      onChange?.(text);
    },
    [onChange],
  );

  const handleFormat = useCallback(() => {
    const { formatted, valid: v } = parseJson(raw);
    setRaw(formatted);
    setValid(v);
    onChange?.(formatted);
  }, [raw, onChange]);

  return { raw, valid, handleChange, handleFormat };
}