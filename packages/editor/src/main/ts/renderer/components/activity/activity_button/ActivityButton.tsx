import React from "react";
import styles from "./activity_button.css";

interface Props {
  image?: string
}

export const ActivityButton: React.FunctionComponent<Props> = ({image}) => {

  const customStyle = {
    backgroundImage: `url("${image}"`,
  };

  return (<>
    <button className={styles.main} style={customStyle}>

    </button>
  </>)

};