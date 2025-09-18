// === base-size ===
export const baseSizePx = {
  0: "0px",
  2: "2px",
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  56: "56px",
  64: "64px",
  72: "72px",
  80: "80px",
  88: "88px",
  96: "96px",
  104: "104px",
} as const;

// === base-size-rem ===
export const baseSizeRem = {
  0: "0rem",
  2: "0.125rem", // 2px
  4: "0.25rem", // 4px
  8: "0.5rem", // 8px
  12: "0.75rem", // 12px
  16: "1rem", // 16px
  20: "1.25rem", // 20px
  24: "1.5rem", // 24px
  28: "1.75rem", // 28px
  32: "2rem", // 32px
  40: "2.5rem", // 40px
  48: "3rem", // 48px
  56: "3.5rem", // 56px
  64: "4rem", // 64px
  72: "4.5rem", // 72px
  80: "5rem", // 80px
  88: "5.5rem", // 88px
  96: "6rem", // 96px
  104: "6.5rem", // 104px
} as const;

export const space = {
  xs: baseSizePx[8],
  sm: baseSizePx[16],
  md: baseSizePx[24],
  lg: baseSizePx[40],
  xl: baseSizePx[64],
  xxl: baseSizePx[104],
} as const;

export const radius = {
  xs: baseSizePx[2],
  sm: baseSizePx[4],
  md: baseSizePx[8],
  lg: baseSizePx[12],
  xl: baseSizePx[16],
  xxl: baseSizePx[32],
  full: "50%",
} as const;
