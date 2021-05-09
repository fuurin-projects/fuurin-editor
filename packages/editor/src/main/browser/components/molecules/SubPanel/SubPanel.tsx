import React from "react";
import {Text} from "../../atoms/Text/Text";
import styles from "./SubPanel.css"

type SubPanelProp = {
  title: string
}

const SubPanel: React.FC<SubPanelProp> = ({title, children}) => {

  return (
    <div className={styles.container}>
      <div className={styles.title}><Text>{title}</Text></div>
      <div className={styles.content}>{children}</div>
    </div>
  );

};

export {SubPanel, SubPanelProp}