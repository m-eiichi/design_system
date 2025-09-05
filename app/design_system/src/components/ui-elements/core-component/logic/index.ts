import { type ClassValue } from "clsx";

import Styles from "../styles.module.css";

import {
  processProperty,
  processColorProperty,
  processWidthHeightProperty,
} from "@/utils/create-styles";
import { flattenObject } from "@/utils/flatten-object";
import { toSnakeCase } from "@/utils/snake-case";
import { baseColor, background, status, text } from "@/tokens/color";
import { baseSizePx, baseSizeRem } from "@/tokens/size";
import { height } from "@/tokens/height";

// 背景色のトークンオブジェクトをフラット化し、キーをキャメルケースに変換してオブジェクトとして返す
export const flattenedBackgroundColorMap = flattenObject({
  ...baseColor,
  ...background,
  ...status,
});

// テキスト色のトークンオブジェクトをフラット化し、キーをキャメルケースに変換してオブジェクトとして返す
const flattenedTextColorMap = flattenObject({
  ...baseColor,
  ...text,
  ...status,
});

// 幅のトークンオブジェクトをフラット化し、キーをキャメルケースに変換してオブジェクトとして返す
export const flattenedWidthMap = flattenObject({
  ...baseSizePx,
  ...baseSizeRem,
});
// 高さのトークンオブジェクトをフラット化し、キーをキャメルケースに変換してオブジェクトとして返す
export const flattenedHeightMap = flattenObject({
  ...baseSizePx,
  ...baseSizeRem,
  ...height,
});

// パフォーマンス改善のためのヘルパー関数
const addPropertyClasses = (
  value: any,
  prefix: string | undefined,
  classNames: ClassValue[],
  toSnakeCase?: (str: string) => string,
) => {
  if (value === undefined) return;

  const classes = processProperty(value, prefix, toSnakeCase);
  if (classes.length > 0) {
    classNames.push(...classes.map((className) => Styles[className]));
  }
};

// カラー系プロパティ用のヘルパー関数
const addColorPropertyClasses = (
  value: any,
  prefix: string,
  classNames: ClassValue[],
  colorMap: any,
  inlineStyles: React.CSSProperties,
) => {
  if (value === undefined) return;

  const classes = processColorProperty(value, prefix, colorMap, inlineStyles);
  if (classes.length > 0) {
    classNames.push(...classes.map((className) => Styles[className]));
  }
};

// サイズ系プロパティ用のヘルパー関数
const addSizePropertyClasses = (
  value: any,
  prefix: string,
  classNames: ClassValue[],
  sizeMap: any,
  inlineStyles: React.CSSProperties,
) => {
  if (value === undefined) return;

  const classes = processWidthHeightProperty(
    value,
    prefix,
    sizeMap,
    inlineStyles,
  );
  if (classes.length > 0) {
    classNames.push(...classes.map((className) => Styles[className]));
  }
};

// Grow/Shrink用のヘルパー関数
const addGrowShrinkClasses = (
  value: any,
  prefix: string,
  classNames: ClassValue[],
) => {
  if (value === undefined) return;

  if (typeof value === "string" || typeof value === "boolean") {
    const numValue = Number(value) ? "1" : "0";
    classNames.push(Styles[`${prefix}_${numValue}`]);
  } else if (typeof value === "object") {
    Object.entries(value).forEach(([key, val]) => {
      const numVal = Number(val) ? "1" : "0";
      classNames.push(Styles[`${prefix}_${key}_${numVal}`]);
    });
  }
};

