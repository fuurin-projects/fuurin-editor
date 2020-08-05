import {FunctionComponent} from "react";

export interface IEditor {

  isEditor(path: string): boolean

  getEditorComponent(): FunctionComponent<EditorProp>

}

export type EditorProp = {
  path: string
}