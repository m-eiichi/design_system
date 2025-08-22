import { toSnakeCase } from "./snake-case";

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

  // 文字列の場合
  if (typeof value === "string") {
    if (colorMap[value]) {
      const colorKey = toSnakeCase(value);
      classNames.push(`${prefix}_${colorKey}`);
    } else {
      (inlineStyles as any)[prefix === "bg" ? "backgroundColor" : "color"] =
        value;
    }
    // オブジェクトの場合
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

// 幅・高さプロパティ処理関数
export const processWidthHeightProperty = (
  value: string | object | undefined,
  prefix: string,
  widthHeightMap: Record<string, string>,
  inlineStyles: React.CSSProperties,
): string[] => {
  const classNames: string[] = [];

  const replacePrefix = (prefix: string) => {
    switch (prefix) {
      case "w":
        return "width";
      case "h":
        return "height";
      case "minW":
        return "minWidth";
      case "minH":
        return "minHeight";
      case "maxW":
        return "maxWidth";
      case "maxH":
        return "maxHeight";
      default:
        return prefix; // デフォルトの戻り値を追加
    }
  };

  // 文字列の場合
  if (typeof value === "string") {
    if (widthHeightMap[value]) {
      const sizeKey = toSnakeCase(value);
      classNames.push(`${prefix}_${sizeKey}`);
    } else {
      (inlineStyles as any)[replacePrefix(prefix)] = value;
    }
    // オブジェクトの場合
  } else if (typeof value === "object" && value !== null) {
    Object.entries(value).forEach(([key, val]) => {
      if (widthHeightMap[val as string]) {
        const sizeKey = toSnakeCase(val as string);
        classNames.push(`${prefix}_${key}_${sizeKey}`);
      } else {
        // widthHeightMapにない値の場合のインラインスタイル処理を追加
        (inlineStyles as any)[replacePrefix(prefix)] = val;
      }
    });
  }

  return classNames;
};
