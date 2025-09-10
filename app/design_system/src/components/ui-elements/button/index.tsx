import clsx from "clsx";
import { ButtonWrap } from "./button-wrap";
import Styles from "./styles.module.css";

import { ButtonProps } from "./types";

// 実装
export const Button = ({
  size = "lg",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  loading = false,
  onClick,
  type = "button",

  leftIcon,
  rightIcon,
  children,
}: ButtonProps) => {
  // rest は any にキャストして型爆発防止
  const className = clsx(
    Styles.root,
    Styles[size],
    Styles[variant],
    disabled && Styles.disabled,
    fullWidth && Styles.fullWidth,
  );

  if (size === "xs") {
    return (
      <ButtonWrap size={size} fullWidth={fullWidth}>
        <button
          type={type}
          className={className}
          onClick={onClick}
          disabled={disabled}
        >
          {loading ? (
            "loading..."
          ) : leftIcon || rightIcon ? (
            <span>
              {leftIcon && leftIcon}
              {children}
              {rightIcon && rightIcon}
            </span>
          ) : (
            children
          )}
        </button>
      </ButtonWrap>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        "loading..."
      ) : leftIcon || rightIcon ? (
        <span>
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </span>
      ) : (
        children
      )}
    </button>
  );
};
