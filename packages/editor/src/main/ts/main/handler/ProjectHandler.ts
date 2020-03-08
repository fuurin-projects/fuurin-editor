import {ipcMain} from "electron";
import Channels from "../../common/Channels";
import Configuration from "../Configuration";

export default class ProjectHandler {

  public static init() {

    ipcMain.on(Channels.PROJECT_LIST, (event, arg) => {
      console.log(arg);
      event.returnValue = Configuration.instance().getProjectList();
    });

  }

}