import React, {FormEventHandler, useRef, useState} from "react";
import styles from "./AddTileButton.css"
import {TileRepository} from "../../../repository/TileRepository";
import {Button} from "../../atoms/Button/Button";
import {DirInput} from "../DirInput/DirInput";
import {ButtonFooter} from "../../molecules/ButtonFooter/ButtonFooter";

const AddTileButton: React.FunctionComponent = () => {

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

    <Button onClick={click}>Tileを新規追加</Button>

    <dialog className={styles.dialog} ref={ref} key={key}>

      <form onSubmit={handleSubmit}>
        <div className={styles.header}>Tileを新規追加</div>
        <div className={styles.dialog_main}>
          <span className={styles.label}>タイルの名前</span><span><input type="text" required placeholder="Tile名" className={styles.tile_name_field} onChange={handleTileNameChange}
                                                                   value={name}/></span>
          <span className={styles.label}>タイルの画像</span><DirInput isDir={false} extensions={["png"]} onChange={onChangeName} required={true} placeholder={"Tile画像のパス"}/>
        </div>

        <ButtonFooter>
          <Button type="submit" primitive={true} value="ok">Ok</Button>
          <Button type="button" onClick={cancelClick} value="cancel">Cancel</Button>
        </ButtonFooter>
      </form>
    </dialog>

  </>)

};

export {AddTileButton}
