import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import {Project} from "../../ts/common/Preference";
import ProjectList from "./launcher/ProjectList";
import {LauncherMainPanel} from "./organism/LauncherMainPanel/LauncherMainPanel";

interface Prop {

}

interface State {
  projectList: Project[];
}

const LauncherApplication: React.FunctionComponent<Prop> = (props) => {

  //初回読み込みをさせるためにダミーのデータを設定
  const [projectList, setProjectList] = useState<Project[]>([{dir: "", name: ""}]);

  const frameWidth = projectList.length > 0 ? "calc(100% - 280px)" : "100%";

  const onProjectLoaded = useCallback((projectList: Project[]) => {
    setProjectList(projectList);
  }, [setProjectList]);

  return (

    <div style={{display: "flex", height: "100%"}}>
      {
        projectList.length > 0 &&
        <div style={{width: "280px", backgroundColor: "#FFFFFF", overflowY: "auto"}}>
          <ProjectList onProjectLoaded={onProjectLoaded}/>
        </div>
      }
      <div style={{width: frameWidth}}>
        <LauncherMainPanel/>
      </div>
    </div>
  );

};

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#launcher'));
}
