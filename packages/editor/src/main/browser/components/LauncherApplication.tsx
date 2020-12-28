import * as React from 'react';
import {useEffect, useState} from 'react';
import * as ReactDOM from 'react-dom';
import CenterLayout from "./layout/CenterLayout/CenterLayout";
import {Logo} from "./atoms/Logo/Logo";
import CreateProjectButton from "./button/CreateProjectButton";
import FlatButton from "./button/FlatButton";
import ProjectRepository from "../repository/ProjectRepository";
import {Project} from "../../ts/common/Preference";
import ProjectList from "./launcher/ProjectList";
import SystemRepository from "../repository/SystemRepository";
import WindowRepository from "../repository/WindowRepository";
import {Version} from "./atoms/Version/Version";

interface Prop {

}

interface State {
  projectList: Project[];
}

const LauncherApplication: React.FunctionComponent<Prop> = (props) => {

  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {

    let unmounted = false;

    function handleListChange(list: Project[]) {
      if (unmounted) {
        return;
      }
      setProjectList(list);
    }

    const projectList = ProjectRepository.instance().getProjectList();

    projectList.on(handleListChange);

    return function cleanup() {
      unmounted = true;
      projectList.off(handleListChange);
    }

  }, [setProjectList]);


  const frameWidth = projectList.length > 0 ? "calc(100% - 280px)" : "100%";

  const handleClick = async () => {

    const desktopDir: string = await SystemRepository.getDesktopDir();
    const selectDir = await WindowRepository.instance().showSelectDirDialog(desktopDir);
    // TODO: GameInfoを読み込む処理
    const fileList = selectDir.filePaths[0].split(window.sep);
    const gameName = fileList[fileList.length - 1];
    await ProjectRepository.instance().openGameProject(gameName, selectDir.filePaths[0]);

  };

  return (

    <div style={{display: "flex", height: "100%"}}>
      {
        projectList.length > 0 &&
        <div style={{width: "280px", backgroundColor: "#FFFFFF", overflowY: "auto"}}>
          <ProjectList projectList={projectList}/>
        </div>
      }
      <div style={{width: frameWidth}}>
        <CenterLayout marginTop={40}><Logo/></CenterLayout>
        <CenterLayout marginTop={16}><Version prefix={"バージョン : "}/></CenterLayout>
        <CenterLayout marginTop={72}><CreateProjectButton width={260}/></CenterLayout>
        <CenterLayout><FlatButton width={260} text={"既存のゲームプロジェクトを開く"} click={handleClick}/></CenterLayout>
      </div>
    </div>
  );

};

export function createComponent() {
  ReactDOM.render(<LauncherApplication/>, document.querySelector('#launcher'));
}
