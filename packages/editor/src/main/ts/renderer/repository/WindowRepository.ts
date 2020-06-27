import Channels from "../../common/Channels";
import {Project} from "../../common/Preference";
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

    return window.ipcRenderer.invoke(Channels.SHOW_CREATE_PROJECT_WINDOW, "create");

  }

  public async showMainWindow(project: Project): Promise<void> {

    return window.ipcRenderer.invoke(Channels.SHOW_PROJECT_WINDOW, project.name, project.dir);

  }

  public closeCurrentWindow(): void {
    window.ipcRenderer.send(Channels.CLOSE_WINDOW, "close");
  }

  public showSelectDirDialog(defaultDir: string): Promise<OpenDialogReturnValue> {

    return window.ipcRenderer.invoke(Channels.SHOW_SELECT_DIR_DIALOG, defaultDir);

  }

}