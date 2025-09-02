import clsx from "clsx";
import { createStyle } from "./logic";
// import styles from "./styles.module.css";

import { ButtonProps } from "./types";

// 実装
export const Button = ({
  size = "md",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  type = "button",
  style,
  bg,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderRadius = "xs",
  color,
  cursor,
  elevation = "5",
  font = "buttonM",
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  overflow,
  overflowX,
  overflowY,
  position,
  p,
  pt,
  pr,
  pb,
  pl,
  px = "xs",
  py = "xs",
  textAlign,
  w,
  h,
  minW,
  minH = "48",
  maxW,
  maxH,
  children,
  ...rest
}: ButtonProps) => {
  const { classNames, inlineStyles } = createStyle({
    size,
    variant,
    disabled,
    fullWidth,
    loading,
    onClick,
    type,
    bg,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderRadius,
    color,
    cursor,
    elevation,
    font,
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    overflow,
    overflowX,
    overflowY,
    position,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    textAlign,
    w,
    h,
    minW,
    minH,
    maxW,
    maxH,
  });

  // rest は any にキャストして型爆発防止
  return (
    <button
      {...(rest as any)} // rest を any にキャストして型爆発防止
      className={clsx(classNames)} // core-component クラスを追加
      // style={style} // 直接 style を適用
      style={
        Object.keys(inlineStyles).length > 0
          ? { ...style, ...inlineStyles }
          : style
      }
    >
      {children}
    </button>
  );
};
