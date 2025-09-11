import React from "react";
import {
  ResponsiveValue,
  DisplayType,
  FontWeightType,
  TextAlignType,
  FontSizeType,
  CursorType,
  TextColorType,
  StatusColorType,
} from "@/types";

/**
 * <Typography/>プロパティ
 *
 * @property style - 直接styleを指定するプロパティ
 * @property as - レンダリングするHTML要素
 * @property color - テキストの色（success/error/info/warning/description/link/primary/secondary/disabled/white）
 * @property size - テキストのサイズ（body/caption/h1-h6/subtitle1/subtitle2）
 * @property textAlign - テキストの配置（left/center/right）
 * @property margin - マージンの設定（both/bottom/none）
 * @property fontWeight - フォントの太さ（bold/normal）
 * @property fontSize - フォントサイズ
 * @property display - 表示方法
 * @property cursor - カーソルの種類
 * @property onClick - クリック時のコールバック関数
 * @property ellipsis - テキストの省略表示（true/false）
 * @property children - 子要素
 */

type TypographySize =
  | "body"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2";

export type TypographyProps = {
  style?: React.CSSProperties;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "a"; //asはResponsiveValueを使用しない
  color?: StatusColorType | TextColorType | "primary" | "secondary";
  size?: ResponsiveValue<TypographySize>;
  textAlign?: ResponsiveValue<TextAlignType>; //ok
  margin?: "both" | "bottom" | "none";
  fontWeight?: ResponsiveValue<FontWeightType>; //ok
  fontSize?: ResponsiveValue<FontSizeType>; //sizeを使っているので基本使わない ok
  display?: ResponsiveValue<Omit<DisplayType, "flex" | "inlineFlex" | "grid">>; //不要なtypeをomitする
  onClick?: () => void;
  ellipsis?: boolean; //ok
  cursor?: ResponsiveValue<CursorType>; //ok
  children: React.ReactNode; //ok
};
