import React, {MouseEventHandler, useCallback, useState} from "react";
import styles from "./dir_input.css";
import NormalButton from "../../button/NormalButton";
import WindowRepository from "../../../repository/WindowRepository";
import SystemRepository from "../../../repository/SystemRepository";

type Prop = {
  defaultDir?: string
  onChange?: (value: string) => void
  required?: boolean
}

export const DirInput: React.FunctionComponent<Prop> = ({onChange, defaultDir, required}) => {

  const [dir, setDir] = useState("");

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {

    setDir(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }

  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {

    const fun = async (e_: React.MouseEvent<HTMLButtonElement>) => {

      if (!defaultDir) {
        defaultDir = await SystemRepository.getDesktopDir();
      }
      const openDialogReturnValue = await WindowRepository.instance().showSelectDirDialog(defaultDir);
      const filePath = openDialogReturnValue.filePaths[0];

      if (openDialogReturnValue.canceled) {
        return;
      }

      setDir(filePath);
      if (onChange) {
        onChange(filePath);
      }

    };

    fun(event);

  }, [dir]);


  return (<>
    <span className={styles.main}>

      {required && <input required className={styles.text} type="text" placeholder="Tile画像" value={dir} onChange={onChangeName}/>}
      {!required && <input className={styles.text} type="text" placeholder="Tile画像" value={dir} onChange={onChangeName}/>}
      <NormalButton width={26} text={"…"} paddingLeft={6} margin={"0 0 0 8px"} click={handleClick}/>
    </span>
  </>)

};