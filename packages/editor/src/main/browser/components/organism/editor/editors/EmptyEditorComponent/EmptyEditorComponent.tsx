import React from "react";
import styles from "./EmptyEditorComponent.css";

/**
 * ファイルが一個も開かれていないときに使用するエディタ
 * @constructor
 */
export const EmptyEditorComponent: React.FunctionComponent = () => {

  return (<>
    <div className={styles.main}>
      <div className={styles.text}>
        ファイルが何も開かれていません
      </div>
    </div>

  </>)

};