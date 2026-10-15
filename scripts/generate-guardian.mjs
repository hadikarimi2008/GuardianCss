/**
 * GuardianCss 
*/

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "guardian.css");

const esc = (cls) => cls.replace(/\//g, "\\/").replace(/:/g, "\\:").replace(/\./g, "\\.");

const spacing = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const spacingKeys = Object.keys(spacing);

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const colorSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const palettes = {
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03",
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006",
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22",
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e",
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344",
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065",
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764",
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724",
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519",
  },
};

const colorName = (name, step) => `${name}-${step}`;

function colorValue(name, step) {
  if (name === "inherit") return "inherit";
  if (name === "current") return "currentColor";
  if (name === "transparent") return "transparent";
  if (name === "black") return "#000";
  if (name === "white") return "#fff";
  return palettes[name][step];
}

const allColorTokens = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
  ...Object.keys(palettes).flatMap((p) => colorSteps.map((s) => colorName(p, s))),
];

const fontSize = {
  xs: ["0.75rem", { lineHeight: "1rem" }],
  sm: ["0.875rem", { lineHeight: "1.25rem" }],
  base: ["1rem", { lineHeight: "1.5rem" }],
  lg: ["1.125rem", { lineHeight: "1.75rem" }],
  xl: ["1.25rem", { lineHeight: "1.75rem" }],
  "2xl": ["1.5rem", { lineHeight: "2rem" }],
  "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
  "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
  "5xl": ["3rem", { lineHeight: "1" }],
  "6xl": ["3.75rem", { lineHeight: "1" }],
  "7xl": ["4.5rem", { lineHeight: "1" }],
  "8xl": ["6rem", { lineHeight: "1" }],
  "9xl": ["8rem", { lineHeight: "1" }],
};

const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const lineHeight = {
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

const borderRadius = {
  none: "0px",
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

const boxShadow = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "0 0 #0000",
};

const opacity = {
  0: "0",
  5: "0.05",
  10: "0.1",
  20: "0.2",
  25: "0.25",
  30: "0.3",
  40: "0.4",
  50: "0.5",
  60: "0.6",
  70: "0.7",
  75: "0.75",
  80: "0.8",
  90: "0.9",
  95: "0.95",
  100: "1",
};

const zIndex = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  auto: "auto",
};

const flexGrow = { 0: "0", DEFAULT: "1" };
const flexShrink = { 0: "0", DEFAULT: "1" };

const blur = {
  none: " ",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px",
};

const parts = [];

parts.push(`/*
 * GuardianCss — Tailwind CSS v3-compatible utility classes (static)
 * Link: <link rel="stylesheet" href="guardian.css">
 * Dark mode: add class "dark" on <html> or ancestor
 */

`);

/* ─── Preflight (Tailwind-like) ─── */
parts.push(`/* Preflight */
*, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; }
::before, ::after { --tw-content: ''; }
html { line-height: 1.5; -webkit-text-size-adjust: 100%; tab-size: 4; font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
body { margin: 0; line-height: inherit; }
hr { height: 0; color: inherit; border-top-width: 1px; }
abbr:where([title]) { text-decoration: underline dotted; }
h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }
a { color: inherit; text-decoration: inherit; }
b, strong { font-weight: bolder; }
code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em; }
small { font-size: 80%; }
sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }
sub { bottom: -0.25em; }
sup { top: -0.5em; }
table { text-indent: 0; border-color: inherit; border-collapse: collapse; }
button, input, optgroup, select, textarea { font-family: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; letter-spacing: inherit; color: inherit; margin: 0; padding: 0; }
button, select { text-transform: none; }
button, input:where([type='button']), input:where([type='reset']), input:where([type='submit']) { -webkit-appearance: button; background-color: transparent; background-image: none; }
:-moz-focusring { outline: auto; }
:-moz-ui-invalid { box-shadow: none; }
progress { vertical-align: baseline; }
::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }
[type='search'] { -webkit-appearance: textfield; outline-offset: -2px; }
::-webkit-search-decoration { -webkit-appearance: none; }
::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; }
summary { display: list-item; }
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0; }
fieldset { margin: 0; padding: 0; }
legend { padding: 0; }
ol, ul, menu { list-style: none; margin: 0; padding: 0; }
dialog { padding: 0; }
textarea { resize: vertical; }
input::placeholder, textarea::placeholder { opacity: 1; color: #9ca3af; }
button, [role="button"] { cursor: pointer; }
:disabled { cursor: default; }
img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; }
img, video { max-width: 100%; height: auto; }
[hidden]:where(:not([hidden="until-found"])) { display: none !important; }

`);

function rule(cls, decls, buf = parts) {
  buf.push(`.${esc(cls)} { ${decls} }\n`);
}

function parseColorToken(token) {
  if (["inherit", "current", "transparent", "black", "white"].includes(token)) {
    return { name: token };
  }
  const m = token.match(/^(.+)-(\d+)$/);
  if (!m) return null;
  return { name: m[1], step: Number(m[2]) };
}

function resolveColor(token) {
  const p = parseColorToken(token);
  if (!p) return null;
  if (!p.step) return colorValue(p.name);
  return colorValue(p.name, p.step);
}

/* Layout & display */
parts.push("/* Layout & display */\n");
const display = {
  block: "block",
  "inline-block": "inline-block",
  inline: "inline",
  flex: "flex",
  "inline-flex": "inline-flex",
  table: "table",
  "inline-table": "inline-table",
  "table-caption": "table-caption",
  "table-cell": "table-cell",
  "table-column": "table-column",
  "table-column-group": "table-column-group",
  "table-footer-group": "table-footer-group",
  "table-header-group": "table-header-group",
  "table-row-group": "table-row-group",
  "table-row": "table-row",
  "flow-root": "flow-root",
  grid: "grid",
  "inline-grid": "inline-grid",
  contents: "contents",
  "list-item": "list-item",
  hidden: "none",
};
for (const [k, v] of Object.entries(display)) rule(k, `display: ${v};`);

rule("sr-only", "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;");
rule("not-sr-only", "position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;");

/* Float & clear */
["float-right", "float-left", "float-none"].forEach((c) => {
  rule(c, `float: ${c.split("-")[1]};`);
});
["clear-left", "clear-right", "clear-both", "clear-none"].forEach((c) => {
  rule(c, `clear: ${c.replace("clear-", "")};`);
});

/* Box decoration */
rule("box-border", "box-sizing: border-box;");
rule("box-content", "box-sizing: content-box;");

