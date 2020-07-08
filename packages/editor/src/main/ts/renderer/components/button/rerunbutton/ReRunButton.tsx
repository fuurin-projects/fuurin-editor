import React from "react";
import styles from "./re_run_button.css";

/**
 * 再起動ボタン
 * @constructor
 */
export const ReRunButton: React.FunctionComponent = () => {

  const click = async () => {

  };

  return (<>
    <button className={styles.main} onClick={click}/>
  </>)

};
