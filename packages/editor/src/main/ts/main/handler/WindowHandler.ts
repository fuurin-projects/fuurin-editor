import Channels from "../../common/Channels";
import IWindow from "../window/IWindow";
import {dialog, Event, IpcMain} from "electron";
import WindowManager from "../WindowManager";
import Project from "../Project";
import {IcpHandler} from "../dispatcher/LauncherDispatcher";
import OpenDialogReturnValue = Electron.OpenDialogReturnValue;
import IpcMainEvent = Electron.IpcMainEvent;


export default class WindowHandler {

  private static EVENT_KEY = "windowhandler";

  private static eventFunction: Map<string, object> = new Map<string, object>();

  public static install(window: IWindow): (event: Event, channel: string, ...args: any[]) => void {

    const ipcMessage = (event: Event, channel: string, ...args: any[]): void => {

      console.log(`WindowHandler:${channel}`);
      if (channel === Channels.SHOW_CREATE_PROJECT_WINDOW) {

        WindowManager.instance().showCreateProjectWindow(window);

      }

      if (channel === Channels.CLOSE_WINDOW) {
        window.close("cancel");
      }

      if (channel === Channels.SHOW_SELECT_DIR_DIALOG) {

        dialog.showOpenDialog(window.getRowBrowserWindow(), {
          defaultPath: args[0],
          properties: ['openDirectory']
        }).then((path: OpenDialogReturnValue) => {
          console.log(path);
          (event as IpcMainEvent).returnValue = path;
        });

      }

      /*
      if (channel === Channels.SHOW_PROJECT_WINDOW) {

        const name = args[0];
        const dir = args[1];

        const project = new Project(name, dir);

        //TODO: 管理してないディレクトリの場合の処理を入れても良いかも
        WindowManager.instance().openMainWindow(project);

        window.close("open_project");

        (event as IpcMainEvent).returnValue = "success";

      }*/

    };

    this.eventFunction.set(window.getWindowId(), ipcMessage);
    window.getRowBrowserWindow().webContents.addListener('ipc-message', ipcMessage);
    window.getRowBrowserWindow().webContents.addListener('ipc-message-sync', ipcMessage);
    return ipcMessage;

  }

  public static uninstall(window: IWindow) {

    const listener = this.eventFunction.get(window.getWindowId()) as (event: Event, channel: string, ...args: any[]) => void;
    window.getRowBrowserWindow().webContents.removeListener('ipc-message', listener);
    window.getRowBrowserWindow().webContents.removeListener('ipc-message-sync', listener);

  }

  private sss = [Channels.SHOW_PROJECT_WINDOW];

  public showProjectWindow: IcpHandler = {
    channel: Channels.SHOW_PROJECT_WINDOW,
    fun: (window: IWindow, event: IpcMainEvent, channel: string, ...args: any[]): void => {
      const name = args[0];
      const dir = args[1];

      const project = new Project(name, dir);

      //TODO: 管理してないディレクトリの場合の処理を入れても良いかも
      WindowManager.instance().openMainWindow(project);

      window.close("open_project");

      (event as IpcMainEvent).returnValue = "success";
    }
  };

  public static registryICP(ipcMain: IpcMain) {

    ipcMain.handle(Channels.SHOW_PROJECT_WINDOW, (event, ...args: any[]) => {
      const name = args[0];
      const dir = args[1];

      const project = new Project(name, dir);

      event.frameId;

      //TODO: 管理してないディレクトリの場合の処理を入れても良いかも
      WindowManager.instance().openMainWindow(project);

      WindowManager.instance().getWindow(event.frameId)?.close("open_project");

      return "success";

    })

  }

  // private static ipcMessage(event: Event, channel: string, ...args: any[]): void {
  //   console.log(channel);
  //   if (channel === Channels.SHOW_CREATE_PROJECT_WINDOW) {
  //
  //     const window = this as unknown as LauncherWindow;
  //     window.getRowBrowserWindow();
  //
  //     new CreateProjectWindow(window);
  //
  //   }
  //
  //   if (channel === Channels.CLOSE_WINDOW) {
  //
  //   }
  //
  // }

}