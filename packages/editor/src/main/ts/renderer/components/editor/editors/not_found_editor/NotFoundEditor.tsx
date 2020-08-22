import React from "react";
import styles from "./not_found_editor.css";

type EditorProp = {
  path: string
};

export const NotFoundEditor: React.FunctionComponent<EditorProp> = ({path}) => {

  return (<>
    <div className={styles.main}>
      <div className={styles.text}>
        未対応のファイルです path={path}
      </div>
    </div>

  </>)

};