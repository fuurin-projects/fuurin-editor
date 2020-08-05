import React from "react";
import {EditorProp} from "../../../editor/IEditor";
import styles from "./tile_editor.css";


export const TileEditorComponent: React.FunctionComponent<EditorProp> = ({path}) => {

  return (<>
    <div className={styles.main}>
      <div>
        {path}
      </div>
      <div className={styles.image_container}>
        <img className={styles.image} alt={"Tile画像"}/>
      </div>
      <div>その他</div>
    </div>
  </>)

};