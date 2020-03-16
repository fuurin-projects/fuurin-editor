import {app, ipcMain} from "electron";
import Channels from "../../common/Channels";

export default class SystemHandler {

  public static init() {

    ipcMain.on(Channels.DESKTOP_DIR, (event, arg) => {
      console.log(arg);
      event.returnValue = app.getPath("home");
    });

  }

}