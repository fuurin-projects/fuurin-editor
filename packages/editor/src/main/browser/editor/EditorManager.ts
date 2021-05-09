import {IEditor} from "./IEditor";
import {TileEditor} from "./TileEditor";
import {NotFoundEditor} from "./NotFoundEditor";

export class EditorManager {

  private static instance_: EditorManager;

  private editorList: Array<IEditor>;
  private notFoundEditor: IEditor;

  private constructor() {
    this.editorList = [];

    this.notFoundEditor = new NotFoundEditor();

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

  public getEditor(path: string): IEditor {

    for (let editor of this.editorList) {

      if (editor.isEditor(path)) {
        return editor;
      }

    }

    return this.notFoundEditor;

  }

}