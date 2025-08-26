import React from "react";
import clsx from "clsx";
import { createStyle } from "./logic";
import {
  CoreComponentElement,
  CoreComponentProps,
  CoreComponentType,
} from "./types";

// 実装
export const CoreComponent = React.forwardRef(
  <T extends CoreComponentElement = "div">(
    {
      as,
      style,
      alignItems,
      bg,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      borderRadius,
      color,
      cursor,
      display,
      elevation,
      flex,
      flexDirection,
      flexWrap,
      font,
      fontWeight,
      fontSize,
      lineHeight,
      letterSpacing,
      gap,
      grow,
      justifyContent,
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
      shrink,
      textAlign,
      // grid
      gridTemplateColumns,
      gridColumn,
      gridTemplateRows,
      gridRow,
      //
      w,
      h,
      minW,
      minH,
      maxW,
      maxH,
      ...rest
    }: CoreComponentProps<T>,
    ref: React.Ref<HTMLElementTagNameMap[T]>,
  ) => {
    const Component = as || "div";

    const { classNames, inlineStyles } = createStyle({
      alignItems,
      bg,
      border,
      borderTop,
      borderRight,
      borderBottom,
      borderLeft,
      borderRadius,
      color,
      cursor,
      display,
      elevation,
      flex,
      flexDirection,
      flexWrap,
      font,
      fontWeight,
      fontSize,
      lineHeight,
      letterSpacing,
      gap,
      grow,
      justifyContent,
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
      shrink,
      textAlign,
      // grid
      gridTemplateColumns,
      gridColumn,
      gridTemplateRows,
      gridRow,
      //
      w,
      h,
      minW,
      minH,
      maxW,
      maxH,
    });

    // rest は any にキャストして型爆発防止
    return (
      <Component
        ref={ref}
        {...(rest as any)} // rest を any にキャストして型爆発防止
        className={clsx(classNames)} // core-component クラスを追加
        // style={style} // 直接 style を適用
        style={
          Object.keys(inlineStyles).length > 0
            ? { ...style, ...inlineStyles }
            : style
        }
      />
    );
  },
) as CoreComponentType;
