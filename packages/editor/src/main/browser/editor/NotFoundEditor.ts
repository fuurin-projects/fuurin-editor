import {EditorProp, IEditor} from "./IEditor";
import React from "react";
import {NotFoundEditorComponent} from "../components/editor/editors/not_found_editor_component/NotFoundEditorComponent";

export class NotFoundEditor implements IEditor {

  isEditor(path: string): boolean {
    return true;
  }

  getDisplayText(path: string): string {
    return path;
  }

  getEditorComponent(): React.FunctionComponent<EditorProp> {
    return NotFoundEditorComponent;
  }


}