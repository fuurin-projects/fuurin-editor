import Channels from "../../ts/common/Channels";
import {Project} from "../../ts/common/Preference";
import {OpenDialogReturnValue} from "electron";

export default class WindowRepository {

  private static instance_: WindowRepository;

  private constructor() {
  }

  public static instance(): WindowRepository {

    if (!this.instance_) {
      this.instance_ = new WindowRepository();
    }

    return this.instance_;
  }

  public showCreateProjectWindow(): Promise<void> {

    return window.electronBridge.ipcRenderer.invoke(Channels.SHOW_CREATE_PROJECT_WINDOW, "create");

  }

  public async showMainWindow(project: Project): Promise<void> {

    return window.electronBridge.ipcRenderer.invoke(Channels.SHOW_PROJECT_WINDOW, project.name, project.dir);

  }

  public closeCurrentWindow(): Promise<void> {
    return window.electronBridge.ipcRenderer.invoke(Channels.CLOSE_WINDOW, "close");
  }

  public showSelectDirDialog(defaultDir: string): Promise<OpenDialogReturnValue> {

    return window.electronBridge.ipcRenderer.invoke(Channels.SHOW_SELECT_DIR_DIALOG, defaultDir);

  }

  public showSelectFileDialog(defaultDir: string, extensions?: string[]): Promise<OpenDialogReturnValue> {

    return window.electronBridge.ipcRenderer.invoke(Channels.SHOW_SELECT_FILE_DIALOG, defaultDir, extensions);

  }

}