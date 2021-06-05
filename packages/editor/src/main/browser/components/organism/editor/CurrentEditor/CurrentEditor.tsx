import React from "react";
import styles from "./CurrentEditor.css";
import {useSelector} from "react-redux";
import {RootState} from "../../../../stores/RootStore";
import {EmptyEditorComponent} from "../editors/EmptyEditorComponent/EmptyEditorComponent";
import {EditorManager} from "../../../../editor/EditorManager";

/**
 * 現在開いているファイルを表示するコンポーネント
 *
 * 実際のファイルの中身の描画は各種エディタコンポーネントが担当する
 * @constructor
 */
const CurrentEditor: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorTabList = useSelector((state: RootState) => state.editor.editorList);

  const getEditor = () => {

    if (currentEditor < 0) {
      return <EmptyEditorComponent/>
    }

    const editorPath = editorTabList[currentEditor].path;

    const editor = EditorManager.instance().getEditor(editorPath);
    const EditorComponent = editor.getEditorComponent();

    console.log(editorPath);

    return <EditorComponent key={editorPath} path={editorPath}/>

  };

  return (<>
    <div className={styles.main}>
      {getEditor()}
    </div>
  </>)

};

export {CurrentEditor}