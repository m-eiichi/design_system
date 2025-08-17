import {
  ColorValue,
  ResponsiveValue,
  BaseColorType,
  BackgroundColorType,
  TextColorType,
  StatusColorType,
  FontType,
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
  ResponsiveSpacing,
  SizingValue,
  ElevationType,
} from "@/types";

// 対応するタグを限定（型爆発防止）
export type CoreComponentElement =
  | "div"
  | "span"
  | "button"
  | "a"
  | "section"
  | "article"
  | "header"
  | "p"
  | "footer";

export type CoreComponentPropsBase<T extends CoreComponentElement = "div"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;

  // Layout
  display?: ResponsiveValue<DisplayType>;

  // Flexbox
  flexDirection?: ResponsiveValue<FlexDirectionType>;
  flexWrap?: ResponsiveValue<FlexWrapType>;
  alignItems?: ResponsiveValue<AlignItemsType>;
  justifyContent?: ResponsiveValue<JustifyContentType>;
  flex?: ResponsiveValue<FlexType>;
  grow?: ResponsiveValue<GrowType>;
  shrink?: ResponsiveValue<ShrinkType>;

  // Grid
  gridTemplateColumns?: "1" | "2" | "3" | "4" | "5" | "6" | "12";
  gridColumn?:
    | "span-1"
    | "span-2"
    | "span-3"
    | "span-4"
    | "span-5"
    | "span-6"
    | "span-full";
  gridTemplateRows?: "1" | "2" | "3" | "4" | "5" | "6";
  gridRow?:
    | "span-1"
    | "span-2"
    | "span-3"
    | "span-4"
    | "span-5"
    | "span-6"
    | "span-full";

  // Gap
  gap?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "10"
    | "12"
    | "16"
    | "20";

  // Position
  position?: ResponsiveValue<PositionType>;

  // Overflow
  overflow?: ResponsiveValue<OverflowType>;
  overflowX?: ResponsiveValue<OverflowType>;
  overflowY?: ResponsiveValue<OverflowType>;

  // Text
  textAlign?: ResponsiveValue<TextAlignType>;

  // Cursor
  cursor?: ResponsiveValue<CursorType>;
  //ここまで

  // Spacing (using design system scale 1-20)
  p?: ResponsiveSpacing;
  px?: ResponsiveSpacing;
  py?: ResponsiveSpacing;
  pt?: ResponsiveSpacing;
  pr?: ResponsiveSpacing;
  pb?: ResponsiveSpacing;
  pl?: ResponsiveSpacing;
  m?: ResponsiveSpacing;
  mx?: ResponsiveSpacing;
  my?: ResponsiveSpacing;
  mt?: ResponsiveSpacing;
  mr?: ResponsiveSpacing;
  mb?: ResponsiveSpacing;
  ml?: ResponsiveSpacing;

  // Sizing
  w?: SizingValue;
  h?: SizingValue;
  minW?: SizingValue;
  minH?: SizingValue;
  maxW?: SizingValue;
  maxH?: SizingValue;

  // Colors (using design system values)
  bg?: ResponsiveValue<
    BaseColorType | BackgroundColorType | StatusColorType | ColorValue
  >;
  color?: ResponsiveValue<
    BaseColorType | TextColorType | StatusColorType | ColorValue
  >;

  // Font
  font?: ResponsiveValue<FontType>;

  // Borders
  border?: ResponsiveValue<BorderValue | BorderType>;
  borderTop?: ResponsiveValue<BorderValue | BorderType>;
  borderRight?: ResponsiveValue<BorderValue | BorderType>;
  borderBottom?: ResponsiveValue<BorderValue | BorderType>;
  borderLeft?: ResponsiveValue<BorderValue | BorderType>;

  // BorderRadius
  borderRadius?: any;

  // Elevation
  elevation?: ResponsiveValue<ElevationType>;
};

// T のタグのネイティブ props から共通 props を除外
export type NativeProps<T extends CoreComponentElement> = Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof CoreComponentPropsBase
>;

// 最終的に渡す props
export type CoreComponentProps<T extends CoreComponentElement> =
  CoreComponentPropsBase &
    NativeProps<T> & {
      as?: T;
    };

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
