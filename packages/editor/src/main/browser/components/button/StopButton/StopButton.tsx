import React from "react";
import {GameRepository} from "../../../repository/GameRepository";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";
import {Icons} from "../../../Icons";
import {ToolbarButton} from "../ToolbarButton/ToolbarButton";

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
      return (<ToolbarButton onClick={click} image={Icons.STOP}/>)
    } else {
      return (<ToolbarButton disabled={true} image={Icons.STOP_DISABLE}/>)
    }
  };

  return (<>
    {getButton()}
  </>)

};
