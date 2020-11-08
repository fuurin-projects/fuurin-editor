import React from "react";
import styles from "./Text.css"


type TextProp = {
  text: string
}

const Text: React.FC<TextProp> = ({text}) => {

  return (
    <span className={styles.normal}>{text}</span>
  );


};

export {Text, TextProp}