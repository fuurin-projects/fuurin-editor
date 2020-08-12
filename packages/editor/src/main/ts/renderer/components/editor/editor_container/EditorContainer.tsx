import React from "react";
import {CurrentEditor} from "../current_editor/CurrentEditor";
import styles from "./editor_container.css";
import {EditorTabList} from "../editor_tab_list/EditorTabList";


export const EditorContainer: React.FunctionComponent = () => {

  return (<>
    <div className={styles.main}>
      <EditorTabList/>
      <CurrentEditor/>
    </div>
  </>)

};