import React, {MouseEvent, MouseEventHandler} from "react";
import styles from "./ProjectItem.css"
import {Project} from "../../../../ts/common/Preference";
import WindowRepository from "../../../repository/WindowRepository";
import ProjectRepository from "../../../repository/ProjectRepository";

interface Prop {

  project: Project

}

const ProjectItem: React.FunctionComponent<Prop> = (props) => {

  const handlerClick: MouseEventHandler<HTMLDivElement> = (event: MouseEvent<HTMLDivElement>): void => {

    WindowRepository.instance().showMainWindow(props.project);

  };

  const handleDelete: MouseEventHandler<HTMLDivElement> = (event: MouseEvent<HTMLDivElement>): void => {

    event.stopPropagation();
    ProjectRepository.instance().deleteGameProject(props.project);
    console.log("Delete")

  };

  return (
    <>
      <div className={styles.base} onClick={handlerClick}>
        <div className={styles.itemText}>{props.project.name}</div>
        <div className={styles.itemText}>{props.project.dir}</div>
        <div className={styles.delete} onClick={handleDelete}>×</div>
      </div>
    </>
  )

};

export {ProjectItem, Prop}
