import React, {CSSProperties, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./editor_tab_list.css";
import {RootState} from "../../../stores/RootStore";
import {EditorItem, EditorStore} from "../../../stores/EditorStore";
import {EditorManager} from "../../../editor/EditorManager";

export const EditorTabList: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorTabList = useSelector((state: RootState) => state.editor.editorList);

  const getItem = (currentEditor: number, editorTabList: Array<EditorItem>) => {

    return editorTabList.map((item, index: number) => {
      return (
        <EditorTabListItem key={item.path} path={item.path} name={item.name} index={index} isCurrent={currentEditor == index}/>
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

  const getDisplayText = useCallback((path: string, text: string) => {

    const editor = EditorManager.instance().getEditor(path);

    if (editor) {
      return editor.getDisplayText(text);
    }

    return text;
  }, [EditorManager.instance()]);


  return (<>
    <div style={customStyle} className={styles.item} onClick={handleClick}>{getDisplayText(path, name)}</div>

  </>)

};
