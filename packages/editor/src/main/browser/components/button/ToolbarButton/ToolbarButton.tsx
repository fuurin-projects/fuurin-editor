import React, {MouseEventHandler} from "react";
import styles from "./ToolbarButton.css";

type ToolbarButtonProp = {
  onClick: MouseEventHandler
  image: string
}

/**
 * 再起動ボタン
 * @constructor
 */
export const ToolbarButton: React.FunctionComponent<ToolbarButtonProp> = ({onClick, image}) => {

  const customStyle = {
    backgroundImage: `url("${image}"`,
  };


  return (<>
    <button className={styles.main} onClick={onClick} style={customStyle}/>
  </>)

};
