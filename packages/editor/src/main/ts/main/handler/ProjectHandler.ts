import {BrowserWindow, IpcMain, IpcMainInvokeEvent} from "electron";
import Channels from "../../common/Channels";
import Configuration from "../Configuration";
import WindowManager from "../WindowManager";
import ProjectManager from "../ProjectManager";
import IWindow from "../window/IWindow";

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

    // プロジェクトの新規作成
    ipcMain.handle(Channels.CREATE_PROJECT, async (event, ...args: any[]) => {

      const project = await ProjectManager.instance().createProject(args[0], args[1]);

      WindowManager.instance().openMainWindow(project);

      const parentWindow = this.getWindow(event)?.getParent();
      if (parentWindow) {
        parentWindow.close("open_project");
      }

      return "success";

    });

  }

  /**
   * イベントを発行したWindowを返す
   * @param event
   */
  public static getWindow(event: IpcMainInvokeEvent): IWindow | undefined {

    const browserWindow = BrowserWindow.fromWebContents(event.sender);
    if (browserWindow) {
      return WindowManager.instance().getWindow(browserWindow.id);
    }

  }

}