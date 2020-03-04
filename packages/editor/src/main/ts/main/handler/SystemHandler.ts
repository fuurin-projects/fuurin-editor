import {app, ipcMain} from "electron";
import Channels from "../../common/Channels";

export default class SystemHandler {

  public static init() {

    ipcMain.on('version', (event, arg) => {
      console.log(arg);
      event.returnValue = process.env.npm_package_version;
    });

    ipcMain.on(Channels.DESKTOP_DIR, (event, arg) => {
      console.log(arg);
      event.returnValue = app.getPath("home");
    });

  }

}