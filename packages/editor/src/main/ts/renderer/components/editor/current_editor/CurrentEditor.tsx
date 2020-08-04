import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";

export const CurrentEditor: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorList = useSelector((state: RootState) => state.editor.editorList);

  return (<>
    {currentEditor}:{editorList.length > 0 && editorList[currentEditor].path}
  </>)

};