import {FunctionComponent} from "react";

export interface IEditor {

  isEditor(path: string): boolean

  getDisplayText(path: string): string

  getEditorComponent(): FunctionComponent<EditorProp>

}

export type EditorProp = {
  path: string
}