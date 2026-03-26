// ─── Highlighter ──────────────────────────────────────────────────────────────
// Single Responsibility: transforms a plain JSON string into HTML with
//   syntax-highlight spans.
// Open/Closed: consumers depend on the `highlight` function signature, not
//   the implementation — swap the regex strategy without touching any component.

const TOKEN_PATTERN =
  /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

type TokenKind = "key" | "string" | "boolean" | "null" | "number";

const COLOR: Record<TokenKind, string> = {
  key:     "#7dd3fc",
  string:  "#86efac",
  boolean: "#fbbf24",
  null:    "#f87171",
  number:  "#c084fc",
};

function classifyToken(token: string): TokenKind {
  if (!token.startsWith('"')) {
    if (token === "true" || token === "false") return "boolean";
    if (token === "null") return "null";
    return "number";
  }
  return token.endsWith(":") ? "key" : "string";
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function highlight(json: string): string {
  return escapeHtml(json).replace(TOKEN_PATTERN, (match) => {
    const kind = classifyToken(match);
    return `<span style="color:${COLOR[kind]}">${match}</span>`;
  });
}