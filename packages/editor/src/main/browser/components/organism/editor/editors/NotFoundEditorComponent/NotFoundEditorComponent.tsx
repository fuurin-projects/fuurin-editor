import React from "react";
import styles from "./NotFoundEditorComponent.css";

type EditorProp = {
  path: string
};

/**
 * 存在しないファオルを表示しとうとした時に使用するエディタコンポーネント
 *
 * @param path ファイルのパス
 * @constructor
 */
export const NotFoundEditorComponent: React.FunctionComponent<EditorProp> = ({path}) => {

  return (<>
    <div className={styles.main}>
      <div className={styles.text}>
        未対応のファイルです path={path}
      </div>
    </div>

  </>)

};