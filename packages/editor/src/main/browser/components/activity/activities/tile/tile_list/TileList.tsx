import React, {useState} from "react";
import {useLiveDate} from "../../../../../hook/useLiveDate";
import {TileRepository} from "../../../../../repository/TileRepository";
import {VFile} from "../../../../../../ts/common/VFile";

export const TileList: React.FunctionComponent = () => {


  return (<>

    <Folder dir={"$"} isTop={true} name={"top"}/>

  </>)

};

type FolderProp = {
  dir: string
  isTop: boolean
  name: string
}

const Folder: React.FunctionComponent<FolderProp> = ({dir, isTop, name}) => {

  const tiles = useLiveDate(TileRepository.instance().getTileList(dir), []);
  const [open, setOpen] = useState(isTop);

  const click = () => {

    setOpen(!open);

  };

  const getFolder = (isTop: boolean, name: string, open: boolean) => {

    const buttonText = open ? "↓" : "→";

    if (isTop) {
      return
    }

    return (
      <>
        <div>
          <button type={"button"} onClick={click}>{buttonText}</button>
          Folder: {name}
        </div>
      </>
    )

  };

  const getFolderList = (open: boolean, folderList: VFile[]) => {

    if (!open) {
      return;
    }

    return folderList.map(vFile => {

      if (vFile.isDirectory) {
        return <Folder dir={vFile.path} isTop={false} name={vFile.name}/>
      } else {
        return <div>File: {vFile.name}</div>
      }

    })

  };

  return (<>

    {getFolder(isTop, name, open)}
    {getFolderList(open, tiles!)}

  </>)

};
