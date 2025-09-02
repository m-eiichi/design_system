import {
  ColorValue,
  ResponsiveValue,
  BaseColorType,
  BackgroundColorType,
  TextColorType,
  StatusColorType,
  FontType,
  FontWeightType,
  FontSizeType,
  LineHeightType,
  LetterSpacingType,
  BorderValue,
  BorderType,
  DisplayType,
  FlexDirectionType,
  FlexWrapType,
  AlignItemsType,
  JustifyContentType,
  FlexType,
  GrowType,
  ShrinkType,
  PositionType,
  OverflowType,
  TextAlignType,
  CursorType,
  SizeType,
  ElevationType,
  RadiusType,
  GapType,
  SpacingType,
  SizeValue,
  GridTemplateColumnsType,
  GridColumnType,
  GridTemplateRowsType,
  GridRowType,
} from "@/types";

// 対応するタグを限定（型爆発防止）

export type ButtonProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
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

  // 以下は補助的なプロパティ
  // Background
  bg?: ResponsiveValue<
    BaseColorType | BackgroundColorType | StatusColorType | ColorValue
  >;

  // Border
  border?: ResponsiveValue<BorderValue | BorderType>;
  borderTop?: ResponsiveValue<BorderValue | BorderType>;
  borderRight?: ResponsiveValue<BorderValue | BorderType>;
  borderBottom?: ResponsiveValue<BorderValue | BorderType>;
  borderLeft?: ResponsiveValue<BorderValue | BorderType>;
  borderRadius?: ResponsiveValue<RadiusType>;

  // Color
  color?: ResponsiveValue<
    BaseColorType | TextColorType | StatusColorType | ColorValue
  >;

  // Cursor
  cursor?: ResponsiveValue<CursorType>;

  // Elevation
  elevation?: ResponsiveValue<ElevationType>;

  // Overflow
  overflow?: ResponsiveValue<OverflowType>;
  overflowX?: ResponsiveValue<OverflowType>;
  overflowY?: ResponsiveValue<OverflowType>;

  // Position
  position?: ResponsiveValue<PositionType>;

  // Text
  textAlign?: ResponsiveValue<TextAlignType>;

  // Spacing
  p?: ResponsiveValue<SpacingType>;
  px?: ResponsiveValue<SpacingType>;
  py?: ResponsiveValue<SpacingType>;
  pt?: ResponsiveValue<SpacingType>;
  pr?: ResponsiveValue<SpacingType>;
  pb?: ResponsiveValue<SpacingType>;
  pl?: ResponsiveValue<SpacingType>;
  m?: ResponsiveValue<SpacingType>;
  mx?: ResponsiveValue<SpacingType>;
  my?: ResponsiveValue<SpacingType>;
  mt?: ResponsiveValue<SpacingType>;
  mr?: ResponsiveValue<SpacingType>;
  mb?: ResponsiveValue<SpacingType>;
  ml?: ResponsiveValue<SpacingType>;

  // Font
  font?: ResponsiveValue<FontType>;
  fontWeight?: ResponsiveValue<FontWeightType>;
  fontSize?: ResponsiveValue<FontSizeType>;
  lineHeight?: ResponsiveValue<LineHeightType>;
  letterSpacing?: ResponsiveValue<LetterSpacingType>;

  // Sizing
  w?: ResponsiveValue<SizeType | SizeValue>;
  h?: ResponsiveValue<SizeType | SizeValue>;
  minW?: ResponsiveValue<SizeType | SizeValue>;
  minH?: ResponsiveValue<SizeType | SizeValue>;
  maxW?: ResponsiveValue<SizeType | SizeValue>;
  maxH?: ResponsiveValue<SizeType | SizeValue>;
};
