import { baseSizeRem } from "./size";
export const baseFontFamily = '"Noto Sans JP", sans-serif';

// === fontSize ===
export const fontSize = {
  12: baseSizeRem[12],
  14: "0.875rem", // 14px
  16: baseSizeRem[16],
  17: "1.0625rem", // 17px
  18: "1.125rem", // 18px
  20: baseSizeRem[20],
  22: "1.375rem", // 22px
  24: baseSizeRem[24],
  26: "1.625rem", // 26px
  28: baseSizeRem[28],
  32: baseSizeRem[32],
  36: "2.25rem", // 36px
  44: "2.75rem", // 44px
  48: baseSizeRem[48],
  56: baseSizeRem[56],
  64: baseSizeRem[64],
};

// === fontweight ===
export const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
} as const;

// === lineHeight ===
export const lineHeight = {
  100: "1",
  120: "1.2",
  130: "1.3",
  140: "1.4",
  150: "1.5",
  160: "1.6",
  170: "1.7",
  175: "1.75",
} as const;

// letterSpacing
export const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.05em",
  wider: "0.1em",
  widest: "0.2em",
} as const;

export const font = {
  h1: {
    l: `normal bold 64px/1.2 ${baseFontFamily}`,
    m: `normal bold 48px/1.3 ${baseFontFamily}`,
  },
  h2: {
    l: `normal bold 44px/1.3 ${baseFontFamily}`,
    m: `normal bold 36px/1.4 ${baseFontFamily}`,
  },
  h3: {
    l: `normal bold 32px/1.4 ${baseFontFamily}`,
    m: `normal bold 28px/1.5 ${baseFontFamily}`,
  },
  h4: {
    l: `normal bold 24px/1.5 ${baseFontFamily}`,
    m: `normal bold 22px/1.6 ${baseFontFamily}`,
  },
  h5: {
    l: `normal bold 20px/1.6 ${baseFontFamily}`,
    m: `normal bold 18px/1.7 ${baseFontFamily}`,
  },
  h6: {
    l: `normal bold 16px/1.7 ${baseFontFamily}`,
    m: `normal bold 14px/1.7 ${baseFontFamily}`,
  },
  text: {
    l: `normal 16px/1.7 ${baseFontFamily}`,
    m: `normal 14px/1.7 ${baseFontFamily}`,
  },
  // === label ===
  label: {
    l: `normal 14px/1.5 ${baseFontFamily}`,
    m: `normal 12px/1.5 ${baseFontFamily}`,
  },

  // === supplement ===
  supplement: {
    l: `normal 12px/1.7 ${baseFontFamily}`,
    m: `normal 10px/1.7 ${baseFontFamily}`,
  },

  // === button ===
  button: {
    m: `normal bold 16px/1.5 ${baseFontFamily}`,
    s: `normal bold 14px/1.5 ${baseFontFamily}`,
  },
};
