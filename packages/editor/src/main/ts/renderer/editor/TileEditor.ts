import {EditorProp, IEditor} from "./IEditor";
import React from "react";
import {TileEditorComponent} from "../components/editor/tile_editor/TileEditorComponent";

export class TileEditor implements IEditor {


  isEditor(path: string): boolean {
    return path.startsWith("tile@") && path.endsWith(".json");
  }

  getDisplayText(path: string): string {
    return path.replace("tile@", "").replace(".json", "");
  }

  getEditorComponent(): React.FunctionComponent<EditorProp> {
    return TileEditorComponent;
  }


}