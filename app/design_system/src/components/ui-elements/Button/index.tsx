import clsx from "clsx";
import { CoreComponent } from "@/components/ui_elements/CoreComponent";
import styles from "./styles.module.css";

import { ButtonProps } from './types';



export const Button = ({ className } : ButtonProps) => {
  return (
    <CoreComponent className={clsx(styles.root, className)}>
      Buttonコンポーネント
    </CoreComponent>
  );
};


export default Button;