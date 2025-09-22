import { useMemo } from "react";
import clsx from "clsx";
import { createStyle } from "./style-extensions";

import { TypographyProps } from "./types";

/**
 * テキスト表示用の汎用Typographyコンポーネント
 *
 * セマンティックHTML、レスポンシブ対応、動的スタイリングをサポートする
 * テキスト表示コンポーネント。適切なHTMLタグの自動選択とトークンベースの
 * スタイル適用により、一貫性のあるタイポグラフィを提供。
 *
 * @component
 * @example
 * ```tsx
 * // 基本的な使用
 * <Typography>基本テキスト</Typography>
 *
 * // 見出しとして使用
 * <Typography as="h1" size="h1">メインタイトル</Typography>
 *
 * // レスポンシブ対応
 * <Typography
 *   size={{ sp: "body", md: "h3" }}
 *   textAlign={{ sp: "center", md: "left" }}
 * >
 *   レスポンシブテキスト
 * </Typography>
 * ```
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
