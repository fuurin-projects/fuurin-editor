import React, {MouseEventHandler, useEffect, useRef, useState} from "react";
import SystemRepository from "../../repository/SystemRepository";
import styles from "../../../../css/create_project/ProjectDirField.css";
import {Simulate} from "react-dom/test-utils";
import WindowRepository from "../../repository/WindowRepository";
import NormalButton from "../button/NormalButton";
import input = Simulate.input;


interface Prop {
  name: string
}

const ProjectDirField: React.FunctionComponent<Prop> = (props) => {

  console.log("ProjectDirField");
  const [dir, setDir] = useState("");
  const isOpenFileDialog = useRef(false);

  useEffect(() => {

    if (isOpenFileDialog.current) {
      //Dialogがすでにオープンしてたら更新ディレクトリの更新はしない
      return;
    }

    const getDesktopDir = async () => {
      console.log("getDesktopDir");
      const desktopDir = await SystemRepository.getDesktopDir();
      const workDir = desktopDir + window.sep + props.name;
      setDir(workDir);
    };

    getDesktopDir();

  }, [props.name]);

  const onChangeDir: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    isOpenFileDialog.current = true;
    setDir(event.target.value);

  };

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log("ProjectDirField click!");
    const selectDir = WindowRepository.instance().showSelectDirDialog(dir);

    if (!selectDir.canceled) {
      isOpenFileDialog.current = true;
      setDir(selectDir.filePaths[0]);
    }

  };

  return (
    <>
      <input className={styles.field} type={"text"} onChange={onChangeDir} value={dir}/>
      <NormalButton width={26} text={"…"} paddingLeft={6} margin={"0 0 0 8px"} click={onClick}/>
    </>
  );

};

export default ProjectDirField;