/* Object fit */
for (const v of ["contain", "cover", "fill", "none", "scale-down"]) {
  rule(`object-${v}`, `object-fit: ${v};`);
}
for (const v of ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]) {
  rule(`object-${v}`, `object-position: ${v.replace(/-/g, " ")};`);
}

/* Overflow */
for (const v of ["auto", "hidden", "clip", "visible", "scroll"]) {
  rule(`overflow-${v}`, `overflow: ${v};`);
  rule(`overflow-x-${v}`, `overflow-x: ${v};`);
  rule(`overflow-y-${v}`, `overflow-y: ${v};`);
}
for (const v of ["auto", "contain", "none"]) {
  rule(`overscroll-${v}`, `overscroll-behavior: ${v};`);
  rule(`overscroll-x-${v}`, `overscroll-behavior-x: ${v};`);
  rule(`overscroll-y-${v}`, `overscroll-behavior-y: ${v};`);
}

/* Position */
for (const v of ["static", "fixed", "absolute", "relative", "sticky"]) {
  rule(v, `position: ${v};`);
}

for (const k of spacingKeys) {
  const val = spacing[k];
  const sk = k === "DEFAULT" ? "" : k;
  for (const side of ["inset", "inset-x", "inset-y", "top", "right", "bottom", "left"]) {
    if (side === "inset") rule(`inset-${k}`, `inset: ${val};`);
    else if (side === "inset-x") rule(`inset-x-${k}`, `left: ${val}; right: ${val};`);
    else if (side === "inset-y") rule(`inset-y-${k}`, `top: ${val}; bottom: ${val};`);
    else rule(`${side}-${k}`, `${side}: ${val};`);
  }
}
rule("inset-auto", "inset: auto;");
rule("inset-x-auto", "left: auto; right: auto;");
rule("inset-y-auto", "top: auto; bottom: auto;");
for (const s of ["top", "right", "bottom", "left"]) rule(`${s}-auto`, `${s}: auto;`);
rule("inset-1\\/2", "inset: 50%;");
rule("inset-x-1\\/2", "left: 50%; right: 50%;");
rule("inset-y-1\\/2", "top: 50%; bottom: 50%;");
for (const s of ["top", "right", "bottom", "left"]) rule(`${s}-1\\/2`, `${s}: 50%;`);
rule("inset-full", "inset: 100%;");
for (const s of ["top", "right", "bottom", "left"]) rule(`${s}-full`, `${s}: 100%;`);

for (const [k, v] of Object.entries(zIndex)) {
  rule(k === "DEFAULT" ? "z-0" : `z-${k}`, `z-index: ${v};`);
}

/* Visibility */
rule("visible", "visibility: visible;");
rule("invisible", "visibility: hidden;");
rule("collapse", "visibility: collapse;");

/* Flex */
parts.push("\n/* Flexbox */\n");
for (const v of ["row", "row-reverse", "col", "col-reverse"]) {
  const flex = v.startsWith("col") ? v.replace("col", "column") : v;
  rule(`flex-${v}`, `flex-direction: ${flex};`);
}
for (const v of ["wrap", "wrap-reverse", "nowrap"]) {
  rule(`flex-${v}`, `flex-wrap: ${v};`);
}
rule("flex-1", "flex: 1 1 0%;");
rule("flex-auto", "flex: 1 1 auto;");
rule("flex-initial", "flex: 0 1 auto;");
rule("flex-none", "flex: none;");
for (const [k, v] of Object.entries(flexGrow)) {
  rule(k === "DEFAULT" ? "grow" : `grow-${k}`, `flex-grow: ${v};`);
}
for (const [k, v] of Object.entries(flexShrink)) {
  rule(k === "DEFAULT" ? "shrink" : `shrink-${k}`, `flex-shrink: ${v};`);
}
for (const v of ["start", "end", "center", "between", "around", "evenly", "stretch"]) {
  const map = { start: "flex-start", end: "flex-end", between: "space-between", around: "space-around", evenly: "space-evenly" };
  rule(`justify-${v}`, `justify-content: ${map[v] || v};`);
}
for (const v of ["start", "end", "center", "baseline", "stretch"]) {
  const map = { start: "flex-start", end: "flex-end" };
  rule(`items-${v}`, `align-items: ${map[v] || v};`);
}
for (const v of ["auto", "start", "end", "center", "stretch", "baseline"]) {
  const map = { start: "flex-start", end: "flex-end" };
  rule(`self-${v}`, `align-self: ${map[v] || v};`);
}
for (const v of ["row", "column", "row-reverse", "column-reverse"]) {
  rule(`place-content-${v === "row" || v === "column" ? "center" : "center"}`, "");
}
for (const v of ["start", "end", "center", "between", "around", "evenly", "stretch"]) {
  const map = { start: "start", end: "end", between: "space-between", around: "space-around", evenly: "space-evenly" };
  if (v === "stretch") rule("content-stretch", "align-content: stretch;");
  else rule(`content-${v}`, `align-content: ${map[v]};`);
}

/* Gap */
for (const k of spacingKeys) {
  rule(`gap-${k}`, `gap: ${spacing[k]};`);
  rule(`gap-x-${k}`, `column-gap: ${spacing[k]};`);
  rule(`gap-y-${k}`, `row-gap: ${spacing[k]};`);
}

/* Grid */
parts.push("\n/* Grid */\n");
for (let i = 1; i <= 12; i++) {
  rule(`grid-cols-${i}`, `grid-template-columns: repeat(${i}, minmax(0, 1fr));`);
  rule(`grid-rows-${i}`, `grid-template-rows: repeat(${i}, minmax(0, 1fr));`);
}
rule("grid-cols-none", "grid-template-columns: none;");
rule("grid-rows-none", "grid-template-rows: none;");
rule("grid-cols-subgrid", "grid-template-columns: subgrid;");
rule("grid-rows-subgrid", "grid-template-rows: subgrid;");
for (const v of ["row", "col", "dense", "row-dense", "col-dense"]) {
  if (v === "row") rule("grid-flow-row", "grid-auto-flow: row;");
  else if (v === "col") rule("grid-flow-col", "grid-auto-flow: column;");
  else if (v === "dense") rule("grid-flow-dense", "grid-auto-flow: dense;");
  else if (v === "row-dense") rule("grid-flow-row-dense", "grid-auto-flow: row dense;");
  else rule("grid-flow-col-dense", "grid-auto-flow: column dense;");
}
for (const v of ["start", "end", "center", "stretch"]) {
  const map = { start: "start", end: "end" };
  rule(`justify-items-${v}`, `justify-items: ${map[v] || v};`);
  rule(`items-${v}`, `align-items: ${map[v] || v};`);
}
for (let i = 1; i <= 12; i++) {
  rule(`col-auto`, "grid-column: auto;");
  rule(`col-span-${i}`, `grid-column: span ${i} / span ${i};`);
  rule(`col-start-${i}`, `grid-column-start: ${i};`);
  rule(`col-end-${i}`, `grid-column-end: ${i};`);
}
rule("col-span-full", "grid-column: 1 / -1;");
for (let i = 1; i <= 12; i++) {
  rule(`row-span-${i}`, `grid-row: span ${i} / span ${i};`);
  rule(`row-start-${i}`, `grid-row-start: ${i};`);
  rule(`row-end-${i}`, `grid-row-end: ${i};`);
}
rule("row-span-full", "grid-row: 1 / -1;");
rule("row-auto", "grid-row: auto;");
rule("col-auto", "grid-column: auto;");

