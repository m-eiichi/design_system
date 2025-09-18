import clsx from "clsx";
import { ButtonWrapProps } from "./types";
import styles from "./styles.module.css";

export const ButtonWrap = ({ size, children, fullWidth }: ButtonWrapProps) => {
  return (
    <div
      className={clsx(styles.root, styles[size], fullWidth && styles.fullWidth)}
    >
      {children}
    </div>
  );
};
