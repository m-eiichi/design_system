// import {
//   ColorValue,
//   ResponsiveValue,
//   BaseColorType,
//   BackgroundColorType,
//   TextColorType,
//   StatusColorType,
//   FontType,
//   FontWeightType,
//   FontSizeType,
//   LineHeightType,
//   LetterSpacingType,
//   BorderValue,
//   BorderType,
//   DisplayType,
//   FlexDirectionType,
//   FlexWrapType,
//   AlignItemsType,
//   JustifyContentType,
//   FlexType,
//   GrowType,
//   ShrinkType,
//   PositionType,
//   OverflowType,
//   TextAlignType,
//   CursorType,
//   SizeType,
//   ElevationType,
//   RadiusType,
//   GapType,
//   SpacingType,
//   SizeValue,
//   GridTemplateColumnsType,
//   GridColumnType,
//   GridTemplateRowsType,
//   GridRowType,
// } from "@/types";

// 対応するタグを限定（型爆発防止）

export type ButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  as?: React.ElementType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // // 以下は補助的なプロパティ
  // // Background
  // bg?: ResponsiveValue<
  //   BaseColorType | BackgroundColorType | StatusColorType | ColorValue
  // >;

  // // Color
  // color?: ResponsiveValue<
  //   BaseColorType | TextColorType | StatusColorType | ColorValue
  // >;

  // // Cursor
  // cursor?: ResponsiveValue<CursorType>;

  // // Sizing
  // w?: ResponsiveValue<SizeType | SizeValue>;
  // h?: ResponsiveValue<SizeType | SizeValue>;
  // minW?: ResponsiveValue<SizeType | SizeValue>;
  // minH?: ResponsiveValue<SizeType | SizeValue>;
  // maxW?: ResponsiveValue<SizeType | SizeValue>;
  // maxH?: ResponsiveValue<SizeType | SizeValue>;
};
