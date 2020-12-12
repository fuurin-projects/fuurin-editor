import Channels from "../../common/Channels";

export default class SystemRepository {

  public static async getVersion(): Promise<string> {

    return window.ipcRenderer.invoke(Channels.VERSION);

  }

  public static async getDesktopDir(): Promise<string> {

    return window.ipcRenderer.invoke(Channels.DESKTOP_DIR);

  }

}