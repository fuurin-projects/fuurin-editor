import React from "react";
import {CurrentEditor} from "../current_editor/CurrentEditor";
import styles from "./editor_container.css";
import {EditorTabList} from "../editor_tab_list/EditorTabList";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";

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