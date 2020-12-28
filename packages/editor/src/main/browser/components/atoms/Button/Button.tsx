import React, {MouseEventHandler} from "react";
import styles from "./Button.css"
import {Text} from "../Text/Text";

type Prop = {
  primitive?: boolean
  large?: boolean
  fullWidth?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FunctionComponent<Prop> = (
  {
    primitive = false,
    large = false,
    fullWidth = false,
    onClick,
    children
  }) => {

  const style = primitive ? `${styles.main} ${styles.primitive}` : `${styles.main} ${styles.normal}`;
  const styleL = large ? `${style} ${styles.large_size}` : `${style} ${styles.normal_size}`;
  const styleLW = fullWidth ? `${styleL} ${styles.full_width}` : `${styleL}`;

  return (<>
    <button className={styleLW} onClick={onClick}>{children && <Text>{children}</Text>}</button>
  </>)

};

export {Button, Prop}
