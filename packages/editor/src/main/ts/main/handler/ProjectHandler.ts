import {ipcMain} from "electron";
import Channels from "../../common/Channels";
import Configuration from "../Configuration";

export default class ProjectHandler {

  public static init() {

    ipcMain.on(Channels.PROJECT_LIST, (event, arg) => {
      console.log(arg);
      event.returnValue = Configuration.instance().getProjectList();
    });

    ipcMain.on(Channels.DELETE_PROJECT, (event, ...args: any[]) => {
      console.log("Channels.DELETE_PROJECT");
      console.log(args);

      Configuration.instance().deleteProject(args[0], args[1]);

      event.returnValue = Configuration.instance().getProjectList();
    });

  }

}