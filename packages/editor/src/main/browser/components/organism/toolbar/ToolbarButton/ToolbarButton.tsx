import React, {MouseEventHandler} from "react";
import styles from "./ToolbarButton.css";

type ToolbarButtonProp = {
  onClick?: MouseEventHandler
  image: string
  disabled?: boolean
}

/**
 * ツールバーに設置するボタンのベースクラス
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
