import React, {useEffect, useState} from "react";
import {Project} from "../../../ts/common/Preference";
import ProjectItem from "./ProjectItem";
import ProjectRepository from "../../repository/ProjectRepository";

interface Props {
  onProjectLoaded?: (projectList: Project[]) => void
}

const ProjectList: React.FunctionComponent<Props> = ({onProjectLoaded}) => {

  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {

    let unmounted = false;

    function handleListChange(list: Project[]) {
      if (unmounted) {
        return;
      }
      setProjectList(list);
      if (onProjectLoaded) {
        onProjectLoaded(list);
      }
    }

    const projectList = ProjectRepository.instance().getProjectList();

    projectList.on(handleListChange);

    return function cleanup() {
      unmounted = true;
      projectList.off(handleListChange);
    }

  }, [onProjectLoaded, setProjectList]);

  const items = projectList.map(p => {
    return <ProjectItem project={p}/>;
  });

  return (
    <>{items}</>
  )

};

export default ProjectList;