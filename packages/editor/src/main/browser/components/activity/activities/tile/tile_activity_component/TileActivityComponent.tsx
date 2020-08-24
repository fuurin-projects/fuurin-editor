import React, {useCallback} from "react";
import styles from "./tile_activity_component.css";
import {AddTile} from "../add-tile/AddTile";
import {FolderTree, ItemDoubleClickEvent} from "../../../../folder_tree/FolderTree";
import {TileRepository} from "../../../../../repository/TileRepository";
import {useDispatch} from "react-redux";
import {EditorStore} from "../../../../../stores/EditorStore";


export const TileActivityComponent: React.FunctionComponent = () => {

  const dispatch = useDispatch();

  const dirFun = useCallback((dir) => {

    return TileRepository.instance().getTileList(dir)

  }, []);

  const handleDoubleClick = (e: ItemDoubleClickEvent) => {
    dispatch(EditorStore.actions.openEditor({path: "tile@" + e.path, name: e.name}));
  };

  const displayText = useCallback((text: string) => {

    return text.replace(".json", "");

  }, []);


  return (<div className={styles.main}>

    <div className={styles.tool}>
      <AddTile/>
      <button>グループを新規追加</button>
    </div>
    {/*<TileList/>*/}
    <div className={styles.list}>
      <div className={styles.list_wrapper}> {/*CSSのoverflowが個要素での幅計算時に参照できないためCSSHack*/}
        <FolderTree dir={"$"} srcFun={dirFun} onItemDoubleClick={handleDoubleClick} displayText={displayText}/>
      </div>
    </div>

  </div>)

};