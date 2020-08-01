import React from "react";
import styles from "./tile_panel.css";
import {AddTile} from "../add-tile/AddTile";
import {TileList} from "../tile_list/TileList";


export const TilePanel: React.FunctionComponent = () => {


  return (<div className={styles.main}>

    <div className={styles.tool}>
      <AddTile/>
      <button>グループを新規追加</button>
    </div>
    <TileList/>

  </div>)

};