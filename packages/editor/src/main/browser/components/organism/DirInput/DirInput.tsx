import React, {MouseEventHandler, useCallback, useState} from "react";
import styles from "./DirInput.css"
import SystemRepository from "../../../repository/SystemRepository";
import WindowRepository from "../../../repository/WindowRepository";
import NormalButton from "../../button/NormalButton";

type Prop = {
  isDir: boolean
  defaultDir?: string,
  extensions?: string[]
  onChange?: (value: string) => void
  required?: boolean
}

const DirInput: React.FunctionComponent<Prop> = ({isDir, onChange, defaultDir, extensions, required}) => {

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
      const openDialogReturnValue = isDir ?
        await WindowRepository.instance().showSelectDirDialog(defaultDir) :
        await WindowRepository.instance().showSelectFileDialog(defaultDir, extensions);

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

export {DirInput, Prop}
