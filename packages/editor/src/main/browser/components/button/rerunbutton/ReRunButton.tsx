import React from "react";
import styles from "./re_run_button.css";
import {GameRepository} from "../../../repository/GameRepository";

/**
 * 再起動ボタン
 * @constructor
 */
export const ReRunButton: React.FunctionComponent = () => {

  const click = async () => {

    await GameRepository.instance().stopDev();
    await GameRepository.instance().runDev();

  };

  return (<>
    <button className={styles.main} onClick={click}/>
  </>)

};
