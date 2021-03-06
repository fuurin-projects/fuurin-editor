import React, {MouseEventHandler} from "react";
import styles from "./Button.css"

type Prop = {
  primitive?: boolean
  large?: boolean
  widthType?: WidthType
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'submit' | 'reset' | 'button';
  value?: string;
}

type WidthType = 'normal' | 'full' | "small";

const Button: React.FunctionComponent<Prop> = (
  {
    primitive = false,
    large = false,
    widthType = 'normal',
    onClick,
    children,
    type = "button",
    value
  }) => {

  const style = primitive ? `${styles.main} ${styles.primitive}` : `${styles.main} ${styles.normal}`;
  const styleL = large ? `${style} ${styles.large_size}` : `${style} ${styles.normal_size}`;
  const styleLW = widthType === 'full' ? `${styleL} ${styles.full_width}` : `${styleL}`;
  const styleLWS = widthType === 'small' ? `${styleLW} ${styles.small_width}` : `${styleLW}`;

  return (<>
    <button type={type} value={value} className={styleLWS} onClick={onClick}>{children}</button>
  </>)

};

export {Button, Prop}
