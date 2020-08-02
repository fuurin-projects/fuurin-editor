import React, {useState} from "react";
import {useLiveDate} from "../../hook/useLiveDate";
import {VFile} from "../../../common/VFile";
import LiveDate from "../../repository/LiveDate";
import styles from "./folder_tree.css";


export type FolderTreeProp = {
  dir: string
  srcFun: (dir: string) => LiveDate<VFile[]>
  deep?: number
}

export const FolderTree: React.FunctionComponent<FolderTreeProp> = ({dir, srcFun, deep = 0}) => {

  const tiles = useLiveDate(srcFun(dir), []);

  const tilesDom = tiles.map((vFile: VFile) => {
    if (vFile.isDirectory) {
      return <Folder key={vFile.path + ":" + vFile.name} path={vFile.path} name={vFile.name} srcFun={srcFun} deep={deep}/>
    } else {
      return <File key={vFile.path + ":" + vFile.name} path={vFile.path} name={vFile.name} deep={deep}/>
    }
  });

  return (<>

    {tilesDom}

  </>)

};

type FolderProp = {
  path: string
  name: string
  srcFun: (dir: string) => LiveDate<VFile[]>
  deep: number
}

const Folder: React.FunctionComponent<FolderProp> = ({path, name, srcFun, deep}) => {

  const [open, setOpen] = useState(false);

  const buttonText = open ? "↓" : "→";

  const buttonStyles = open ? styles.folder_button_open : styles.folder_button_close;

  const click = () => {

    setOpen(!open);

  };

  const customStyle: React.CSSProperties = {};
  customStyle.width = `${deep * 16}px`;

  return (<>
    <div className={styles.folder} tabIndex={0}>
      <span className={styles.folder_tree_deep} style={customStyle}/>
      <button className={`${buttonStyles} ${styles.folder_button}`} type={"button"} onClick={click}>{buttonText}</button>
      <div className={styles.folder_text}>{deep + " : " + name}</div>
    </div>
    {open && <FolderTree dir={path} srcFun={srcFun} deep={deep + 1}/>}
  </>)

};

type FileProp = {
  path: string
  name: string
  deep: number
}

const File: React.FunctionComponent<FileProp> = ({path, name, deep}) => {

  const customStyle: React.CSSProperties = {};
  customStyle.marginLeft = `${deep * 16}px`;

  return (<>
    <div className={styles.file} tabIndex={0}>
      <span className={styles.folder_tree_deep} style={customStyle}/>
      <span className={styles.file_space}/>
      <div className={styles.file_text}>
        {deep + " : " + name}
      </div>
    </div>
  </>)

};