import React from "react";
import styles from "./current_editor.css";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";
import {EmptyEditor} from "../editors/empty_editor/EmptyEditor";
import {EditorManager} from "../../../editor/EditorManager";
import {NotFoundEditor} from "../editors/not_found_editor/NotFoundEditor";

export const CurrentEditor: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorTabList = useSelector((state: RootState) => state.editor.editorList);

  const getEditor = () => {

    if (currentEditor < 0) {
      return <EmptyEditor/>
    }

    const editorPath = editorTabList[currentEditor].path;

    const editor = EditorManager.instance().getEditor(editorPath);
    const EditorComponent = editor?.getEditorComponent();

    console.log(editorPath);

    if (EditorComponent) {
      return (
        <>
          <EditorComponent path={editorPath}/>
        </>
      );
    } else {
      return <NotFoundEditor path={editorPath}/>
    }


  };

  return (<>
    <div className={styles.main}>
      {getEditor()}
    </div>
  </>)

};