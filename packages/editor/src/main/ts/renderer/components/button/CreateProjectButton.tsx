import React, {MouseEventHandler} from "react";
import FlatButton from "./FlatButton";
import WindowRepository from "../../repository/WindowRepository";

interface Props {
  width?: number
}

const CreateProjectButton: React.FC<Props> = (props) => {

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("CreateProjectButton click!");
    WindowRepository.instance().showCreateProjectWindow();
  };

  return (
    <>
      <FlatButton text={"新規でゲームを作成する"} width={props.width} click={onClick}/>
    </>
  );
};

export default CreateProjectButton;