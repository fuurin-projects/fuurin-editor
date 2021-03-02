import "../../../css/reset.static.css";
import "../../../css/global.static.css";
import React, {useState} from "react";
import styles from "./CreateProjectApplication.css"
import ProjectRepository from "../../../repository/ProjectRepository";
import {NewProjectFieldGroup} from "../../organism/NewProjectFieldGroup/NewProjectFieldGroup";
import {ButtonFooter} from "../../molecules/ButtonFooter/ButtonFooter";
import {Button} from "../../atoms/Button/Button";
import {WindowsCloseButton} from "../../molecules/WindowsCloseButton/WindowsCloseButton";
import * as ReactDOM from "react-dom";

const CreateProjectApplication: React.FunctionComponent = () => {

  const [name, setName] = useState("unknown_game");
  const [dir, setDir] = useState("");

  const handleClick = () => {
    ProjectRepository.instance().createGameProject(name, dir);
  };

  return (
    <>
      <div className={styles.main}>
        <NewProjectFieldGroup name={name} setName={setName} dir={dir} setDir={setDir}/>
        <ButtonFooter>
          <Button primitive={true} onClick={handleClick}>作成</Button><WindowsCloseButton/>
        </ButtonFooter>
      </div>
    </>
  );

};

function createComponent() {
  ReactDOM.render(<CreateProjectApplication/>, document.querySelector('#create_project'));
}

export {CreateProjectApplication, createComponent}
