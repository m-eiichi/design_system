import { toSnakeCase } from "./snake-case";

// 動的にCSSクラス名を生成する関数
// 例: prefix: "bg", value: "red" -> "bg_red"
const generateClassName = (prefix: string, value: string): string => {
  return `${prefix ? `${prefix}_` : ""}${value}`;
};

/**
 * プロパティ値からクラス名を生成して追加する汎用関数
 *
 * @param value - 文字列またはオブジェクト
 *   - string の場合: 値を (transformValueで変換後に) "prefix_value" として追加
 *   - object の場合: { key: val } を (transformValueでvalを変換後に)
 *                    "prefix_key_val" 形式にして追加
 * @param prefix - クラス名のプレフィックス (省略可能)
 * @param transformValue - 値を変換する関数 (省略可能)
 *
 * @returns 生成したクラス名を追加した配列
 */
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
/**
 * 色に関するプロパティ値からクラス名を生成して追加する関数
 * - マップにある値はクラス名 (例: "bg_red") を生成して追加
 * - マップにない値はインラインスタイルに直接追加
 *
 * @param value - 色の指定 (string または object)
 *   - string の場合: マップにある → "prefix_value" を追加
 *                     マップにない → inlineStyles に追加
 *   - object の場合: { key: val } の形で展開し、
 *                     マップにある場合のみ "prefix_key_value" を追加
 * @param prefix - クラス名のプレフィックス ("bg" なら background, "color" なら color)
 * @param colorMap - クラス化対象の色名マップ
 * @param inlineStyles - インラインスタイルを追加する対象
 *
 * @returns 生成して追加したクラス名の配列
 */
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
/**
 * 幅・高さに関するプロパティ値からクラス名を生成して追加する関数
 * - マップにある値はクラス名 (例: "w_full") を生成して追加
 * - マップにない値はインラインスタイルに直接追加
 *
 * @param value - サイズ指定 (string または object)
 *   - string の場合: マップにある → "prefix_value" を追加
 *                     マップにない → inlineStyles に追加
 *   - object の場合: { key: val } の形で展開し、
 *                     マップにある場合 → "prefix_key_value" を追加
 *                     マップにない場合 → inlineStyles に追加
 * @param prefix - クラス名のプレフィックス ("w"|"h"|"min_w"|"max_h" など)
 * @param widthHeightMap - クラス化対象のサイズ指定マップ
 * @param inlineStyles - インラインスタイルを追加する対象
 *
 * @returns 生成して追加したクラス名の配列
 */
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
      case "min_w":
        return "minWidth";
      case "min_h":
        return "minHeight";
      case "max_w":
        return "maxWidth";
      case "max_h":
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
