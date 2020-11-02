import React, {MouseEventHandler} from "react";
import styles from "./ToolbarButton.css";

type ToolbarButtonProp = {
  onClick?: MouseEventHandler
  image: string
  disabled?: boolean
}

/**
 * 再起動ボタン
 * @constructor
 */
export const ToolbarButton: React.FunctionComponent<ToolbarButtonProp> = ({onClick, image, disabled = false}) => {

  const customStyle = {
    backgroundImage: `url("${image}"`,
  };


  return (<>
    <button disabled={disabled} className={styles.main} onClick={onClick} style={customStyle}/>
  </>)

};
