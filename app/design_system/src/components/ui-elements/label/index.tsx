import { CoreComponent } from "../core-component";
import styles from "./styles.module.css";

import { LabelProps } from './types';



export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <CoreComponent className={className} {...props}>
      Labelコンポーネント
    </CoreComponent>
  );
};

