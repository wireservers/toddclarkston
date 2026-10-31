import { vars } from "nativewind";

// Each variant re-maps the library's --color-{group}-{shade} tokens through
// ThemeScope, so every @wireservers/react-natives component picks them up.

const SHADES = ["0", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"] as const;
type Scale = readonly [string, string, string, string, string, string, string, string, string, string, string, string];

function scale(group: string, rgb: Scale) {
  const out: Record<string, string> = {};
  SHADES.forEach((shade, i) => {
    out[`--color-${group}-${shade}`] = rgb[i];
  });
  return out;
}

const reversed = (s: Scale) => [...s].reverse() as unknown as Scale;

// Neutral ramps (0 → 950, light → dark)
const slate: Scale = ["255 255 255", "248 250 252", "241 245 249", "226 232 240", "203 213 225", "148 163 184", "100 116 139", "71 85 105", "51 65 85", "30 41 59", "15 23 42", "2 6 23"];
const stone: Scale = ["255 255 255", "250 249 247", "245 243 240", "231 228 222", "214 209 200", "168 162 151", "120 113 104", "87 82 75", "68 64 59", "41 38 35", "28 25 23", "12 10 9"];
const zinc: Scale = ["255 255 255", "250 250 250", "244 244 245", "228 228 231", "212 212 216", "161 161 170", "113 113 122", "82 82 91", "63 63 70", "39 39 42", "24 24 27", "9 9 11"];

// Accent ramps
const navy: Scale = ["255 255 255", "239 244 251", "220 230 244", "184 204 232", "137 168 214", "86 126 186", "47 88 150", "33 68 123", "26 54 99", "21 43 79", "15 31 58", "8 18 36"];
const violet: Scale = ["255 255 255", "245 243 255", "237 233 254", "221 214 254", "196 181 253", "167 139 250", "139 92 246", "124 58 237", "109 40 217", "91 33 182", "76 29 149", "46 16 101"];
const cyan: Scale = ["255 255 255", "236 254 255", "207 250 254", "165 243 252", "103 232 249", "34 211 238", "6 182 212", "8 145 178", "14 116 144", "21 94 117", "22 78 99", "8 51 68"];
const teal: Scale = ["255 255 255", "240 250 247", "209 240 230", "163 222 205", "110 196 172", "62 163 138", "30 128 106", "18 103 86", "16 82 70", "15 66 57", "12 50 44", "5 30 26"];
const indigo: Scale = ["255 255 255", "238 242 255", "224 231 255", "199 210 254", "165 180 252", "129 140 248", "99 102 241", "79 70 229", "67 56 202", "55 48 163", "49 46 129", "30 27 75"];
const amber: Scale = ["255 255 255", "255 251 235", "254 243 199", "253 230 138", "252 211 77", "251 191 36", "245 158 11", "217 119 6", "180 83 9", "146 64 14", "120 53 15", "69 26 3"];

function neutrals(n: Scale) {
  return {
    ...scale("typography", n),
    ...scale("outline", n),
    ...scale("background", n),
    ...scale("secondary", n),
    "--color-background-muted": n[2],
  };
}

export const themes = {
  executive: vars({
    ...neutrals(slate),
    ...scale("primary", navy),
    ...scale("tertiary", amber),
    "--color-indicator-primary": navy[6],
  }),
  bold: vars({
    // Dark: flip the neutral ramps so background-0 is near-black and
    // typography-900 is near-white.
    ...neutrals(reversed(slate)),
    "--color-background-0": "8 10 20",
    "--color-background-50": "13 16 30",
    "--color-background-100": "20 24 42",
    ...scale("primary", reversed(violet)),
    ...scale("tertiary", reversed(cyan)),
    "--color-primary-500": violet[5],
    "--color-primary-600": violet[4],
    "--color-indicator-primary": violet[5],
  }),
  editorial: vars({
    ...neutrals(stone),
    ...scale("primary", teal),
    ...scale("tertiary", amber),
    "--color-indicator-primary": teal[6],
  }),
  bento: vars({
    ...neutrals(zinc),
    ...scale("primary", indigo),
    ...scale("tertiary", cyan),
    "--color-indicator-primary": indigo[6],
  }),
};

export type VariantKey = keyof typeof themes;

/** Raw hex/rgb values for places that need a literal color (icons, gradients). */
export const palette = {
  executive: { accent: "rgb(33 68 123)", ink: "rgb(15 23 42)", muted: "rgb(100 116 139)", bg: "#ffffff" },
  bold: { accent: "rgb(167 139 250)", accent2: "rgb(34 211 238)", ink: "rgb(241 245 249)", muted: "rgb(148 163 184)", bg: "#080a14" },
  editorial: { accent: "rgb(18 103 86)", ink: "rgb(28 25 23)", muted: "rgb(120 113 104)", bg: "#faf9f7" },
  bento: { accent: "rgb(79 70 229)", accent2: "rgb(6 182 212)", ink: "rgb(24 24 27)", muted: "rgb(113 113 122)", bg: "#f4f4f5" },
} as const;