// classNamesとinlineStylesを作成する
export const createStyle = (
  props: Record<string, string | object | boolean | undefined>,
) => {
  // 早期リターン: プロパティがすべてundefinedの場合は基本クラスのみ返す
  const hasAnyProps = Object.values(props).some((value) => value !== undefined);
  if (!hasAnyProps) {
    return { classNames: [Styles.core_component], inlineStyles: {} };
  }

  // Build class names array for clsx
  const classNames: ClassValue[] = [Styles.root];

  // Build inline styles for dynamic values
  const inlineStyles: React.CSSProperties = {};

  // Display - 直接インラインスタイルに設定（パフォーマンス向上）
  if (props.display !== undefined) {
    inlineStyles.display = props.display as string;
  }

  // FlexboxDirection
  addPropertyClasses(
    props.flexDirection,
    "flex_direction",
    classNames,
    toSnakeCase,
  );

  // FlexboxWrap
  addPropertyClasses(props.flexWrap, "flex", classNames, toSnakeCase);

  // AlignItems
  addPropertyClasses(props.alignItems, "align_items", classNames);

  // JustifyContent
  addPropertyClasses(props.justifyContent, "justify_content", classNames);

  // Flex
  addPropertyClasses(props.flex, "flex", classNames);

  // Grid
  addPropertyClasses(
    props.gridTemplateColumns,
    "grid_template_columns",
    classNames,
  );
  addPropertyClasses(props.gridTemplateRows, "grid_template_rows", classNames);
  addPropertyClasses(props.gridRow, "grid_row", classNames);
  addPropertyClasses(props.gridColumn, "grid_column", classNames);

  // Grow/Shrink
  addGrowShrinkClasses(props.grow, "grow", classNames);
  addGrowShrinkClasses(props.shrink, "shrink", classNames);

  // Position
  addPropertyClasses(props.position, "position", classNames);

  // Overflow
  addPropertyClasses(props.overflow, "overflow", classNames);
  addPropertyClasses(props.overflowX, "overflow_x", classNames);
  addPropertyClasses(props.overflowY, "overflow_y", classNames);

  // TextAlign
  addPropertyClasses(props.textAlign, "text_align", classNames, toSnakeCase);

  // Cursor
  addPropertyClasses(props.cursor, "cursor", classNames);

  // Background
  addColorPropertyClasses(
    props.bg,
    "bg",
    classNames,
    flattenedBackgroundColorMap,
    inlineStyles,
  );

  // TextColor
  addColorPropertyClasses(
    props.color,
    "color",
    classNames,
    flattenedTextColorMap,
    inlineStyles,
  );

  // Width/Height
  addSizePropertyClasses(
    props.w,
    "w",
    classNames,
    flattenedWidthMap,
    inlineStyles,
  );
  addSizePropertyClasses(
    props.h,
    "h",
    classNames,
    flattenedHeightMap,
    inlineStyles,
  );
  addSizePropertyClasses(
    props.minW,
    "min_w",
    classNames,
    flattenedWidthMap,
    inlineStyles,
  );
  addSizePropertyClasses(
    props.maxW,
    "max_w",
    classNames,
    flattenedHeightMap,
    inlineStyles,
  );
  addSizePropertyClasses(
    props.minH,
    "min_h",
    classNames,
    flattenedHeightMap,
    inlineStyles,
  );
  addSizePropertyClasses(
    props.maxH,
    "max_h",
    classNames,
    flattenedHeightMap,
    inlineStyles,
  );

  // Font
  addPropertyClasses(props.font, "font", classNames, toSnakeCase);

  // Elevation
  addPropertyClasses(props.elevation, "elevation", classNames);

  // Border
  addPropertyClasses(props.border, "border", classNames);
  addPropertyClasses(props.borderTop, "border_top", classNames);
  addPropertyClasses(props.borderRight, "border_right", classNames);
  addPropertyClasses(props.borderBottom, "border_bottom", classNames);
  addPropertyClasses(props.borderLeft, "border_left", classNames);
  addPropertyClasses(props.borderRadius, "border_radius", classNames);

  // Gap
  addPropertyClasses(props.gap, "gap", classNames);

  // Margin
  addPropertyClasses(props.m, "m", classNames);
  addPropertyClasses(props.mt, "mt", classNames);
  addPropertyClasses(props.mr, "mr", classNames);
  addPropertyClasses(props.mb, "mb", classNames);
  addPropertyClasses(props.ml, "ml", classNames);
  addPropertyClasses(props.mx, "mx", classNames);
  addPropertyClasses(props.my, "my", classNames);

  // Padding
  addPropertyClasses(props.p, "p", classNames);
  addPropertyClasses(props.pt, "pt", classNames);
  addPropertyClasses(props.pr, "pr", classNames);
  addPropertyClasses(props.pb, "pb", classNames);
  addPropertyClasses(props.pl, "pl", classNames);
  addPropertyClasses(props.px, "px", classNames);
  addPropertyClasses(props.py, "py", classNames);

  // FontWeight
  addPropertyClasses(props.fontWeight, "font_weight", classNames);

  // FontSize
  addPropertyClasses(props.fontSize, "font_size", classNames);

  // LineHeight
  addPropertyClasses(props.lineHeight, "line_height", classNames);

  // LetterSpacing
  addPropertyClasses(props.letterSpacing, "letter_spacing", classNames);

  return { classNames, inlineStyles };
};
