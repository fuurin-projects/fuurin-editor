import React from "react";
import styles from "./empty_editor.css";

export const EmptyEditor: React.FunctionComponent = () => {

  return (<>
    <div className={styles.main}>
      <div className={styles.text}>
        ファイルが何も開かれていません
      </div>
    </div>

  </>)

};