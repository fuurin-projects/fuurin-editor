import React from "react";
import styles from "./not_found_editor_component.css";

type EditorProp = {
  path: string
};

export const NotFoundEditorComponent: React.FunctionComponent<EditorProp> = ({path}) => {

  return (<>
    <div className={styles.main}>
      <div className={styles.text}>
        未対応のファイルです path={path}
      </div>
    </div>

  </>)

};