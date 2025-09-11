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
 * - `as`: レンダリングするHTMLタグを明示的に指定
 * - `size`: テキストサイズ（h1-h6, body等）を指定
 * - `color`: テキストカラー（primary, secondary等）
 * - `textAlign`: テキストの配置（left, center, right等）
 * - `margin`: マージン設定（none, small, medium等）
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
  // sizeに基づいてデフォルトのタグを指定
  // asが指定されていない場合は、sizeに基づいたデフォルトタグを使用
  const defaultTag = (() => {
    switch (size) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      default:
        return "p";
    }
  })();
  // asに基づいてデフォルトのサイズを指定
  // sizeが指定されていない場合は、asに基づいたデフォルトサイズを使用
  const defaultSize = (() => {
    switch (as) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      default:
        return "undefined";
    }
  })();

  // asが指定されていない場合は、sizeに基づいたデフォルトタグを使用
  const As = as || defaultTag;

  const { classNames, inlineStyles } = createStyle({
    color,
    display,
    fontWeight,
    fontSize,
    textAlign,
    cursor,
    //独自
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
