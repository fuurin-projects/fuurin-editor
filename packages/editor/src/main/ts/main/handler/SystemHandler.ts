import {app, IpcMain} from "electron";
import Channels from "../../common/Channels";

export default class SystemHandler {

  public static init() {

  }

  public static registryICP(ipcMain: IpcMain) {

    //アプリのバージョン番号を取得
    ipcMain.handle(Channels.VERSION, (event, ...args: any[]) => {

      return process.env.npm_package_version;

    });

    //ディスクトップの位置を返す
    ipcMain.handle(Channels.DESKTOP_DIR, (event, ...args: any[]) => {

      return app.getPath("desktop");

    });

  }

}