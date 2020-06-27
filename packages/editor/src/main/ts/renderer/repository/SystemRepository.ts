import Channels from "../../common/Channels";

export default class SystemRepository {

  public static async getVersion(): Promise<string> {

    return window.ipcRenderer.invoke(Channels.VERSION);
    /*
    return new Promise((resolve, reject) => {

      const version = window.ipcRenderer.sendSync(Channels.VERSION);
      resolve(version);

    })*/

  }

  public static async getDesktopDir(): Promise<string> {

    return window.ipcRenderer.invoke(Channels.DESKTOP_DIR);
    /*
    return new Promise((resolve, reject) => {

      const dir = window.ipcRenderer.sendSync("desktop_dir");
      resolve(dir);

    })*/

  }

}