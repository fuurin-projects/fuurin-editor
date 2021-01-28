import React from "react";
import styles from "./LauncherMainPanel.css";
import CenterLayout from "../../layout/CenterLayout/CenterLayout";
import {Logo} from "../../atoms/Logo/Logo";
import {Version} from "../../atoms/Version/Version";
import {Button} from "../../atoms/Button/Button";
import SystemRepository from "../../../repository/SystemRepository";
import WindowRepository from "../../../repository/WindowRepository";
import ProjectRepository from "../../../repository/ProjectRepository";

const LauncherMainPanel: React.FunctionComponent = () => {

  const handleNewGameClick = async () => {
    await WindowRepository.instance().showCreateProjectWindow();
  }

  //既存のプロジェクトを開く
  const handleOpenGameClick = async () => {

    const desktopDir: string = await SystemRepository.getDesktopDir();
    const selectDir = await WindowRepository.instance().showSelectDirDialog(desktopDir);
    // TODO: GameInfoを読み込む処理
    const fileList = selectDir.filePaths[0].split(window.sep);
    const gameName = fileList[fileList.length - 1];
    await ProjectRepository.instance().openGameProject(gameName, selectDir.filePaths[0]);

  };

  return (<>
    <div className={styles.main}>
      <CenterLayout marginTop={40}><Logo/></CenterLayout>
      <CenterLayout marginTop={16}><Version prefix={"バージョン : "}/></CenterLayout>
      <CenterLayout marginTop={56}>
        <div style={{width: "260px"}}><Button large={true} fullWidth={true} onClick={handleNewGameClick}>新規でゲームを作成する</Button></div>
      </CenterLayout>
      <CenterLayout marginTop={20}>
        <div style={{width: "260px"}}><Button large={true} fullWidth={true} onClick={handleOpenGameClick}>既存のゲームプロジェクトを開く</Button></div>
      </CenterLayout>
    </div>
  </>)

};

export {LauncherMainPanel}
