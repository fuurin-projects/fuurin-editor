import React, {FormEventHandler, useRef, useState} from "react";
import styles from "./add_tile.css";
import {DirInput} from "../../../form/dir_input/DirInput";
import {TileRepository} from "../../../../repository/TileRepository";

export const AddTile: React.FunctionComponent = () => {

  const ref = useRef<HTMLDialogElement>(null);
  const refForm = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [dir, setDir] = useState("");
  const [key, setKey] = useState("");

  const handleTileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };

  const click = async () => {

    ref.current!.showModal();

  };

  const cancelClick = async () => {
    closeDialog();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await TileRepository.instance().registerTile(name, dir);

    closeDialog();
  };

  const closeDialog = () => {
    ref.current!.close();
    setKey("" + Date.now());
    setName("");
  };


  const onChangeName = (fileName: string) => {
    setDir(fileName);
  };

  return (<>

    <button onClick={click}>Tileを新規追加</button>

    <dialog className={styles.dialog} ref={ref} key={key}>

      <form onSubmit={handleSubmit}>
        <div className={styles.header}>Tileを新規追加</div>
        <div className={styles.dialog_main}>
          <span className={styles.label}>タイルの名前</span><span><input type="text" required placeholder="Tile名" className={styles.tile_name_field} onChange={handleTileNameChange}
                                                                   value={name}/></span>
          <span className={styles.label}>タイルの画像</span><DirInput isDir={false} extensions={["png"]} onChange={onChangeName} required={true}/>
        </div>

        <div className={styles.footer}>
          <button type="button" onClick={cancelClick} value="cancel">Cancel</button>
          <button type="submit" value="ok">Ok</button>
        </div>
      </form>
    </dialog>

  </>)

};