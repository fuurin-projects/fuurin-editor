import React, {CSSProperties, MouseEventHandler, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./EditorTabList.css";
import {RootState} from "../../../../stores/RootStore";
import {EditorItem, EditorStore, selectEntities} from "../../../../stores/EditorStore";
import {EditorManager} from "../../../../editor/EditorManager";
import {IconTabClose} from "../../../atoms/Icons/Icons";

/**
 * 開いているファイルのタブを表示するコンポーネント
 * @constructor
 */
export const EditorTabList: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorTabList = useSelector((state: RootState) => state.editor.editorList);
  const editorDataList = useSelector((state: RootState) => selectEntities(state.editor));

  const getItem = (currentEditor: number, editorTabList: Array<EditorItem>) => {

    return editorTabList.map((item, index: number) => {

      const editorData = editorDataList[item.path];

      const name = editorData ?
        editorData.isDiff
          ? "* " + item.name
          : item.name
        : item.name

      return (
        <EditorTabListItem key={item.path} path={item.path} name={name} index={index} isCurrent={currentEditor == index}/>
      )
    })

  };

  return (<>
    <div className={styles.main}>
      {getItem(currentEditor, editorTabList)}
    </div>

  </>)

};

type EditorTabListItemProp = {
  index: number
  path: string
  name: string
  isCurrent: boolean
}

/**
 * ファイルタブ
 * @param index タブの番号
 * @param path ファイルの位置
 * @param name 名前
 * @param isCurrent カレントかどうか
 * @constructor
 */
export const EditorTabListItem: React.FunctionComponent<EditorTabListItemProp> = ({index, path, name, isCurrent}) => {

  const dispatch = useDispatch();

  const customStyle: CSSProperties = {};
  if (isCurrent) {
    customStyle.backgroundColor = "#ffffff";
    customStyle.borderBottom = "#517fff 3px solid"
  }

  const handleClick = () => {
    dispatch(EditorStore.actions.changeEditor(index));
  };

  const handleCloseClick: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(EditorStore.actions.closeEditor(index));

  };

  const getDisplayText = useCallback((path: string, text: string) => {

    const editor = EditorManager.instance().getEditor(path);

    return editor.getDisplayText(text);

  }, [EditorManager.instance()]);


  return (<>
    <div style={customStyle} className={styles.item} onClick={handleClick}>
      <div className={styles.item_icon}/>
      <div className={styles.item_text}>{getDisplayText(path, name)}</div>
      <button className={styles.item_close} onClick={handleCloseClick}><IconTabClose/></button>
    </div>

  </>)

};
