import React, {MouseEvent, MouseEventHandler} from "react";
import {Project} from "../../../common/Preference";
import styles from "../../../../css/launcher/ProjectItem.css";
import WindowRepository from "../../repository/WindowRepository";


interface Props {

  project: Project

}

const ProjectItem: React.FunctionComponent<Props> = (props) => {

  const handlerClick: MouseEventHandler<HTMLDivElement> = (event: MouseEvent<HTMLDivElement>): void => {

    WindowRepository.instance().showMainWindow(props.project);

  };

  return (
    <>
      <div className={styles.base} onClick={handlerClick}>
        <div className={styles.itemText}>{props.project.name}</div>
        <div className={styles.itemText}>{props.project.dir}</div>
      </div>
    </>
  )

};

export default ProjectItem;