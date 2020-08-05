import React from "react";
import {CurrentEditor} from "../current_editor/CurrentEditor";
import styles from "./editor_container.css";


export const EditorContainer: React.FunctionComponent = () => {

  return (<>
    <div className={styles.main}>
      <CurrentEditor/>
    </div>
  </>)

};