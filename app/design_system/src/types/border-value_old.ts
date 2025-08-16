import { ResponsiveValue } from "./responsive-value";

export type BorderValue =
  | "field"
  | "field-bold"
  | "divider"
  | "focused"
  | "selected"
  | "alert"
  | "disabled"
  | "disabled-bold"
  | "none"
  | `${number}px solid ${string}`
  | `${number}px dashed ${string}`
  | `${number}px dotted ${string}`;

export type ResponsiveBorder = ResponsiveValue<BorderValue>;

export type RadiusValue =
  | "none"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "full"
  | `${number}px`;

export type ResponsiveRadius = ResponsiveValue<RadiusValue>;
