import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../stores/RootStore";
import {EmptyEditor} from "../editor_list/empty_editor/EmptyEditor";
import {EditorManager} from "../../../editor/EditorManager";

export const CurrentEditor: React.FunctionComponent = () => {

  const currentEditor = useSelector((state: RootState) => state.editor.currentEditor);
  const editorTabList = useSelector((state: RootState) => state.editor.editorList);

  const getEditor = () => {

    if (currentEditor < 0) {
      return <EmptyEditor/>
    }

    const editorPath = editorTabList[currentEditor].path;

    const editor = EditorManager.instance().getEditor(editorPath);
    const EditorComponent = editor?.getEditorComponent();

    console.log(editorPath);

    if (EditorComponent) {
      return (
        <>
          <EditorComponent path={editorPath}/>
        </>
      );
    } else {
      return <EmptyEditor/>
    }


  };

  return (<>
    {getEditor()}
  </>)

};