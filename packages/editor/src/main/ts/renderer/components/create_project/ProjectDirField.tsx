import React, {useEffect, useRef, useState} from "react";
import SystemRepository from "../../repository/SystemRepository";
import styles from "../../../../css/create_project/NewProjectFieldGroup.css";
import {Simulate} from "react-dom/test-utils";
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

  return (
    <>
      <input className={styles.base} type={"text"} onChange={onChangeDir} value={dir}/>
      <input type={"button"} value={"ファイルを開く"}/>
    </>
  );

};

export default ProjectDirField;