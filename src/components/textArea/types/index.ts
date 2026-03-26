// ─── Domain types ─────────────────────────────────────────────────────────────

export type JsonValue = string | object;

export type ParseResult = {
  formatted: string;
  valid: boolean;
};

// ─── Component props ──────────────────────────────────────────────────────────

export type JsonTextareaProps = {
  value: JsonValue;
  editable?: boolean;
  maxHeight?: number;
  className?: string;
  onChange?: (value: string) => void;
};

export type EditableTextareaProps = {
  raw: string;
  valid: boolean;
  className?: string;
  onChange: (value: string) => void;
  onFormat: () => void;
};

export type ReadonlyBlockProps = {
  formatted: string;
  maxHeight: number;
  className?: string;
};

export type ExpandToggleProps = {
  expanded: boolean;
  onToggle: () => void;
};

export type CopyButtonProps = {
  text: string;
};