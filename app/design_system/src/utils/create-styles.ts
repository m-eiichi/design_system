import { type ClassValue } from "clsx";
import { toSnakeCase } from "./snake-case";

// CSSモジュールの型定義
type CSSModuleClasses = Record<string, string>;

// 動的にCSSクラス名を生成する関数
const generateClassName = (prefix: string, value: string): string => {
  return `${prefix ? `${prefix}_` : ""}${value}`;
};
// 汎用的なプロパティ処理関数
export const processProperty = (
  value: string | object | undefined,
  prefix?: string,
  transformValue?: (val: string) => string,
): string[] => {
  const classNames: string[] = [];

  if (typeof value === "string") {
    const transformedValue = transformValue ? transformValue(value) : value;
    classNames.push(generateClassName(prefix || "", transformedValue));
  } else if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([key, val]) => {
      const transformedValue = transformValue
        ? transformValue(val as string)
        : val;
      classNames.push(
        generateClassName(prefix || "", `${key}_${transformedValue}`),
      );
    });
  }

  return classNames;
};

// 色プロパティ処理関数
export const processColorProperty = (
  value: string | object | undefined,
  prefix: string,
  colorMap: Record<string, string>,
  inlineStyles: React.CSSProperties,
): string[] => {
  const classNames: string[] = [];

  if (typeof value === "string") {
    if (colorMap[value]) {
      const colorKey = toSnakeCase(value);
      classNames.push(`${prefix}_${colorKey}`);
    } else {
      (inlineStyles as any)[prefix === "bg" ? "backgroundColor" : "color"] =
        value;
    }
  } else if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([key, val]) => {
      if (colorMap[val as string]) {
        const colorKey = toSnakeCase(val as string);
        classNames.push(`${prefix}_${key}_${colorKey}`);
      }
    });
  }

  return classNames;
};
