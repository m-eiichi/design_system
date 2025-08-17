import { color } from "./color";
import {
  baseFontFamily,
  font,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
} from "./font";
import { elevation } from "./elevation";
import { baseSizePx, baseSizeRem, radius, space } from "./size";
import { border } from "./border";
import { height } from "./height";
import { width } from "./width";
import { transition } from "./transition";

// tokens.ts
export const tokens = {
  // === color ===
  color: color,

  // === size ===
  size: { ...baseSizePx, rem: { ...baseSizeRem }, space, radius },

  fontFamily: baseFontFamily,
  // === fontSize ===
  fontSize: fontSize,

  // === fontWeight ===
  fontWeight: fontWeight,

  // === letterSpacing ===
  letterSpacing: letterSpacing,

  // === lineHeight ===
  lineHeight: lineHeight,

  // === font ===
  font: font,

  // === space ===

  // === border ===
  border: border,

  // === height ===
  ...height,

  // === width ===
  ...width,

  // === elevation ===
  elevation: elevation,

  // === transition ===
  transition: transition,
};
