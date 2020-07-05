import React from "react";
import {BuilderRepository} from "../../../repository/BuilderRepository";
import styles from "./run_button.css";
import {GameRepository} from "../../../repository/GameRepository";

export const RunButton: React.FunctionComponent = () => {

  const click = async () => {
    await BuilderRepository.instance().buildDev();

    await GameRepository.instance().runDev();
  };

  return (<button className={styles.main} onClick={click}/>)

};
