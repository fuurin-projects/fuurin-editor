import React, {useCallback} from "react";
import styles from "./tile_panel.css";
import {AddTile} from "../add-tile/AddTile";
import {FolderTree} from "../../../folder_tree/FolderTree";
import {TileRepository} from "../../../../repository/TileRepository";


export const TilePanel: React.FunctionComponent = () => {

  const dirFun = useCallback((dir) => {

    return TileRepository.instance().getTileList(dir)

  }, []);

  return (<div className={styles.main}>

    <div className={styles.tool}>
      <AddTile/>
      <button>グループを新規追加</button>
    </div>
    {/*<TileList/>*/}
    <div className={styles.list}>
      <div className={styles.list_wrapper}> {/*CSSのoverflowが個要素での幅計算時に参照できないためCSSHack*/}
        <FolderTree dir={"$"} srcFun={dirFun}/>
      </div>
    </div>

  </div>)

};