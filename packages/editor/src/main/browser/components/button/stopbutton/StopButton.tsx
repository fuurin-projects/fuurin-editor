import React from "react";
import styles from "./stop_button.css";
import {GameRepository} from "../../../repository/GameRepository";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";

export const StopButton: React.FunctionComponent = () => {

  const isRun = useSelector((state: RootState) => state.devGame.run);

  const disableStyle = {
    backgroundImage: 'url("../resources/images/stop_disable.png")'
  };

  const click = async () => {

    await GameRepository.instance().stopDev();

  };

  const getButton = () => {
    if (isRun) {
      return (<button className={styles.main} onClick={click}/>)
    } else {
      return (<button disabled={true} className={styles.main} style={disableStyle}/>)
    }
  };

  return (<>
    {getButton()}
  </>)

};
