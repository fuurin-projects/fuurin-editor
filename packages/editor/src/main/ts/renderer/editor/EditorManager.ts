import {IEditor} from "./IEditor";
import {TileEditor} from "./TileEditor";

export class EditorManager {

  private static instance_: EditorManager;

  private editorList: Array<IEditor>;

  private constructor() {
    this.editorList = [];

    this.addDefaultEditor();
  }

  private addDefaultEditor() {
    this.editorList.push(new TileEditor())
  }

  public static instance(): EditorManager {

    if (!this.instance_) {
      this.instance_ = new EditorManager();
    }

    return this.instance_;
  }

  public addEditor(editor: IEditor) {
    this.editorList.push(editor);
  }

  public getEditor(path: string): IEditor | null {

    for (let editor of this.editorList) {

      if (editor.isEditor(path)) {
        return editor;
      }

    }

    return null;

  }

}