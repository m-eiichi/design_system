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

import { GrowType, ShrinkType } from "@/types";

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
export const flattenedWidthHeightMap = flattenObject({
  ...baseSizePx,
  ...baseSizeRem,
});

// classNamesとinlineStylesを作成する
export const createStyle = (
  props: Record<string, string | object | boolean | undefined>,
) => {
  // Build class names array for clsx
  const classNames: ClassValue[] = [Styles.core_component];

  // Build inline styles for dynamic values
  const inlineStyles: React.CSSProperties = {};

  // Display
  classNames.push(
    ...processProperty(
      props.display as string | object | undefined,
      undefined,
      toSnakeCase,
    ).map((className) => Styles[className]),
  );

  // FlexboxDirection
  classNames.push(
    ...processProperty(
      props.flexDirection as string | object | undefined,
      "flex_direction",
      toSnakeCase,
    ).map((className) => Styles[className]),
  );

  // FlexboxWrap
  classNames.push(
    ...processProperty(
      props.flexWrap as string | object | undefined,
      "flex",
      toSnakeCase,
    ).map((className) => Styles[className]),
  );

  // AlignItems
  classNames.push(
    ...processProperty(
      props.alignItems as string | object | undefined,
      "align_items",
    ).map((className) => Styles[className]),
  );

  // JustifyContent
  classNames.push(
    ...processProperty(
      props.justifyContent as string | object | undefined,
      "justify_content",
    ).map((className) => Styles[className]),
  );

  // Flex
  classNames.push(
    ...processProperty(props.flex as string | object | undefined, "flex").map(
      (className) => Styles[className],
    ),
  );

  // Grid

  // GridColumns
  classNames.push(
    ...processProperty(
      props.gridTemplateColumns as string | object | undefined,
      "grid_template_columns",
    ).map((className) => Styles[className]),
  );

  // GridRows
  classNames.push(
    ...processProperty(
      props.gridTemplateRows as string | object | undefined,
      "grid_template_rows",
    ).map((className) => Styles[className]),
  );

  // RowSpan
  classNames.push(
    ...processProperty(
      props.gridRow as string | object | undefined,
      "grid_row",
    ).map((className) => Styles[className]),
  );

  // ColSpan
  classNames.push(
    ...processProperty(
      props.gridColumn as string | object | undefined,
      "grid_column",
    ).map((className) => Styles[className]),
  );

  // Grow
  if (props.grow !== undefined) {
    if (typeof props.grow === "string" || typeof props.grow === "boolean") {
      const growValue = Number(props.grow) ? "1" : "0";
      classNames.push(Styles[`grow_${growValue}`]);
    } else if (typeof props.grow === "object") {
      Object.entries(props.grow).forEach(([key, value]) => {
        const growKey = value as GrowType;
        classNames.push(Styles[`grow_${key}_${Number(growKey) ? "1" : "0"}`]);
      });
    }
  }

  // Shrink
  if (props.shrink !== undefined) {
    if (typeof props.shrink === "string" || typeof props.shrink === "boolean") {
      const shrinkValue = Number(props.shrink) ? "1" : "0";
      classNames.push(Styles[`shrink_${shrinkValue}`]);
    } else if (typeof props.shrink === "object") {
      Object.entries(props.shrink).forEach(([key, value]) => {
        const shrinkKey = value as ShrinkType;
        classNames.push(
          Styles[`shrink_${key}_${Number(shrinkKey) ? "1" : "0"}`],
        );
      });
    }
  }

  // Position
  classNames.push(
    ...processProperty(
      props.position as string | object | undefined,
      "position",
    ).map((className) => Styles[className]),
  );

  // Overflow
  classNames.push(
    ...processProperty(
      props.overflow as string | object | undefined,
      "overflow",
    ).map((className) => Styles[className]),
  );

  // OverflowX
  classNames.push(
    ...processProperty(
      props.overflowX as string | object | undefined,
      "overflow_x",
    ).map((className) => Styles[className]),
  );

  // OverflowY
  classNames.push(
    ...processProperty(
      props.overflowY as string | object | undefined,
      "overflow_y",
    ).map((className) => Styles[className]),
  );

  // TextAlign
  classNames.push(
    ...processProperty(
      props.textAlign as string | object | undefined,
      "text_align",
      toSnakeCase,
    ).map((className) => Styles[className]),
  );

  // Cursor
  classNames.push(
    ...processProperty(
      props.cursor as string | object | undefined,
      "cursor",
    ).map((className) => Styles[className]),
  );

  // Background
  classNames.push(
    ...processColorProperty(
      props.bg as string | object | undefined,
      "bg",
      flattenedBackgroundColorMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // TextColor
  classNames.push(
    ...processColorProperty(
      props.color as string | object | undefined,
      "color",
      flattenedTextColorMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // Width
  classNames.push(
    ...processWidthHeightProperty(
      props.w as string | object | undefined,
      "w",
      flattenedWidthHeightMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // Height
  classNames.push(
    ...processWidthHeightProperty(
      props.h as string | object | undefined,
      "h",
      flattenedWidthHeightMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // MinWidth
  classNames.push(
    ...processWidthHeightProperty(
      props.minW as string | object | undefined,
      "min_w",
      flattenedWidthHeightMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // MaxWidth
  classNames.push(
    ...processWidthHeightProperty(
      props.maxW as string | object | undefined,
      "max_w",
      flattenedWidthHeightMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // MinHeight
  classNames.push(
    ...processWidthHeightProperty(
      props.minH as string | object | undefined,
      "min_h",
      flattenedWidthHeightMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // MaxHeight
  classNames.push(
    ...processWidthHeightProperty(
      props.maxH as string | object | undefined,
      "max_h",
      flattenedWidthHeightMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // Font
  classNames.push(
    ...processProperty(
      props.font as string | object | undefined,
      "font",
      toSnakeCase,
    ).map((className) => Styles[className]),
  );

  // Elevation
  classNames.push(
    ...processProperty(
      props.elevation as string | object | undefined,
      "elevation",
    ).map((className) => Styles[className]),
  );

  // Border
  classNames.push(
    ...processProperty(
      props.border as string | object | undefined,
      "border",
    ).map((className) => Styles[className]),
  );

  // BorderTop
  classNames.push(
    ...processProperty(
      props.borderTop as string | object | undefined,
      "border_top",
    ).map((className) => Styles[className]),
  );

  // BorderRight
  classNames.push(
    ...processProperty(
      props.borderRight as string | object | undefined,
      "border_right",
    ).map((className) => Styles[className]),
  );

  // BorderBottom
  classNames.push(
    ...processProperty(
      props.borderBottom as string | object | undefined,
      "border_bottom",
    ).map((className) => Styles[className]),
  );

  // BorderLeft
  classNames.push(
    ...processProperty(
      props.borderLeft as string | object | undefined,
      "border_left",
    ).map((className) => Styles[className]),
  );

  // BorderRadius
  classNames.push(
    ...processProperty(
      props.borderRadius as string | object | undefined,
      "border_radius",
    ).map((className) => Styles[className]),
  );

  // Gap
  classNames.push(
    ...processProperty(props.gap as string | object | undefined, "gap").map(
      (className) => Styles[className],
    ),
  );

  // Margin
  classNames.push(
    ...processProperty(props.m as string | object | undefined, "m").map(
      (className) => Styles[className],
    ),
  );

  // MarginTop
  classNames.push(
    ...processProperty(props.mt as string | object | undefined, "mt").map(
      (className) => Styles[className],
    ),
  );

  // MarginRight
  classNames.push(
    ...processProperty(props.mr as string | object | undefined, "mr").map(
      (className) => Styles[className],
    ),
  );

  // MarginBottom
  classNames.push(
    ...processProperty(props.mb as string | object | undefined, "mb").map(
      (className) => Styles[className],
    ),
  );

  // MarginLeft
  classNames.push(
    ...processProperty(props.ml as string | object | undefined, "ml").map(
      (className) => Styles[className],
    ),
  );

  // MarginX
  classNames.push(
    ...processProperty(props.mx as string | object | undefined, "mx").map(
      (className) => Styles[className],
    ),
  );

  // MarginY
  classNames.push(
    ...processProperty(props.my as string | object | undefined, "my").map(
      (className) => Styles[className],
    ),
  );

  // Padding
  classNames.push(
    ...processProperty(props.p as string | object | undefined, "p").map(
      (className) => Styles[className],
    ),
  );

  // PaddingTop
  classNames.push(
    ...processProperty(props.pt as string | object | undefined, "pt").map(
      (className) => Styles[className],
    ),
  );

  // PaddingRight
  classNames.push(
    ...processProperty(props.pr as string | object | undefined, "pr").map(
      (className) => Styles[className],
    ),
  );

  // PaddingBottom
  classNames.push(
    ...processProperty(props.pb as string | object | undefined, "pb").map(
      (className) => Styles[className],
    ),
  );

  // PaddingLeft
  classNames.push(
    ...processProperty(props.pl as string | object | undefined, "pl").map(
      (className) => Styles[className],
    ),
  );

  // PaddingX
  classNames.push(
    ...processProperty(props.px as string | object | undefined, "px").map(
      (className) => Styles[className],
    ),
  );

  // PaddingY
  classNames.push(
    ...processProperty(props.py as string | object | undefined, "py").map(
      (className) => Styles[className],
    ),
  );

  // FontWeight
  classNames.push(
    ...processProperty(
      props.fontWeight as string | object | undefined,
      "font_weight",
    ).map((className) => Styles[className]),
  );

  // FontSize
  classNames.push(
    ...processProperty(
      props.fontSize as string | object | undefined,
      "font_size",
    ).map((className) => Styles[className]),
  );

  // LineHeight
  classNames.push(
    ...processProperty(
      props.lineHeight as string | object | undefined,
      "line_height",
    ).map((className) => Styles[className]),
  );

  // LetterSpacing
  classNames.push(
    ...processProperty(
      props.letterSpacing as string | object | undefined,
      "letter_spacing",
    ).map((className) => Styles[className]),
  );

  return { classNames, inlineStyles };
};
