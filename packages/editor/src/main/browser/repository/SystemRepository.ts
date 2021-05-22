import Channels from "../../ts/common/Channels";

export default class SystemRepository {

  public static async getVersion(): Promise<string> {

    return window.electronBridge.ipcRenderer.invoke(Channels.VERSION);

  }

  public static async getDesktopDir(): Promise<string> {

    return window.electronBridge.ipcRenderer.invoke(Channels.DESKTOP_DIR);

  }

}