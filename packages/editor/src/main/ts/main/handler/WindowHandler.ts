import Channels from "../../common/Channels";
import IWindow from "../window/IWindow";
import {BrowserWindow, dialog, IpcMain} from "electron";
import WindowManager from "../WindowManager";
import Project from "../Project";
import IpcMainInvokeEvent = Electron.IpcMainInvokeEvent;


export default class WindowHandler {

  public static registryICP(ipcMain: IpcMain) {

    // プロジェクト作成ウィンドウを表示する
    ipcMain.handle(Channels.SHOW_CREATE_PROJECT_WINDOW, (event, ...args: any[]) => {
      const window = this.getWindow(event);
      if (window) {
        WindowManager.instance().showCreateProjectWindow(window);
      }

    });

    // プロジェクトウィンドウを表示する
    ipcMain.handle(Channels.SHOW_PROJECT_WINDOW, (event, ...args: any[]) => {
      const name = args[0];
      const dir = args[1];

      const project = new Project(name, dir);

      //TODO: 管理してないディレクトリの場合の処理を入れても良いかも
      WindowManager.instance().openMainWindow(project);

      this.getWindow(event)?.close("open_project");

      return "success";

    });

    // ディレクトリ選択ダイアログを表示する
    ipcMain.handle(Channels.SHOW_SELECT_DIR_DIALOG, async (event, ...args: any[]) => {

      const window = this.getWindow(event);
      if (window) {

        const path = await dialog.showOpenDialog(window.getRowBrowserWindow(), {
          defaultPath: args[0],
          properties: ['openDirectory']
        });

        console.log(path);
        return path;
      }

    });

    // ウィンドウをクローズする
    ipcMain.handle(Channels.CLOSE_WINDOW, (event, ...args: any[]) => {
      const window = this.getWindow(event);
      if (window) {
        window.close("cancel");
      }
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