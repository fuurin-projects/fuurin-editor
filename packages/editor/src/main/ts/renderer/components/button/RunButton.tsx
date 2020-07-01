import React from "react";
import {BuilderRepository} from "../../repository/BuilderRepository";

export const RunButton: React.FunctionComponent = () => {

  const click = () => {
    BuilderRepository.instance().buildDev();
  };

  return (<button onClick={click}>▶</button>)

};
