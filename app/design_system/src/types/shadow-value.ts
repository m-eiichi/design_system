import { ResponsiveValue } from "./responsive-value";

export type ShadowValue =
  | "none"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09";

export type ResponsiveShadow = ResponsiveValue<ShadowValue>;
