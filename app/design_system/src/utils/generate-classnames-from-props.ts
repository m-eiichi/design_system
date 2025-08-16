import { toSnakeCase } from "./snake-case";

// CSSモジュールのクラス名の型定義
type CSSModuleClasses = Record<string, string>;

/**
 * プロパティから規則的にクラス名を生成する関数
 *
 * @description 指定された `props` オブジェクトのキーと値をもとに、CSS モジュールのクラス名を動的に生成する。
 *              `prefix` が指定された場合、クラス名の先頭に付与する。
 *              例えば `{ m: "s", px: "l" }` のような `props` と `prefix` が `"pc"` の場合、
 *              `Styles["pc_m_s"]` や `Styles["pc_px_l"]` のクラスが返る。
 * @returns {string[]} 生成されたクラス名の配列
 */

export const generateClassNamesFromProps = (
  Styles: CSSModuleClasses,
  props: Partial<Record<string, string>>,
  prefix: string = "",
) => {
  return Object.entries(props).reduce((acc, [key, value]) => {
    if (value) {
      const snakeKey = toSnakeCase(key); // キャメルケースをスネークケースに変換
      acc.push(
        prefix !== ""
          ? Styles[`${prefix}_${snakeKey}_${value}`]
          : Styles[`${snakeKey}_${value}`],
      );
    }

    return acc;
  }, [] as string[]);
};
