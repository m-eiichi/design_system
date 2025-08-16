import { SpacingValue } from "./spacing-value";
import { ResponsiveValue } from "./responsive-value";

export type SizingValue =
  | "auto"
  | "full"
  | "0"
  | SpacingValue
  | `${number}px`
  | `${number}%`
  | `${number}rem`
  | `${number}vw`
  | `${number}vh`;

export type ResponsiveSizing = ResponsiveValue<SizingValue>;
