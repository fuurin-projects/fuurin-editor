import React from "react";
import {BuilderRepository} from "../../../repository/BuilderRepository";
import styles from "./run_button.css";
import {GameRepository} from "../../../repository/GameRepository";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";

export const RunButton: React.FunctionComponent = () => {

  const isRun = useSelector((state: RootState) => state.devGame.run);
  const dispatch = useDispatch();

  const click = async () => {

    await BuilderRepository.instance().buildDev();

    await GameRepository.instance().runDev();

  };

  return (<>
    <button className={styles.main} onClick={click}/>
    {isRun && <>動作中</>}
  </>)

};
