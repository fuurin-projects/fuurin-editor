import React from "react";
import {BuilderRepository} from "../../../repository/BuilderRepository";
import {GameRepository} from "../../../repository/GameRepository";
import {Icons} from "../../../Icons";
import {ToolbarButton} from "../ToolbarButton/ToolbarButton";

export const RunButton: React.FunctionComponent = () => {


  const click = async () => {

    await BuilderRepository.instance().buildDev();

    await GameRepository.instance().runDev();

  };

  return (<>
    <ToolbarButton onClick={click} image={Icons.RUN}/>
  </>)

};