for (const k of spacingKeys) {
  rule(`p-${k}`, `padding: ${spacing[k]};`);
  rule(`px-${k}`, `padding-left: ${spacing[k]}; padding-right: ${spacing[k]};`);
  rule(`py-${k}`, `padding-top: ${spacing[k]}; padding-bottom: ${spacing[k]};`);
  rule(`pt-${k}`, `padding-top: ${spacing[k]};`);
  rule(`pr-${k}`, `padding-right: ${spacing[k]};`);
  rule(`pb-${k}`, `padding-bottom: ${spacing[k]};`);
  rule(`pl-${k}`, `padding-left: ${spacing[k]};`);
  rule(`ps-${k}`, `padding-inline-start: ${spacing[k]};`);
  rule(`pe-${k}`, `padding-inline-end: ${spacing[k]};`);
  rule(`m-${k}`, `margin: ${spacing[k]};`);
  rule(`mx-${k}`, `margin-left: ${spacing[k]}; margin-right: ${spacing[k]};`);
  rule(`my-${k}`, `margin-top: ${spacing[k]}; margin-bottom: ${spacing[k]};`);
  rule(`mt-${k}`, `margin-top: ${spacing[k]};`);
  rule(`mr-${k}`, `margin-right: ${spacing[k]};`);
  rule(`mb-${k}`, `margin-bottom: ${spacing[k]};`);
  rule(`ml-${k}`, `margin-left: ${spacing[k]};`);
  rule(`ms-${k}`, `margin-inline-start: ${spacing[k]};`);
  rule(`me-${k}`, `margin-inline-end: ${spacing[k]};`);
  rule(`-m-${k}`, `margin: -${spacing[k]};`);
  rule(`-mx-${k}`, `margin-left: -${spacing[k]}; margin-right: -${spacing[k]};`);
  rule(`-my-${k}`, `margin-top: -${spacing[k]}; margin-bottom: -${spacing[k]};`);
  rule(`-mt-${k}`, `margin-top: -${spacing[k]};`);
  rule(`-mr-${k}`, `margin-right: -${spacing[k]};`);
  rule(`-mb-${k}`, `margin-bottom: -${spacing[k]};`);
  rule(`-ml-${k}`, `margin-left: -${spacing[k]};`);
}

rule("m-auto", "margin: auto;");
rule("mx-auto", "margin-left: auto; margin-right: auto;");
rule("my-auto", "margin-top: auto; margin-bottom: auto;");
for (const s of ["t", "r", "b", "l"]) {
  const map = { t: "top", r: "right", b: "bottom", l: "left" };
  rule(`m${s}-auto`, `margin-${map[s]}: auto;`);
}

/* Space between */
for (const k of spacingKeys) {
  if (k === "0") continue;
  const v = spacing[k];
  rule(
    `space-x-${k} > :not([hidden]) ~ :not([hidden])`,
    `--tw-space-x-reverse: 0; margin-right: calc(${v} * var(--tw-space-x-reverse)); margin-left: calc(${v} * calc(1 - var(--tw-space-x-reverse)));`
  );
  rule(
    `space-y-${k} > :not([hidden]) ~ :not([hidden])`,
    `--tw-space-y-reverse: 0; margin-top: calc(${v} * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(${v} * var(--tw-space-y-reverse));`
  );
}
rule("space-x-reverse > :not([hidden]) ~ :not([hidden])", "--tw-space-x-reverse: 1;");
rule("space-y-reverse > :not([hidden]) ~ :not([hidden])", "--tw-space-y-reverse: 1;");

/* Sizing */
parts.push("\n/* Sizing */\n");
for (const k of spacingKeys) {
  rule(`w-${k}`, `width: ${spacing[k]};`);
  rule(`h-${k}`, `height: ${spacing[k]};`);
  rule(`size-${k}`, `width: ${spacing[k]}; height: ${spacing[k]};`);
  rule(`min-w-${k}`, `min-width: ${spacing[k]};`);
  rule(`max-w-${k}`, `max-width: ${spacing[k]};`);
  rule(`min-h-${k}`, `min-height: ${spacing[k]};`);
  rule(`max-h-${k}`, `max-height: ${spacing[k]};`);
}
const maxWidth = {
  none: "none",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  full: "100%",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  prose: "65ch",
  "screen-sm": "640px",
  "screen-md": "768px",
  "screen-lg": "1024px",
  "screen-xl": "1280px",
  "screen-2xl": "1536px",
};
for (const [k, v] of Object.entries(maxWidth)) rule(`max-w-${k}`, `max-width: ${v};`);
rule("w-auto", "width: auto;");
rule("w-full", "width: 100%;");
rule("w-screen", "width: 100vw;");
rule("w-svw", "width: 100svw;");
rule("w-lvw", "width: 100lvw;");
rule("w-dvw", "width: 100dvw;");
rule("w-min", "width: min-content;");
rule("w-max", "width: max-content;");
rule("w-fit", "width: fit-content;");
rule("w-1\\/2", "width: 50%;");
rule("w-1\\/3", "width: 33.333333%;");
rule("w-2\\/3", "width: 66.666667%;");
rule("w-1\\/4", "width: 25%;");
rule("w-2\\/4", "width: 50%;");
rule("w-3\\/4", "width: 75%;");
rule("w-1\\/5", "width: 20%;");
rule("w-2\\/5", "width: 40%;");
rule("w-3\\/5", "width: 60%;");
rule("w-4\\/5", "width: 80%;");
rule("w-1\\/6", "width: 16.666667%;");
rule("w-5\\/6", "width: 83.333333%;");
rule("h-auto", "height: auto;");
rule("h-full", "height: 100%;");
rule("h-screen", "height: 100vh;");
rule("h-svh", "height: 100svh;");
rule("h-lvh", "height: 100lvh;");
rule("h-dvh", "height: 100dvh;");
rule("h-min", "height: min-content;");
rule("h-max", "height: max-content;");
rule("h-fit", "height: fit-content;");
rule("size-auto", "width: auto; height: auto;");
rule("size-full", "width: 100%; height: 100%;");
rule("size-min", "width: min-content; height: min-content;");
rule("size-max", "width: max-content; height: max-content;");
rule("size-fit", "width: fit-content; height: fit-content;");
rule("min-w-0", "min-width: 0px;");
rule("min-w-full", "min-width: 100%;");
rule("min-w-min", "min-width: min-content;");
rule("min-w-max", "min-width: max-content;");
rule("min-w-fit", "min-width: fit-content;");
rule("min-h-0", "min-height: 0px;");
rule("min-h-full", "min-height: 100%;");
rule("min-h-screen", "min-height: 100vh;");
rule("max-w-full", "max-width: 100%;");
rule("max-h-full", "max-height: 100%;");
rule("max-h-screen", "max-height: 100vh;");

