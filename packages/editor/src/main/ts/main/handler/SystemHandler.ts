import {app, IpcMain} from "electron";
import Channels from "../../common/Channels";

export default class SystemHandler {

  public static init() {

  }

  public static registryICP(ipcMain: IpcMain) {

    //ディスクトップの位置を返す
    ipcMain.handle(Channels.DESKTOP_DIR, (event, ...args: any[]) => {

      return app.getPath("desktop");

    });

  }

}