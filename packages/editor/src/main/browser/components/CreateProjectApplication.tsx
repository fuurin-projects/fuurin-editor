import "../css/reset.static.css";
import "../css/global.static.css";
import * as React from 'react';
import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import NewProjectFieldGroup from "./create_project/NewProjectFieldGroup";
import BottomButtonLayout, {BottomButtonLayoutBottom, BottomButtonLayoutMain} from "./layout/BottomButtonLayout/BottomButtonLayout";
import NormalButton from "./button/NormalButton";
import ProjectRepository from "../repository/ProjectRepository";
import {WindowsCloseButton} from "./molecules/WindowsCloseButton/WindowsCloseButton";

const LauncherApplication: React.FunctionComponent = (props): React.ReactElement => {

  const [name, setName] = useState("unknown_game");
  const [dir, setDir] = useState("");

  const handleClick = () => {
    ProjectRepository.instance().createGameProject(name, dir);
  };

  return (
    <BottomButtonLayout>
      <BottomButtonLayoutMain>
        <NewProjectFieldGroup name={name} setName={setName} dir={dir} setDir={setDir}/>
      </BottomButtonLayoutMain>
      <BottomButtonLayoutBottom>
        <NormalButton type={"current"} text={"作成"} click={handleClick}/><WindowsCloseButton/>
      </BottomButtonLayoutBottom>
    </BottomButtonLayout>
  );

};

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#create_project'));
}