/* Typography */
parts.push("\n/* Typography */\n");
for (const [k, [size, opts]] of Object.entries(fontSize)) {
  rule(`text-${k}`, `font-size: ${size}; line-height: ${opts.lineHeight};`);
}
for (const [k, v] of Object.entries(fontWeight)) rule(`font-${k}`, `font-weight: ${v};`);
rule("font-sans", 'font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";');
rule("font-serif", 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;');
rule("font-mono", 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;');
rule("font-thin", "font-weight: 100;");
for (const [k, v] of Object.entries(lineHeight)) rule(`leading-${k}`, `line-height: ${v};`);
for (const [k, v] of Object.entries(letterSpacing)) rule(`tracking-${k}`, `letter-spacing: ${v};`);
for (const v of ["left", "center", "right", "justify", "start", "end"]) {
  rule(`text-${v}`, `text-align: ${v};`);
}
for (const v of ["underline", "overline", "line-through", "no-underline"]) {
  if (v === "no-underline") rule(v, "text-decoration-line: none;");
  else rule(v, `text-decoration-line: ${v};`);
}
rule("underline-offset-1", "text-underline-offset: 1px;");
rule("underline-offset-2", "text-underline-offset: 2px;");
rule("underline-offset-4", "text-underline-offset: 4px;");
rule("underline-offset-8", "text-underline-offset: 8px;");
rule("underline-offset-auto", "text-underline-offset: auto;");
for (const v of ["uppercase", "lowercase", "capitalize", "normal-case"]) {
  if (v === "normal-case") rule(v, "text-transform: none;");
  else rule(v, `text-transform: ${v};`);
}
rule("truncate", "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;");
rule("text-ellipsis", "text-overflow: ellipsis;");
rule("text-clip", "text-overflow: clip;");
for (const v of ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]) {
  rule(`whitespace-${v}`, `white-space: ${v};`);
}
for (const v of ["break-normal", "break-words", "break-all", "break-keep"]) {
  const map = { "break-normal": "normal", "break-words": "break-word", "break-all": "all", "break-keep": "keep-all" };
  rule(v, `word-break: ${map[v]}; overflow-wrap: ${v === "break-words" ? "break-word" : "normal"};`);
}
rule("hyphens-none", "hyphens: none;");
rule("hyphens-manual", "hyphens: manual;");
rule("hyphens-auto", "hyphens: auto;");

/* Colors — text, bg, border, ring, divide, outline, fill, stroke, decoration */
parts.push("\n/* Colors */\n");
for (const token of allColorTokens) {
  const cv = resolveColor(token);
  if (!cv) continue;
  rule(`text-${token}`, `color: ${cv};`);
  rule(`bg-${token}`, `background-color: ${cv};`);
  rule(`border-${token}`, `border-color: ${cv};`);
  rule(`decoration-${token}`, `text-decoration-color: ${cv};`);
  rule(`outline-${token}`, `outline-color: ${cv};`);
  rule(`ring-${token}`, `--tw-ring-color: ${cv};`);
  rule(`divide-${token}`, `border-color: ${cv};`);
  rule(`fill-${token}`, `fill: ${cv};`);
  rule(`stroke-${token}`, `stroke: ${cv};`);
  rule(`accent-${token}`, `accent-color: ${cv};`);
  rule(`caret-${token}`, `caret-color: ${cv};`);
}

rule("bg-inherit", "background-color: inherit;");
rule("text-inherit", "color: inherit;");

/* Opacity on colors */
for (const [k, v] of Object.entries(opacity)) {
  rule(`opacity-${k}`, `opacity: ${v};`);
}

/* Borders */
parts.push("\n/* Borders */\n");
rule("border", "border-width: 1px;");
rule("border-0", "border-width: 0px;");
rule("border-2", "border-width: 2px;");
rule("border-4", "border-width: 4px;");
rule("border-8", "border-width: 8px;");
for (const s of ["t", "r", "b", "l", "x", "y"]) {
  const map = { t: "top", r: "right", b: "bottom", l: "left", x: "left", y: "top" };
  if (s === "x") {
    rule("border-x", "border-left-width: 1px; border-right-width: 1px;");
    rule("border-x-0", "border-left-width: 0px; border-right-width: 0px;");
    rule("border-x-2", "border-left-width: 2px; border-right-width: 2px;");
    rule("border-x-4", "border-left-width: 4px; border-right-width: 4px;");
    rule("border-x-8", "border-left-width: 8px; border-right-width: 8px;");
  } else if (s === "y") {
    rule("border-y", "border-top-width: 1px; border-bottom-width: 1px;");
    rule("border-y-0", "border-top-width: 0px; border-bottom-width: 0px;");
    rule("border-y-2", "border-top-width: 2px; border-bottom-width: 2px;");
    rule("border-y-4", "border-top-width: 4px; border-bottom-width: 4px;");
    rule("border-y-8", "border-top-width: 8px; border-bottom-width: 8px;");
  } else {
    rule(`border-${s}`, `border-${map[s]}-width: 1px;`);
    rule(`border-${s}-0`, `border-${map[s]}-width: 0px;`);
    rule(`border-${s}-2`, `border-${map[s]}-width: 2px;`);
    rule(`border-${s}-4`, `border-${map[s]}-width: 4px;`);
    rule(`border-${s}-8`, `border-${map[s]}-width: 8px;`);
  }
}
for (const v of ["solid", "dashed", "dotted", "double", "hidden", "none"]) {
  rule(`border-${v}`, `border-style: ${v};`);
}
for (const [k, v] of Object.entries(borderRadius)) {
  if (k === "DEFAULT") rule("rounded", `border-radius: ${v};`);
  else rule(`rounded-${k}`, `border-radius: ${v};`);
}
for (const s of ["t", "r", "b", "l", "tl", "tr", "br", "bl"]) {
  const map = {
    t: "border-top-left-radius: var(--tw-radius); border-top-right-radius: var(--tw-radius);",
    r: "border-top-right-radius: var(--tw-radius); border-bottom-right-radius: var(--tw-radius);",
    b: "border-bottom-right-radius: var(--tw-radius); border-bottom-left-radius: var(--tw-radius);",
    l: "border-top-left-radius: var(--tw-radius); border-bottom-left-radius: var(--tw-radius);",
  };
}
for (const [k, v] of Object.entries(borderRadius)) {
  const suffix = k === "DEFAULT" ? "" : `-${k}`;
  rule(`rounded-t${suffix}`, `border-top-left-radius: ${v}; border-top-right-radius: ${v};`);
  rule(`rounded-r${suffix}`, `border-top-right-radius: ${v}; border-bottom-right-radius: ${v};`);
  rule(`rounded-b${suffix}`, `border-bottom-right-radius: ${v}; border-bottom-left-radius: ${v};`);
  rule(`rounded-l${suffix}`, `border-top-left-radius: ${v}; border-bottom-left-radius: ${v};`);
  rule(`rounded-tl${suffix}`, `border-top-left-radius: ${v};`);
  rule(`rounded-tr${suffix}`, `border-top-right-radius: ${v};`);
  rule(`rounded-br${suffix}`, `border-bottom-right-radius: ${v};`);
  rule(`rounded-bl${suffix}`, `border-bottom-left-radius: ${v};`);
}

/* Divide */
for (const k of spacingKeys) {
  if (k === "0") rule("divide-y-0 > :not([hidden]) ~ :not([hidden])", "border-top-width: 0px;");
  else
    rule(
      `divide-y-${k} > :not([hidden]) ~ :not([hidden])`,
      `border-top-width: ${k === "px" ? "1px" : spacing[k]};`
    );
}
rule("divide-y > :not([hidden]) ~ :not([hidden])", "border-top-width: 1px;");
rule("divide-x > :not([hidden]) ~ :not([hidden])", "border-left-width: 1px;");

/* Ring & outline */
rule("ring", "box-shadow: var(--tw-ring-inset,) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, rgb(59 130 246 / 0.5));");
rule("ring-0", "--tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);");
rule("ring-1", "box-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, rgb(59 130 246 / 0.5));");
rule("ring-2", "box-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, rgb(59 130 246 / 0.5));");
rule("ring-4", "box-shadow: var(--tw-ring-inset,) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, rgb(59 130 246 / 0.5));");
rule("ring-8", "box-shadow: var(--tw-ring-inset,) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color, rgb(59 130 246 / 0.5));");
rule("ring-inset", "--tw-ring-inset: inset;");
for (const k of spacingKeys) rule(`ring-offset-${k}`, `--tw-ring-offset-width: ${spacing[k]};`);
rule("ring-offset-transparent", "--tw-ring-offset-color: transparent;");
for (const token of allColorTokens) {
  const cv = resolveColor(token);
  if (cv) rule(`ring-offset-${token}`, `--tw-ring-offset-color: ${cv};`);
}
rule("outline-none", "outline: 2px solid transparent; outline-offset: 2px;");
rule("outline", "outline-style: solid; outline-width: 2px;");
rule("outline-0", "outline-width: 0px;");
rule("outline-1", "outline-width: 1px;");
rule("outline-2", "outline-width: 2px;");
rule("outline-4", "outline-width: 4px;");
rule("outline-8", "outline-width: 8px;");
for (const k of spacingKeys) rule(`outline-offset-${k}`, `outline-offset: ${spacing[k]};`);

/* Shadow */
parts.push("\n/* Effects */\n");
for (const [k, v] of Object.entries(boxShadow)) {
  if (k === "DEFAULT") rule("shadow", `box-shadow: ${v};`);
  else rule(`shadow-${k}`, `box-shadow: ${v};`);
}

/* Background */
for (const v of ["fixed", "local", "scroll"]) rule(`bg-${v}`, `background-attachment: ${v};`);
for (const v of ["repeat", "no-repeat", "repeat-x", "repeat-y", "repeat-round", "repeat-space"]) {
  rule(`bg-${v}`, `background-repeat: ${v};`);
}
for (const v of ["auto", "cover", "contain"]) rule(`bg-${v}`, `background-size: ${v};`);
for (const v of ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]) {
  rule(`bg-${v}`, `background-position: ${v.replace(/-/g, " ")};`);
}
rule("bg-clip-border", "background-clip: border-box;");
rule("bg-clip-padding", "background-clip: padding-box;");
rule("bg-clip-content", "background-clip: content-box;");
rule("bg-clip-text", "background-clip: text; -webkit-background-clip: text; color: transparent;");
rule("bg-origin-border", "background-origin: border-box;");
rule("bg-origin-padding", "background-origin: padding-box;");
rule("bg-origin-content", "background-origin: content-box;");
rule("bg-none", "background-image: none;");

