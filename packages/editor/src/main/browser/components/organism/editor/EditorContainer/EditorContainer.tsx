import React from "react";
import styles from "./EditorContainer.css";
import {useSelector} from "react-redux";
import {RootState} from "../../../../stores/RootStore";
import {CurrentEditor} from "../CurrentEditor/CurrentEditor";
import {EditorTabList} from "../EditorTabList/EditorTabList";

/**
 * タブ部分とエディタ部分を合わせたコンポーネント
 * @constructor
 */
export const EditorContainer: React.FunctionComponent = () => {

  const editorTabList = useSelector((state: RootState) => state.editor.editorList);

  return (<>
    <div className={styles.main}>
      {editorTabList.length > 0 && <EditorTabList/>}
      <div className={editorTabList.length > 0 ? styles.current_editor : styles.current_editor_zero}>
        <CurrentEditor/>
      </div>
    </div>
  </>)

};