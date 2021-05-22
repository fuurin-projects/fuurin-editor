import React, {MouseEventHandler, useEffect, useRef} from "react";
import styles from "./ProjectDirField.css"
import SystemRepository from "../../../repository/SystemRepository";
import WindowRepository from "../../../repository/WindowRepository";
import {Button} from "../../atoms/Button/Button";

interface Prop {
  name: string
  setName: (name: string) => void
  dir: string
  setDir: (dir: string) => void
}

const ProjectDirField: React.FunctionComponent<Prop> = (props) => {

  const isOpenFileDialog = useRef(false);

  useEffect(() => {

    if (isOpenFileDialog.current) {
      //Dialogがすでにオープンしてたら更新ディレクトリの更新はしない
      return;
    }

    const getDesktopDir = async () => {
      console.log("getDesktopDir");
      const desktopDir = await SystemRepository.getDesktopDir();
      const workDir = desktopDir + window.electronBridge.sep + props.name;
      props.setDir(workDir);
    };

    getDesktopDir();

  }, [props.name]);

  const onChangeDir: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    isOpenFileDialog.current = true;
    props.setDir(event.target.value);

  };

  const onClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    console.log("ProjectDirField click!");
    const selectDir = await WindowRepository.instance().showSelectDirDialog(props.dir);

    if (!selectDir.canceled) {
      isOpenFileDialog.current = true;
      props.setDir(selectDir.filePaths[0]);

      //Game名が unknown_game のままの場合はフォルダ名で上書きする
      if (props.name === "unknown_game") {
        const fileList = selectDir.filePaths[0].split(window.electronBridge.sep);
        props.setName(fileList[fileList.length - 1]);
      }
    }

  };

  return (
    <>
      <input className={styles.field} type={"text"} onChange={onChangeDir} value={props.dir}/>
      <div className={styles.openButton}>
        <Button widthType={"small"} onClick={onClick}>…</Button>
      </div>
    </>
  );

};

export {ProjectDirField, Prop}
