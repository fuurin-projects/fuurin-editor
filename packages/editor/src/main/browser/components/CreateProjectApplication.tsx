import "../css/reset.static.css";
import "../css/global.static.css";
import * as React from 'react';
import {useState} from 'react';
import * as ReactDOM from 'react-dom';
import NewProjectFieldGroup from "./create_project/NewProjectFieldGroup";
import ProjectRepository from "../repository/ProjectRepository";
import {WindowsCloseButton} from "./molecules/WindowsCloseButton/WindowsCloseButton";
import {Button} from "./atoms/Button/Button";
import {ButtonFooter} from "./molecules/ButtonFooter/ButtonFooter";

const LauncherApplication: React.FunctionComponent = (props): React.ReactElement => {

  const [name, setName] = useState("unknown_game");
  const [dir, setDir] = useState("");

  const handleClick = () => {
    ProjectRepository.instance().createGameProject(name, dir);
  };

  return (
    <>
      <div style={{display: 'grid', height: '100%'}}>
        <NewProjectFieldGroup name={name} setName={setName} dir={dir} setDir={setDir}/>
        <ButtonFooter>
          <Button primitive={true} onClick={handleClick}>作成</Button><WindowsCloseButton/>
        </ButtonFooter>
      </div>
    </>
  );

};

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#create_project'));
}
