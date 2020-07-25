import React from "react";
import styles from "./tile_panel.css";


export const TilePanel: React.FunctionComponent = () => {

  return (<div className={styles.main}>

    <div className={styles.tool}>
      <button>Tileを新規追加</button>
      <button>グループを新規追加</button>
    </div>
    <div>ItemList</div>

  </div>)

};