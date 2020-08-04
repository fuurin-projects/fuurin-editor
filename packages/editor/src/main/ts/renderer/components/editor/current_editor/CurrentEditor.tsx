import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";
import {EmptyEditor} from "../editor_list/empty_editor/EmptyEditor";

export const CurrentEditor: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorList = useSelector((state: RootState) => state.editor.editorList);

  const getEditor = () => {

    if (currentEditor < 0) {
      return <EmptyEditor/>
    }

    return (
      <>
        {currentEditor}:{currentEditor >= 0 && editorList[currentEditor].path}
      </>
    );

  };

  return (<>
    {getEditor()}
  </>)

};