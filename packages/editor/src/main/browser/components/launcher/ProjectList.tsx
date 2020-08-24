import React from "react";
import {Project} from "../../../ts/common/Preference";
import ProjectItem from "./ProjectItem";

interface Props {

  projectList: Project[]

}

const ProjectList: React.FunctionComponent<Props> = (props) => {

  const items = props.projectList.map(p => {
    return <ProjectItem project={p}/>;
  });

  return (
    <>{items}</>
  )

};

export default ProjectList;