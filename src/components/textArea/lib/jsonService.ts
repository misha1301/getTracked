import type { ParseResult, JsonValue } from "../types";

// ─── JsonService ──────────────────────────────────────────────────────────────
// Single Responsibility: owns all JSON parsing and formatting logic.
// Nothing here knows about React, DOM, or UI state.

const INDENT = 2;

/**
 * Attempts to parse and pretty-print a raw JSON string.
 * Never throws — always returns a result with a `valid` flag.
 */
export function parseJson(raw: string): ParseResult {
  try {
    const parsed = JSON.parse(raw);
    return { formatted: JSON.stringify(parsed, null, INDENT), valid: true };
  } catch {
    return { formatted: raw, valid: false };
  }
}

/**
 * Normalises a prop value (string | object) into a raw string
 * suitable for passing to `parseJson`.
 */
export function normaliseValue(value: JsonValue): string {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value, null, INDENT);
  } catch {
    return String(value);
  }
}