const gradientDirections = {
  "t": "to top",
  "tr": "to top right",
  "r": "to right",
  "br": "to bottom right",
  "b": "to bottom",
  "bl": "to bottom left",
  "l": "to left",
  "tl": "to top left",
};
for (const [k, v] of Object.entries(gradientDirections)) {
  rule(`bg-gradient-to-${k}`, `background-image: linear-gradient(${v}, var(--tw-gradient-stops));`);
}

/* Gradient color stops — from-, via-, to- */
for (const token of allColorTokens) {
  const cv = resolveColor(token);
  if (!cv) continue;
  rule(`from-${token}`, `--tw-gradient-from: ${cv} var(--tw-gradient-from-position); --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);`);
  rule(`via-${token}`, `--tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position); --tw-gradient-stops: var(--tw-gradient-from), ${cv} var(--tw-gradient-via-position), var(--tw-gradient-to);`);
  rule(`to-${token}`, `--tw-gradient-to: ${cv} var(--tw-gradient-to-position);`);
}

/* Filters */
for (const [k, v] of Object.entries(blur)) {
  if (k === "none") rule("blur-none", "filter: ;");
  else if (k === "DEFAULT") rule("blur", `filter: blur(${v});`);
  else rule(`blur-${k}`, `filter: blur(${v});`);
}
rule("brightness-0", "filter: brightness(0);");
rule("brightness-50", "filter: brightness(.5);");
rule("brightness-75", "filter: brightness(.75);");
rule("brightness-90", "filter: brightness(.9);");
rule("brightness-95", "filter: brightness(.95);");
rule("brightness-100", "filter: brightness(1);");
rule("brightness-105", "filter: brightness(1.05);");
rule("brightness-110", "filter: brightness(1.1);");
rule("brightness-125", "filter: brightness(1.25);");
rule("brightness-150", "filter: brightness(1.5);");
rule("brightness-200", "filter: brightness(2);");
rule("grayscale-0", "filter: grayscale(0);");
rule("grayscale", "filter: grayscale(100%);");
rule("invert-0", "filter: invert(0);");
rule("invert", "filter: invert(100%);");
rule("sepia-0", "filter: sepia(0);");
rule("sepia", "filter: sepia(100%);");

