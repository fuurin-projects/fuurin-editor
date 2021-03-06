import React, {useCallback} from "react";
import styles from "./TileActivityComponent.css";
import {TileRepository} from "../../../../../repository/TileRepository";
import {useDispatch} from "react-redux";
import {EditorStore} from "../../../../../stores/EditorStore";
import {FolderTree, ItemDoubleClickEvent} from "../../../../atoms/FolderTree/FolderTree";
import {Button} from "../../../../atoms/Button/Button";
import {AddTileButton} from "../../../AddTileButton/AddTileButton";

/**
 * Tile情報を管理するActivity
 * @constructor
 */
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
      <AddTileButton/>
      <Button>グループを新規追加</Button>
    </div>
    {/*<TileList/>*/}
    <div className={styles.list}>
      <div className={styles.list_wrapper}> {/*CSSのoverflowが個要素での幅計算時に参照できないためCSSHack*/}
        <FolderTree dir={"$"} srcFun={dirFun} onItemDoubleClick={handleDoubleClick} displayText={displayText}/>
      </div>
    </div>

  </div>)

};