import "../../../css/reset.static.css";
import "../../../css/global.static.css";
import React, {useCallback, useState} from "react";
import styles from "./LauncherApplication.css"
import {Project} from "../../../../ts/common/Preference";
import {LauncherMainPanel} from "../../organism/LauncherMainPanel/LauncherMainPanel";
import ReactDOM from "react-dom";
import {ProjectList} from "../../organism/ProjectList/ProjectList";


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

    <div className={styles.main}>
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

function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#launcher'));
}

export {LauncherApplication, createComponent}
