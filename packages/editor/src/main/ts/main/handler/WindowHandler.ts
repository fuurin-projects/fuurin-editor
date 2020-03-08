import Channels from "../../common/Channels";
import CreateProjectWindow from "../window/CreateProjectWindow";
import IWindow from "../window/IWindow";
import {dialog, Event} from "electron";
import OpenDialogReturnValue = Electron.OpenDialogReturnValue;
import IpcMainEvent = Electron.IpcMainEvent;


export default class WindowHandler {

  private static EVENT_KEY = "windowhandler";

  private static eventFunction: Map<string, object> = new Map<string, object>();

  public static install(window: IWindow): (event: Event, channel: string, ...args: any[]) => void {

    const ipcMessage = (event: Event, channel: string, ...args: any[]): void => {

      console.log(channel);
      if (channel === Channels.SHOW_CREATE_PROJECT_WINDOW) {

        new CreateProjectWindow(window);

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