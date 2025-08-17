import { type ClassValue } from "clsx";

import Styles from "../styles.module.css";

import { processProperty, processColorProperty } from "@/utils/create-styles";
import { flattenObject } from "@/utils/flatten-object";
import { toSnakeCase } from "@/utils/snake-case";
import { baseColor, background, status, text } from "@/tokens/color";
import { GrowType, ShrinkType } from "@/types";

// 背景色のトークンオブジェクトをフラット化し、キーをキャメルケースに変換してオブジェクトとして返す
export const flattenedBackgroundColorMap = flattenObject({
  ...baseColor,
  ...background,
  ...status,
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
  const flattenedBackgroundColorMap = flattenObject({
    ...baseColor,
    ...background,
    ...status,
  });
  classNames.push(
    ...processColorProperty(
      props.bg as string | object | undefined,
      "bg",
      flattenedBackgroundColorMap,
      inlineStyles,
    ).map((className) => Styles[className]),
  );

  // TextColor
  const flattenedTextColorMap = flattenObject({
    ...baseColor,
    ...text,
    ...status,
  });
  classNames.push(
    ...processColorProperty(
      props.color as string | object | undefined,
      "color",
      flattenedTextColorMap,
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

  return { classNames, inlineStyles };
};
