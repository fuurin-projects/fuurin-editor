import React, {useState} from "react";
import {useLiveDate} from "../../hook/useLiveDate";
import {VFile} from "../../../ts/common/VFile";
import LiveDate from "../../repository/LiveDate";
import styles from "./folder_tree.css";


export type FolderTreeProp = {
  dir: string
  srcFun: (dir: string) => LiveDate<VFile[]>
  deep?: number
  onItemDoubleClick?: ItemDoubleClickEventHandler
  displayText?: (name: string) => string
}

export type ItemDoubleClickEvent = {
  path: string
  name: string
}

export type ItemDoubleClickEventHandler = (e: ItemDoubleClickEvent) => void;

export const FolderTree: React.FunctionComponent<FolderTreeProp> = ({dir, srcFun, deep = 0, onItemDoubleClick, displayText}) => {

  const tiles = useLiveDate(srcFun(dir), []);

  const tilesDom = tiles.map((vFile: VFile) => {
    if (vFile.isDirectory) {
      return <Folder key={vFile.path + ":" + vFile.name} path={vFile.path} name={vFile.name} srcFun={srcFun} deep={deep} onItemDoubleClick={onItemDoubleClick}
                     displayText={displayText}/>
    } else {
      return <File key={vFile.path + ":" + vFile.name} path={vFile.path} name={vFile.name} deep={deep} onItemDoubleClick={onItemDoubleClick} displayText={displayText}/>
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
  onItemDoubleClick?: ItemDoubleClickEventHandler
  displayText?: (name: string) => string
}

const Folder: React.FunctionComponent<FolderProp> = ({path, name, srcFun, deep, onItemDoubleClick, displayText}) => {

  const [open, setOpen] = useState(false);

  const buttonText = open ? "" : "";

  const buttonStyles = open ? styles.folder_button_open : styles.folder_button_close;

  const click = () => {

    setOpen(!open);

  };

  const handleDoubleClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setOpen(!open);
  };

  const customStyle: React.CSSProperties = {};
  customStyle.width = `${deep * 16}px`;

  return (<>
    <div className={styles.folder} tabIndex={0} onDoubleClick={handleDoubleClick}>
      <span className={styles.folder_tree_deep} style={customStyle}/>
      <button className={`${buttonStyles} ${styles.folder_button}`} type={"button"} onClick={click}>{buttonText}</button>
      <span className={styles.folder_icon}/>
      <div className={styles.folder_text}>{displayText != undefined ? displayText(name) : name}</div>
      <span className={styles.file_space}/>
    </div>
    {open && <FolderTree dir={path} srcFun={srcFun} deep={deep + 1} onItemDoubleClick={onItemDoubleClick} displayText={displayText}/>}
  </>)

};

type FileProp = {
  path: string
  name: string
  deep: number
  onItemDoubleClick?: ItemDoubleClickEventHandler
  displayText?: (name: string) => string
}

const File: React.FunctionComponent<FileProp> = ({path, name, deep, onItemDoubleClick, displayText}) => {

  const customStyle: React.CSSProperties = {};
  customStyle.marginLeft = `${deep * 16}px`;

  const handleDoubleClick = (e: React.MouseEvent<Element, MouseEvent>) => {

    if (onItemDoubleClick) {
      onItemDoubleClick({path: path, name: name});
    }

  };

  return (<>
    <div className={styles.file} tabIndex={0} onDoubleClick={handleDoubleClick}>
      <span className={styles.folder_tree_deep} style={customStyle}/>
      <span className={styles.file_space}/>
      <span className={styles.file_icon}/>
      <div className={styles.file_text}>
        {displayText != undefined ? displayText(name) : name}
      </div>
      <span className={styles.file_space}/>
    </div>
  </>)

};