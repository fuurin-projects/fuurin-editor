import React from "react";
import styles from "./Text.css"


type TextProp = {
  text?: string
}

const Text: React.FC<TextProp> = ({text, children}) => {

  return (
    <span className={styles.normal}>{children}</span>
  );


};

export {Text, TextProp}