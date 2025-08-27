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
export type CoreComponentElement =
  // テキスト系
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"

  // コンテナ・セクション系
  | "div"
  | "section"
  | "article"
  | "main"
  | "nav"
  | "aside"
  | "ul"
  | "ol"
  | "li"
  | "header"
  | "footer"

  // インタラクティブ系
  | "button"
  | "a";

export type CoreComponentPropsBase<T extends CoreComponentElement = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;

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

  // Display
  display?: ResponsiveValue<DisplayType>;

  // Elevation
  elevation?: ResponsiveValue<ElevationType>;

  // Flex
  flex?: ResponsiveValue<FlexType>;
  flexDirection?: ResponsiveValue<FlexDirectionType>;
  flexWrap?: ResponsiveValue<FlexWrapType>;

  // Grid
  gridTemplateColumns?: ResponsiveValue<GridTemplateColumnsType>;
  gridColumn?: ResponsiveValue<GridColumnType>;
  gridTemplateRows?: ResponsiveValue<GridTemplateRowsType>;
  gridRow?: ResponsiveValue<GridRowType>;

  // Grow / Shrink
  grow?: ResponsiveValue<GrowType>;
  shrink?: ResponsiveValue<ShrinkType>;

  // Justify
  justifyContent?: ResponsiveValue<JustifyContentType>;

  // Align
  alignItems?: ResponsiveValue<AlignItemsType>;

  // Overflow
  overflow?: ResponsiveValue<OverflowType>;
  overflowX?: ResponsiveValue<OverflowType>;
  overflowY?: ResponsiveValue<OverflowType>;

  // Position
  position?: ResponsiveValue<PositionType>;

  // Text
  textAlign?: ResponsiveValue<TextAlignType>;

  gap?: ResponsiveValue<GapType>;

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

// T のタグのネイティブ props から共通 props を除外
export type NativeProps<T extends CoreComponentElement> = Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof CoreComponentPropsBase
>;

// 最終的に渡す props
export type CoreComponentProps<T extends CoreComponentElement> =
  CoreComponentPropsBase<T> & NativeProps<T>;

// 外部に公開する型（ref 型もタグに合わせる）
export type CoreComponentType = <T extends CoreComponentElement = "div">(
  props: CoreComponentProps<T> & {
    ref?: React.Ref<HTMLElementTagNameMap[T]>;
  },
) => React.ReactElement | null;

export type CoreComponentProps2<T extends CoreComponentElement> =
  CoreComponentPropsBase &
    Omit<React.ComponentPropsWithoutRef<T>, keyof CoreComponentPropsBase> & {
      as?: T;
    };
