export const NAVY   = "var(--navy)";
export const AMBER  = "var(--amber)";
export const GREEN  = "var(--green)";
export const INK    = "var(--ink)";
export const CHAR   = "var(--char)";
export const LGREY  = "var(--lgrey)";
export const WHITE  = "var(--light)";
export const SURFACE   = "var(--surface)";
export const CREAM  = "var(--surface-2)";
export const BORDER = "var(--border)";
export const ISLAND = "var(--island)";
export const ISLAND_INK = "var(--island-ink)";
export const ISLAND_MUTE = "var(--island-mute)";
export const ISLAND_SOFT = "var(--island-soft)";
export const ISLAND_BORDER = "var(--island-border)";
export const CARD_DARK = "#0D0D1A";

export const mix = (name, pct) => `color-mix(in srgb, var(--${name}) ${pct}%, transparent)`;

export const tint = (color, pct) =>
  color && String(color).startsWith("#")
    ? `${color}${pct}`
    : `color-mix(in srgb, ${color} ${pct}%, transparent)`;

export const sora = "'Sora', sans-serif";
export const inter = "'Inter', sans-serif";

export const COLORS = {
  navy: {
    900: "#12121F",
    800: "#1A1A2E",
    700: "#232340",
    600: "#2E2E52",
    100: "#EBEBF5",
  },
  amber: {
    500: "#F4A026",
    400: "#F6B14F",
    300: "#F9C47C",
    100: "#FDF0DC",
    50: "#FFF8ED",
  },
  gray: {
    900: "#111827",
    700: "#374151",
    500: "#6B7280",
    300: "#D1D5DB",
    200: "#E5E7EB",
    100: "#F3F4F6",
    50: "#F9FAFB",
  },
  green: {
    500: "#2ECC71",
    50: "#F0FDF4",
  },
  cream: "#FAF8F5",
};

export const SPACE = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
  8: 64,
  9: 96,
};

export const RADIUS = {
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  pill: 999,
};

export const SHADOW = {
  card: "0 8px 32px rgba(26,26,46,0.05)",
  cardHover: "0 20px 48px rgba(26,26,46,0.12)",
  float: "0 8px 32px rgba(0,0,0,0.15)",
  phone: "0 48px 120px rgba(0,0,0,0.6)",
};

export const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
export const DURATION = { fast: 0.15, base: 0.25, slow: 0.4 };

export const TYPE = {
  hero: { size: 64, lh: 1.05 },
  h1: { size: 52, lh: 1.15 },
  h2: { size: 48, lh: 1.2 },
  h3: { size: 26, lh: 1.3 },
  body: { size: 17, lh: 1.75 },
  small: { size: 13, lh: 1.5 },
};

export const ICON_SIZE = { sm: 16, md: 20, lg: 24 };
