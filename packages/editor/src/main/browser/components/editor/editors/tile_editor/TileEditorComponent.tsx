import React, {useEffect, useRef} from "react";
import {EditorProp} from "../../../../editor/IEditor";
import styles from "./tile_editor.css";
import {TileRepository} from "../../../../repository/TileRepository";
import {SplitPanel} from "../../../layout/SplitPanel/SplitPanel";


const TileEditorComponent: React.FunctionComponent<EditorProp> = ({path}) => {

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
    <SplitPanel defaultWidth={200} secondMain={true}>
      <div className={styles.main}>
        <div>
          {path}
        </div>
        <div className={styles.image_container}>
          <img ref={refImage} className={styles.image} alt={"Tile画像"}/>
        </div>
        <div>その他</div>
      </div>
      <div>プロパティー</div>
    </SplitPanel>
  </>)

};

export {TileEditorComponent};