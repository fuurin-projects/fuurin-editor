import React from "react";
import CenterLayout from "../../layout/CenterLayout/CenterLayout";
import {Logo} from "../../atoms/Logo/Logo";
import {Version} from "../../atoms/Version/Version";
import CreateProjectButton from "../../button/CreateProjectButton";
import {Button} from "../../atoms/Button/Button";
import SystemRepository from "../../../repository/SystemRepository";
import WindowRepository from "../../../repository/WindowRepository";
import ProjectRepository from "../../../repository/ProjectRepository";

const LauncherMainPanel: React.FunctionComponent = () => {

  const handleClick = async () => {

    const desktopDir: string = await SystemRepository.getDesktopDir();
    const selectDir = await WindowRepository.instance().showSelectDirDialog(desktopDir);
    // TODO: GameInfoを読み込む処理
    const fileList = selectDir.filePaths[0].split(window.sep);
    const gameName = fileList[fileList.length - 1];
    await ProjectRepository.instance().openGameProject(gameName, selectDir.filePaths[0]);

  };

  return (<>
    <CenterLayout marginTop={40}><Logo/></CenterLayout>
    <CenterLayout marginTop={16}><Version prefix={"バージョン : "}/></CenterLayout>
    <CenterLayout marginTop={72}><CreateProjectButton width={260}/></CenterLayout>
    <CenterLayout>
      <div style={{width: "260px"}}><Button large={true} fullWidth={true} onClick={handleClick}>既存のゲームプロジェクトを開く</Button></div>
    </CenterLayout>
  </>)

};

export {LauncherMainPanel}
