// TODO: addPropertyClasses/addColorPropertyClassesをグローバルで共通化したい

import { type ClassValue } from "clsx";

import Styles from "./styles/styles.module.css";

import { processProperty, processColorProperty } from "@/utils/create-styles";
import { flattenObject } from "@/utils/flatten-object";
import { toSnakeCase } from "@/utils/snake-case";
import { baseColor, background, status, text } from "@/system/tokens/color";

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

// パフォーマンス改善のためのヘルパー関数
const addPropertyClasses = (
  value: string | object | boolean | undefined,
  prefix: string | undefined,
  classNames: ClassValue[],
  toSnakeCase?: (str: string) => string,
) => {
  if (value === undefined || typeof value === "boolean") return;

  const classes = processProperty(
    value as string | object | undefined,
    prefix,
    toSnakeCase,
  );
  if (classes.length > 0) {
    classNames.push(...classes.map((className) => Styles[className]));
  }
};

// カラー系プロパティ用のヘルパー関数
const addColorPropertyClasses = (
  value: string | object | boolean | undefined,
  prefix: string,
  classNames: ClassValue[],
  colorMap: Record<string, string>,
  inlineStyles: React.CSSProperties,
) => {
  if (value === undefined || typeof value === "boolean") return;

  const classes = processColorProperty(
    value as string | object | undefined,
    prefix,
    colorMap,
    inlineStyles,
  );
  if (classes.length > 0) {
    classNames.push(...classes.map((className) => Styles[className]));
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
  const classNames: ClassValue[] = [];

  // Build inline styles for dynamic values
  const inlineStyles: React.CSSProperties = {};

  // Display
  addPropertyClasses(props.display, "", classNames, toSnakeCase);

  // Position
  addPropertyClasses(props.position, "position", classNames);

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

  // FontWeight
  addPropertyClasses(props.fontWeight, "font_weight", classNames);

  // FontSize
  addPropertyClasses(props.fontSize, "font_size", classNames);

  // 以下、独自プロパティ
  // Size
  if (props.size !== undefined && typeof props.size !== "boolean") {
    const classes = processProperty(props.size, "", toSnakeCase);
    if (classes.length > 0) {
      classNames.push(...classes.map((className) => Styles[className]));
    }
  }

  if (props.margin !== undefined && typeof props.margin !== "boolean") {
    const classes = processProperty(props.margin, "margin", toSnakeCase);
    if (classes.length > 0) {
      classNames.push(...classes.map((className) => Styles[className]));
    }
  }

  // Ellipsis
  if (props.ellipsis !== undefined) {
    classNames.push(Styles.ellipsis);
  }

  return { classNames, inlineStyles };
};
