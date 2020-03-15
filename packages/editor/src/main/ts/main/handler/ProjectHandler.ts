import {ipcMain} from "electron";
import Channels from "../../common/Channels";
import Configuration from "../Configuration";
import WindowManager from "../WindowManager";

export default class ProjectHandler {

  public static init() {

    ipcMain.on(Channels.PROJECT_LIST, (event, arg) => {

      console.log(`ProjectHandler: ${arg}`);

      //TOOD: すべてのウィンドウに対して発行
      WindowManager.instance().sendAll(Channels.PROJECT_LIST, Configuration.instance().getProjectList());

      //event.returnValue = Configuration.instance().getProjectList();
    });

    ipcMain.on(Channels.DELETE_PROJECT, (event, ...args: any[]) => {
      console.log("Channels.DELETE_PROJECT");
      console.log(args);

      Configuration.instance().deleteProject(args[0], args[1]);

      WindowManager.instance().sendAll(Channels.PROJECT_LIST, Configuration.instance().getProjectList());

      event.returnValue = Configuration.instance().getProjectList();
    });

  }

}