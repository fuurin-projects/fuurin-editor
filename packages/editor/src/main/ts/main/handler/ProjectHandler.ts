import {IpcMain} from "electron";
import Channels from "../../common/Channels";
import Configuration from "../Configuration";
import WindowManager from "../WindowManager";

export default class ProjectHandler {

  public static init() {

  }

  public static registryICP(ipcMain: IpcMain) {

    // プロジェクト一覧の取得
    ipcMain.handle(Channels.PROJECT_LIST, (event, ...args: any[]) => {

      // すべてのウィンドウに対して発行
      WindowManager.instance().sendAll(Channels.PROJECT_LIST, Configuration.instance().getProjectList());

    });

    // プロジェクトの削除
    ipcMain.handle(Channels.DELETE_PROJECT, async (event, ...args: any[]) => {
      console.log("Channels.DELETE_PROJECT");
      console.log(args);

      await Configuration.instance().deleteProject(args[0], args[1]);

      WindowManager.instance().sendAll(Channels.PROJECT_LIST, Configuration.instance().getProjectList());

      return Configuration.instance().getProjectList();

    });

  }

}