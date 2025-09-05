import clsx from "clsx";
import { ButtonWrap } from "./ButtonWrap";
import styles from "./styles.module.css";

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
  // 以下は CoreComponent と同じ
  children,
}: ButtonProps) => {
  // rest は any にキャストして型爆発防止
  const className = clsx(
    styles.root,
    styles[size],
    styles[variant],
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
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
          {loading ? "loading..." : children}
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
      {loading ? "loading..." : children}
    </button>
  );
};
