import React from "react";
import {GameRepository} from "../../../../repository/GameRepository";
import {Icons} from "../../../../Icons";
import {ToolbarButton} from "../ToolbarButton/ToolbarButton";

/**
 * ゲームの再起動ボタン
 * @constructor
 */
export const ReRunButton: React.FunctionComponent = () => {

  const click = async () => {

    await GameRepository.instance().stopDev();
    await GameRepository.instance().runDev();

  };

  return (<>
    <ToolbarButton onClick={click} image={Icons.RE_RUN}/>
  </>)

};
