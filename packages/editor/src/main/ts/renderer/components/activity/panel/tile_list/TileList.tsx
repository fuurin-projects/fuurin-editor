import React from "react";
import {useLiveDate} from "../../../../hook/useLiveDate";
import {TileRepository} from "../../../../repository/TileRepository";

export const TileList: React.FunctionComponent = () => {


  return (<>

    <Folder dir={"$"}/>

  </>)

};

type FolderProp = {
  dir: string
}

const Folder: React.FunctionComponent<FolderProp> = ({dir}) => {

  const tiles = useLiveDate(TileRepository.instance().getTileList(dir), []);

  const getFolder = (folderList: string[]) => {

    return folderList.map(text => {
      return <div>{text}</div>
    })

  };

  return (<>

    {getFolder(tiles!)}

  </>)

};
