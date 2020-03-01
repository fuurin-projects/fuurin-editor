import Channels from "../../common/Channels";

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

  public showCreateProjectWindow(): void {

    window.ipcRenderer.send(Channels.SHOW_CREATE_PROJECT_WINDOW, "create");

  }

  public closeCurrentWindow(): void {
    window.ipcRenderer.send(Channels.CLOSE_WINDOW, "close");
  }

}