import { useMemo } from "react";
import clsx from "clsx";
import { createStyle } from "./style-extensions";

import { TypographyProps } from "./types";

/**
 * Typography コンポーネント
 *
 * テキスト表示用の汎用コンポーネント。以下の機能を提供：
 *
 * ## 主な機能
 * - **セマンティックHTML**: sizeやasプロパティに基づいて適切なHTMLタグ（h1-h6, p等）を自動選択
 * - **スタイリング**: カラー、サイズ、フォントウェイト、テキスト配置、マージン等の柔軟なスタイル制御
 * - **レスポンシブ対応**: 各プロパティでレスポンシブ値をサポート
 * - **インラインスタイル**: 動的な値はインラインスタイルとして適用
 * - **CSSクラス**: 静的な値はCSSクラスとして適用
 *
 * ## プロパティ
 * - `as`: レンダリングするHTMLタグを明示的に指定（p, h1-h6, span, a）
 * - `size`: テキストサイズ（h1-h6, body, caption, subtitle1, subtitle2）を指定
 * - `color`: テキストカラー（primary, secondary等）
 * - `textAlign`: テキストの配置（left, center, right等）
 * - `margin`: マージン設定（both, bottom, none）
 * - `fontWeight`: フォントウェイト
 * - `fontSize`: フォントサイズ
 * - `display`: CSS displayプロパティ
 * - `ellipsis`: テキストオーバーフロー時の省略表示
 * - `cursor`: マウスカーソルのスタイル
 * - `onClick`: クリックイベントハンドラー
 *
 * ## 自動タグ選択ロジック
 * - `as`が指定されている場合: そのタグを使用
 * - `as`が未指定の場合: `size`プロパティに基づいてデフォルトタグを選択
 *   - h1-h6 → 対応するh1-h6タグ
 *   - その他（body, caption等） → pタグ
 *
 * ## デフォルトサイズ決定ロジック
 * - `size`が指定されている場合: そのサイズを使用
 * - `size`が未指定の場合: `as`プロパティに基づいてデフォルトサイズを決定
 *   - h1-h6 → 対応するh1-h6サイズ
 *   - p, span, a → bodyサイズ
 *   - `as`が未指定の場合: デフォルトサイズは適用されない
 *
 * ## スタイル生成
 * - `createStyle`関数を使用してCSSクラスとインラインスタイルを生成
 * - 静的な値（トークン値）はCSSクラスとして適用
 * - 動的な値（数値等）はインラインスタイルとして適用
 */

export const Typography = ({
  style,
  as,
  color = "primary",
  size,
  textAlign = "left",
  margin = "none",
  fontWeight,
  fontSize,
  display,
  cursor,
  onClick,
  ellipsis = false,
  children,
}: TypographyProps) => {
  // デフォルトタグとサイズをメモ化して計算を最適化
  const { defaultSize, As } = useMemo(() => {
    // レスポンシブ値から文字列値を取得するヘルパー関数
    const getStringValue = (
      value: string | object | undefined,
    ): string | undefined => {
      if (typeof value === "string") return value;
      if (value && typeof value === "object" && "sp" in value) {
        const spValue = (value as { sp: string }).sp;
        return typeof spValue === "string" ? spValue : undefined;
      }
      return undefined;
    };

    // sizeに基づいてデフォルトのタグを決定（asが指定されている場合は処理しない）
    const getDefaultTag = () => {
      if (as) return undefined; // asが指定されている場合はデフォルトタグを適用しない

      const sizeValue = getStringValue(size);
      if (sizeValue) {
        switch (sizeValue) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return sizeValue; // h1-h6サイズ → 対応するh1-h6タグ
          default:
            return "p"; // body, caption等 → pタグ
        }
      }
      return "p"; // デフォルトはpタグ
    };

    // asに基づいてデフォルトのサイズを決定
    // sizeが指定されていない場合のみ使用される
    const getDefaultSize = () => {
      if (!as) return undefined; // asがない場合はデフォルトサイズを適用しない

      switch (as) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return as; // h1-h6タグ → 対応するh1-h6サイズ
        case "p":
        case "span":
        case "a":
          return "body"; // p, span, aタグ → bodyサイズ
        default:
          return "body"; // その他 → bodyサイズ
      }
    };

    const defaultTag = getDefaultTag();
    const defaultSize = getDefaultSize();
    const As = as || defaultTag || "p"; // asが優先、なければdefaultTag、それもなければp

    return { defaultSize, As };
  }, [as, size]);

  const { classNames, inlineStyles } = createStyle({
    color,
    display,
    fontWeight,
    fontSize,
    textAlign,
    cursor,
    // sizeが指定されていない場合はdefaultSizeを使用
    size: size || defaultSize,
    margin,
    ellipsis,
  });

  return (
    <As
      className={clsx(classNames)} // Typography クラスを追加
      style={
        Object.keys(inlineStyles).length > 0
          ? { ...style, ...inlineStyles }
          : style
      }
      onClick={onClick}
    >
      {children}
    </As>
  );
};
