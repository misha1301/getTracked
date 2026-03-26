// ─── Icons ────────────────────────────────────────────────────────────────────
// Interface Segregation: each icon is an independent export.
// Components import only the icons they actually need.

const BASE = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const CopyIcon = () => (
  <svg {...BASE} strokeWidth={2}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

export const CheckIcon = () => (
  <svg {...BASE} strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    {...BASE}
    strokeWidth={2}
    className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const WarnIcon = () => (
  <svg {...BASE} strokeWidth={2} width={13} height={13}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);