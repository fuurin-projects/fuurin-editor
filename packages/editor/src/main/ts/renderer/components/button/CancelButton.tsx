import NormalButton from "./NormalButton";
import React, {MouseEventHandler} from "react";
import WindowRepository from "../../repository/WindowRepository";

const CancelButton: React.FunctionComponent = (props) => {


  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("CreateProjectButton click!");
    WindowRepository.instance().closeCurrentWindow();
  };

  return (
    <NormalButton text={"キャンセル"} click={onClick} margin={"14px 14px 14px 0"}/>
  );

};

export default CancelButton;