/* Transitions */
parts.push("\n/* Transitions & transforms */\n");
rule("transition-none", "transition-property: none;");
rule(
  "transition-all",
  "transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
);
rule(
  "transition",
  "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;"
);
rule("transition-colors", "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;");
rule("transition-opacity", "transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;");
rule("transition-shadow", "transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;");
rule("transition-transform", "transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;");
for (const k of ["75", "100", "150", "200", "300", "500", "700", "1000"]) {
  rule(`duration-${k}`, `transition-duration: ${k}ms;`);
}
for (const v of ["linear", "in", "out", "in-out"]) {
  if (v === "in") rule("ease-in", "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);");
  else if (v === "out") rule("ease-out", "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);");
  else if (v === "in-out") rule("ease-in-out", "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);");
  else rule(`ease-${v}`, `transition-timing-function: ${v};`);
}
rule("ease", "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);");
rule("delay-75", "transition-delay: 75ms;");
rule("delay-100", "transition-delay: 100ms;");
rule("delay-150", "transition-delay: 150ms;");
rule("delay-200", "transition-delay: 200ms;");
rule("delay-300", "transition-delay: 300ms;");
rule("delay-500", "transition-delay: 500ms;");
rule("delay-700", "transition-delay: 700ms;");
rule("delay-1000", "transition-delay: 1000ms;");

