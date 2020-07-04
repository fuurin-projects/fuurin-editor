import React from "react";
import {BuilderRepository} from "../../../repository/BuilderRepository";
import styles from "./run_button.css";

export const RunButton: React.FunctionComponent = () => {

  const click = () => {
    BuilderRepository.instance().buildDev();
  };

  return (<button className={styles.main} onClick={click}/>)

};
