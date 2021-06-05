import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {EditorProp} from "../../../../../editor/IEditor";
import styles from "./TileEditorComponent.css";
import {TileRepository, TileState} from "../../../../../repository/TileRepository";
import {SubPanel} from "../../../../molecules/SubPanel/SubPanel";
import {SplitPanel} from "../../../../atoms/SplitPanel/SplitPanel";
import {Table, TableData} from "../../../../atoms/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../stores/RootStore";
import {EditorStore, selectById} from "../../../../../stores/EditorStore";
import {Sleep} from "../../../../../../ts/common/Sleep";
import {EditorDataTile} from "../../../../../stores/EditorData";

/**
 * Tile情報を表示するエディター
 *
 * @param path タイルのパス
 * @constructor
 */
const TileEditorComponent: React.FunctionComponent<EditorProp> = ({path}) => {

    const editorData: EditorDataTile | undefined = useSelector((state: RootState) => selectById(state.editor, path) as EditorDataTile);
    const dispatch = useDispatch();

    const [originData, setOriginData] = useState<TileState | undefined>(undefined);

    const initLoaded = useRef(false);

    console.log('abc ' + path + ' : ' + initLoaded.current)

    useEffect(() => {

      const fun = async () => {

        const deta = await TileRepository.instance().getTileData(path)

        console.log(deta);
        await Sleep.sleep(400);

        setOriginData(deta);
        dispatch(EditorStore.actions.updateEditorData({
          path: path, type: 'tile', data: deta as object, isDiff: false, canOverride: false
        }));


        initLoaded.current = true;

      };

      fun();

    }, [path]);

    //画像部分
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

    const viewData = editorData?.viewData;

    const data: TableData = [{
      key: 'collision',
      type: 'boolean',
      name: 'プレイヤーの通行',
      value: viewData ? Boolean(viewData.collision) : true,
      option: {
        trueText: '可能',
        falseText: '不可'
      }
    }]

    const onChange = (key: string | null, event: ChangeEvent<HTMLSelectElement>) => {

      const nowData = {
        ...originData,
        collision: event.currentTarget.value.toLowerCase() === "true"
      };

      dispatch(EditorStore.actions.updateEditorData({
        path: path, type: 'tile', data: nowData, isDiff: isDiff(originData, nowData as TileState), canOverride: true
      }));

    }

    const isDiff = (originalData: TileState | undefined, nowData: TileState | undefined) => {
      if (!originalData) {
        return false;
      }
      if (!nowData) {
        return false;
      }
      return originalData?.collision != nowData.collision
    }

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
        <SubPanel title={"プロパティー"}>
          {!editorData
            ? <div>読込中</div>
            : <Table data={data} onChange={onChange}/>
          }
        </SubPanel>
      </SplitPanel>
    </>)

  }
;

export {TileEditorComponent};