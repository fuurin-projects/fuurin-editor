import React from "react";
import {Project} from "../../../common/Preference";
import styles from "../../../../css/launcher/ProjectItem.css";


interface Props {

  project: Project

}

const ProjectItem: React.FunctionComponent<Props> = (props) => {

  return (
    <>
      <div className={styles.base}>
        <div className={styles.itemText}>{props.project.name}</div>
        <div className={styles.itemText}>{props.project.dir}</div>
      </div>
    </>
  )

};

export default ProjectItem;