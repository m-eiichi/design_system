import clsx from "clsx";
import { createStyle } from "./style-extensions";

import { TypographyProps } from "./types";

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
  // const defaultSize = (() => {
  //   switch (as) {
  //     case "h1":
  //       return "h1";
  //     case "h2":
  //       return "h2";
  //     case "h3":
  //       return "h3";
  //     case "h4":
  //       return "h4";
  //     case "h5":
  //       return "h5";
  //     case "h6":
  //       return "h6";
  //     default:
  //       return "body";
  //   }
  // })();

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
    size,
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