rule("transform", "transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("transform-none", "transform: none;");
for (const k of spacingKeys) {
  rule(`translate-x-${k}`, `--tw-translate-x: ${spacing[k]}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
  rule(`translate-y-${k}`, `--tw-translate-y: ${spacing[k]}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
  rule(`-translate-x-${k}`, `--tw-translate-x: -${spacing[k]}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
  rule(`-translate-y-${k}`, `--tw-translate-y: -${spacing[k]}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
}
rule("translate-x-1\\/2", "--tw-translate-x: 50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("-translate-x-1\\/2", "--tw-translate-x: -50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("translate-y-1\\/2", "--tw-translate-y: 50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("-translate-y-1\\/2", "--tw-translate-y: -50%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("translate-x-full", "--tw-translate-x: 100%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("-translate-x-full", "--tw-translate-x: -100%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("translate-y-full", "--tw-translate-y: 100%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
rule("-translate-y-full", "--tw-translate-y: -100%; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");

for (const deg of [0, 1, 2, 3, 6, 12, 45, 90, 180]) {
  rule(`rotate-${deg}`, `--tw-rotate: ${deg}deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
  rule(`-rotate-${deg}`, `--tw-rotate: -${deg}deg; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
}
for (const s of [0, 50, 75, 90, 95, 100, 105, 110, 125, 150]) {
  rule(`scale-${s}`, `--tw-scale-x: ${s / 100}; --tw-scale-y: ${s / 100}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
  rule(`scale-x-${s}`, `--tw-scale-x: ${s / 100}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
  rule(`scale-y-${s}`, `--tw-scale-y: ${s / 100}; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`);
}

/* Interactivity */
parts.push("\n/* Interactivity */\n");
for (const v of ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"]) {
  rule(`cursor-${v}`, `cursor: ${v};`);
}
for (const v of ["none", "auto"]) rule(`pointer-events-${v}`, `pointer-events: ${v};`);
for (const v of ["none", "text", "all", "auto"]) rule(`select-${v}`, `user-select: ${v};`);
for (const v of ["none", "y", "x"]) rule(`resize-${v}`, `resize: ${v === "none" ? "none" : v};`);
rule("resize", "resize: both;");
rule("appearance-none", "appearance: none;");
rule("outline-none", "outline: 2px solid transparent; outline-offset: 2px;");

/* Tables */
parts.push("\n/* Tables */\n");
rule("border-collapse", "border-collapse: collapse;");
rule("border-separate", "border-collapse: separate;");
rule("table-auto", "table-layout: auto;");
rule("table-fixed", "table-layout: fixed;");
rule("caption-top", "caption-side: top;");
rule("caption-bottom", "caption-side: bottom;");

/* Lists */
rule("list-inside", "list-style-position: inside;");
rule("list-outside", "list-style-position: outside;");
rule("list-none", "list-style-type: none;");
rule("list-disc", "list-style-type: disc;");
rule("list-decimal", "list-style-type: decimal;");

/* Isolation & mix-blend */
rule("isolate", "isolation: isolate;");
rule("isolation-auto", "isolation: auto;");
for (const v of ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]) {
  rule(`mix-blend-${v}`, `mix-blend-mode: ${v};`);
}

/* Container */
parts.push("\n/* Container */\n");
rule("container", "width: 100%;");
for (const [bp, min] of Object.entries(screens)) {
  parts.push(`@media (min-width: ${min}) { .${esc("container")} { max-width: ${min}; } }\n`);
}

/* Animations */
parts.push(`
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
@keyframes pulse { 50% { opacity: .5; } }
@keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); } 50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); } }
`);
rule("animate-none", "animation: none;");
rule("animate-spin", "animation: spin 1s linear infinite;");
rule("animate-ping", "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;");
rule("animate-pulse", "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;");
rule("animate-bounce", "animation: bounce 1s infinite;");

/* Aspect ratio */
for (const [k, v] of Object.entries({ auto: "auto", square: "1 / 1", video: "16 / 9" })) {
  rule(`aspect-${k}`, `aspect-ratio: ${v};`);
}

/* Font style & smoothing */
rule("italic", "font-style: italic;");
rule("not-italic", "font-style: normal;");
rule("antialiased", "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;");
rule("subpixel-antialiased", "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;");

/* Line clamp */
for (const n of [1, 2, 3, 4, 5, 6]) {
  rule(
    `line-clamp-${n}`,
    `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${n};`
  );
}
rule("line-clamp-none", "overflow: visible; display: block; -webkit-box-orient: horizontal; -webkit-line-clamp: none;");

/* Flex basis */
for (const k of spacingKeys) rule(`basis-${k}`, `flex-basis: ${spacing[k]};`);
rule("basis-auto", "flex-basis: auto;");
rule("basis-full", "flex-basis: 100%;");
rule("basis-0", "flex-basis: 0px;");
rule("basis-1\\/2", "flex-basis: 50%;");
rule("basis-1\\/3", "flex-basis: 33.333333%;");
rule("basis-2\\/3", "flex-basis: 66.666667%;");

/* Order */
for (let i = 1; i <= 12; i++) rule(`order-${i}`, `order: ${i};`);
rule("order-first", "order: -9999;");
rule("order-last", "order: 9999;");
rule("order-none", "order: 0;");

/* Backdrop blur & brightness */
for (const [k, v] of Object.entries(blur)) {
  if (k === "none") rule("backdrop-blur-none", "backdrop-filter: ;");
  else if (k === "DEFAULT") rule("backdrop-blur", `backdrop-filter: blur(${v});`);
  else rule(`backdrop-blur-${k}`, `backdrop-filter: blur(${v});`);
}
rule("backdrop-brightness-0", "backdrop-filter: brightness(0);");
rule("backdrop-brightness-50", "backdrop-filter: brightness(.5);");
rule("backdrop-brightness-75", "backdrop-filter: brightness(.75);");
rule("backdrop-brightness-90", "backdrop-filter: brightness(.9);");
rule("backdrop-brightness-95", "backdrop-filter: brightness(.95);");
rule("backdrop-brightness-100", "backdrop-filter: brightness(1);");
rule("backdrop-brightness-105", "backdrop-filter: brightness(1.05);");
rule("backdrop-brightness-110", "backdrop-filter: brightness(1.1);");
rule("backdrop-brightness-125", "backdrop-filter: brightness(1.25);");
rule("backdrop-brightness-150", "backdrop-filter: brightness(1.5);");
rule("backdrop-brightness-200", "backdrop-filter: brightness(2);");
rule("backdrop-grayscale-0", "backdrop-filter: grayscale(0);");
rule("backdrop-grayscale", "backdrop-filter: grayscale(100%);");
rule("backdrop-invert-0", "backdrop-filter: invert(0);");
rule("backdrop-invert", "backdrop-filter: invert(100%);");

/* Drop shadow */
rule("drop-shadow-sm", "filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));");
rule("drop-shadow", "filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));");
rule("drop-shadow-md", "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));");
rule("drop-shadow-lg", "filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));");
rule("drop-shadow-xl", "filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));");
rule("drop-shadow-2xl", "filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));");
rule("drop-shadow-none", "filter: drop-shadow(0 0 #0000);");

/* Stroke width */
rule("stroke-0", "stroke-width: 0;");
rule("stroke-1", "stroke-width: 1;");
rule("stroke-2", "stroke-width: 2;");

/* Scroll & snap */
for (const v of ["auto", "smooth"]) rule(`scroll-${v}`, `scroll-behavior: ${v};`);
for (const v of ["none", "x", "y", "both"]) rule(`snap-${v}`, v === "none" ? "scroll-snap-type: none;" : `scroll-snap-type: ${v} mandatory;`);
rule("snap-mandatory", "scroll-snap-type: x mandatory;");
rule("snap-proximity", "scroll-snap-type: x proximity;");
for (const v of ["start", "end", "center", "align-none"]) {
  if (v === "align-none") rule("snap-align-none", "scroll-snap-align: none;");
  else rule(`snap-${v}`, `scroll-snap-align: ${v};`);
}

/* Touch action */
for (const v of ["auto", "none", "pan-x", "pan-left", "pan-right", "pan-y", "pan-up", "pan-down", "pinch-zoom", "manipulation"]) {
  rule(`touch-${v}`, `touch-action: ${v};`);
}

/* Will change */
rule("will-change-auto", "will-change: auto;");
rule("will-change-scroll", "will-change: scroll-position;");
rule("will-change-contents", "will-change: contents;");
rule("will-change-transform", "will-change: transform;");

/* Content utilities */
for (const v of ["none", "space"]) rule(`content-${v}`, v === "none" ? "--tw-content: none;" : "--tw-content: ' ';");

/* Fill & stroke current */
rule("fill-none", "fill: none;");
rule("stroke-none", "stroke: none;");

/* Print */
parts.push("@media print { .print\\:hidden { display: none !important; } }\n");

/* ─── Variants: responsive, hover, focus, dark, group, peer ─── */

const variantBases = [];

function collectRules() {
  /* We'll duplicate key utilities for variants — use snapshot of parts length before variants */
  return parts.slice();
}

const baseEnd = parts.length;
const baseRules = parts.slice();

const stateVariants = [
  { prefix: "hover", selector: "&:hover" },
  { prefix: "focus", selector: "&:focus" },
  { prefix: "focus-visible", selector: "&:focus-visible" },
  { prefix: "active", selector: "&:active" },
  { prefix: "disabled", selector: "&:disabled" },
  { prefix: "visited", selector: "&:visited" },
  { prefix: "first", selector: "&:first-child" },
  { prefix: "last", selector: "&:last-child" },
  { prefix: "odd", selector: "&:nth-child(odd)" },
  { prefix: "even", selector: "&:nth-child(even)" },
];

function emitVariantBlock(variantPrefix, wrapSelector, rulesText) {
  /* rulesText: array of full rule strings like `.flex { display:flex }` */
  parts.push(`\n/* ${variantPrefix} */\n`);
  for (const line of rulesText) {
    const m = line.match(/^\.([^{]+)\s*\{([^}]+)\}/);
    if (!m) continue;
    const cls = m[1].replace(/\\:/g, ":").replace(/\\\//g, "/");
    const body = m[2].trim();
    const variantCls = `${variantPrefix}\\:${cls.replace(/:/g, "\\:")}`;
    if (wrapSelector === "dark") {
      parts.push(`.dark .${variantCls} { ${body} }\n`);
    } else if (wrapSelector.startsWith("@media")) {
      /* handled separately */
    } else if (wrapSelector.startsWith("group")) {
      parts.push(`.group:${wrapSelector.split(":")[1]} .${variantCls} { ${body} }\n`);
    } else if (wrapSelector.startsWith("peer")) {
      const peerState = wrapSelector.replace("peer-", "");
      parts.push(`.peer:${peerState} ~ .${variantCls} { ${body} }\n`);
    } else {
      const pseudo = wrapSelector.replace("&", "");
      parts.push(`.${variantCls}${pseudo} { ${body} }\n`);
    }
  }
}

/* Simpler approach: generate variants for a subset of high-value utilities programmatically */

const variantUtilities = [];

function addUtil(cls, decls) {
  variantUtilities.push({ cls, decls });
}

for (const [k, v] of Object.entries(display)) addUtil(k, `display: ${v};`);
for (const token of allColorTokens) {
  const cv = resolveColor(token);
  if (!cv) continue;
  addUtil(`text-${token}`, `color: ${cv};`);
  addUtil(`bg-${token}`, `background-color: ${cv};`);
  addUtil(`border-${token}`, `border-color: ${cv};`);
}
for (const k of spacingKeys) {
  addUtil(`p-${k}`, `padding: ${spacing[k]};`);
  addUtil(`m-${k}`, `margin: ${spacing[k]};`);
  addUtil(`gap-${k}`, `gap: ${spacing[k]};`);
}
addUtil("hidden", "display: none;");
addUtil("block", "display: block;");
addUtil("flex", "display: flex;");
addUtil("grid", "display: grid;");
addUtil("underline", "text-decoration-line: underline;");
addUtil("opacity-0", "opacity: 0;");
addUtil("opacity-100", "opacity: 1;");
addUtil("scale-105", "--tw-scale-x: 1.05; --tw-scale-y: 1.05; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));");
for (const v of ["visible", "invisible"]) addUtil(v, v === "visible" ? "visibility: visible;" : "visibility: hidden;");

parts.push("\n/* State & responsive variants (core utilities) */\n");

function emitVariantsForUtil(cls, decls) {
  const e = esc(cls);
  for (const { prefix, selector } of stateVariants) {
    const vp = esc(`${prefix}:${cls}`);
    parts.push(`.${vp}${selector.replace("&", "")} { ${decls} }\n`);
  }
  for (const [bp, min] of Object.entries(screens)) {
    const vp = esc(`${bp}:${cls}`);
    parts.push(`@media (min-width: ${min}) { .${vp} { ${decls} } }\n`);
  }
  for (const { prefix, selector } of stateVariants) {
    const vp = esc(`dark:${prefix}:${cls}`);
    parts.push(`.dark .${esc(`dark:${prefix}:${cls}`)}${selector.replace("&", "")} { ${decls} }\n`);
  }
  const darkVp = esc(`dark:${cls}`);
  parts.push(`.dark .${darkVp} { ${decls} }\n`);

  parts.push(`.group:hover .${esc(`group-hover:${cls}`)} { ${decls} }\n`);
  parts.push(`.group:focus .${esc(`group-focus:${cls}`)} { ${decls} }\n`);
  parts.push(`.peer:focus ~ .${esc(`peer-focus:${cls}`)} { ${decls} }\n`);
  parts.push(`.peer-checked ~ .${esc(`peer-checked:${cls}`)} { ${decls} }\n`);
}

for (const { cls, decls } of variantUtilities) {
  emitVariantsForUtil(cls, decls);
}

/* Responsive for ALL base rules would explode size — extend responsive for common patterns */
const responsiveClasses = [];
for (const k of spacingKeys) {
  responsiveClasses.push([`p-${k}`, `padding: ${spacing[k]};`]);
  responsiveClasses.push([`px-${k}`, `padding-left: ${spacing[k]}; padding-right: ${spacing[k]};`]);
  responsiveClasses.push([`py-${k}`, `padding-top: ${spacing[k]}; padding-bottom: ${spacing[k]};`]);
  responsiveClasses.push([`m-${k}`, `margin: ${spacing[k]};`]);
  responsiveClasses.push([`w-${k}`, `width: ${spacing[k]};`]);
  responsiveClasses.push([`h-${k}`, `height: ${spacing[k]};`]);
  responsiveClasses.push([`gap-${k}`, `gap: ${spacing[k]};`]);
}
for (const [k, v] of Object.entries(display)) responsiveClasses.push([k, `display: ${v};`]);
for (let i = 1; i <= 12; i++) responsiveClasses.push([`grid-cols-${i}`, `grid-template-columns: repeat(${i}, minmax(0, 1fr));`]);
responsiveClasses.push(["flex-col", "flex-direction: column;"]);
responsiveClasses.push(["flex-row", "flex-direction: row;"]);
responsiveClasses.push(["items-center", "align-items: center;"]);
responsiveClasses.push(["justify-center", "justify-content: center;"]);
responsiveClasses.push(["justify-between", "justify-content: space-between;"]);
responsiveClasses.push(["text-center", "text-align: center;"]);
responsiveClasses.push(["text-left", "text-align: left;"]);
responsiveClasses.push(["text-right", "text-align: right;"]);
for (const [k] of Object.entries(fontSize)) responsiveClasses.push([`text-${k}`, `font-size: ${fontSize[k][0]}; line-height: ${fontSize[k][1].lineHeight};`]);

parts.push("\n/* Responsive utilities (layout & spacing) */\n");
for (const [bp, min] of Object.entries(screens)) {
  parts.push(`@media (min-width: ${min}) {\n`);
  for (const [cls, decls] of responsiveClasses) {
    parts.push(`  .${esc(`${bp}:${cls}`)} { ${decls} }\n`);
  }
  parts.push("}\n");
}

const css = parts.join("");
writeFileSync(OUT, css, "utf8");
const lines = css.split("\n").length;
const kb = (Buffer.byteLength(css) / 1024).toFixed(1);
console.log(`Wrote ${OUT}`);
console.log(`Lines: ${lines}, Size: ${kb} KB`);
