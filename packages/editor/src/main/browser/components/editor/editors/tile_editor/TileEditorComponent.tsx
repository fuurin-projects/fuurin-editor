import React, {useEffect, useRef} from "react";
import {EditorProp} from "../../../../editor/IEditor";
import styles from "./tile_editor.css";
import {TileRepository} from "../../../../repository/TileRepository";


export const TileEditorComponent: React.FunctionComponent<EditorProp> = ({path}) => {

  const refImage = useRef<HTMLImageElement>(null);

  useEffect(() => {

    const fun = async () => {
      const blob: Blob | null = await TileRepository.instance().getTilePreviewImage(path);

      if (blob) {
        refImage.current!.src = URL.createObjectURL(blob);
      } else {
        refImage.current!.src = "";
      }

    };

    fun();

  }, [path]);

  return (<>
    <div className={styles.main}>
      <div>
        {path}
      </div>
      <div className={styles.image_container}>
        <img ref={refImage} className={styles.image} alt={"Tile画像"}/>
      </div>
      <div>その他</div>
    </div>
  </>)

};