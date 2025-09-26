import { CoreComponent } from "../core-component";
import styles from "./styles.module.css";

import { SupportTextProps } from './types';



export const SupportText = ({ className, ...props }: SupportTextProps) => {
  return (
    <CoreComponent className={className} {...props}>
      SupportTextコンポーネント
    </CoreComponent>
  );
};

