import {ipcMain} from "electron";

export default class SystemHandler {

  public static init() {

    ipcMain.on('version', (event, arg) => {
      console.log(arg);
      event.returnValue = process.env.npm_package_version;
    });

  }

}