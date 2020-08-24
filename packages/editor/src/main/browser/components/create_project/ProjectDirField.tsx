import React, {MouseEventHandler, useEffect, useRef} from "react";
import SystemRepository from "../../repository/SystemRepository";
import styles from "../../../../css/create_project/ProjectDirField.css";
import {Simulate} from "react-dom/test-utils";
import WindowRepository from "../../repository/WindowRepository";
import NormalButton from "../button/NormalButton";
import input = Simulate.input;


interface Prop {
  name: string
  setName: (name: string) => void
  dir: string
  setDir: (dir: string) => void
}

const ProjectDirField: React.FunctionComponent<Prop> = (props) => {

  console.log("ProjectDirField");
  // const [dir, setDir] = useState("");
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
        const fileList = selectDir.filePaths[0].split(window.sep);
        props.setName(fileList[fileList.length - 1]);
      }
    }

  };

  return (
    <>
      <input className={styles.field} type={"text"} onChange={onChangeDir} value={props.dir}/>
      <NormalButton width={26} text={"…"} paddingLeft={6} margin={"0 0 0 8px"} click={onClick}/>
    </>
  );

};

export default ProjectDirField;