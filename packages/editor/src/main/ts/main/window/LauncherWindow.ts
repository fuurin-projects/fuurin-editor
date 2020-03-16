import {app, BrowserWindow, BrowserWindowConstructorOptions, Event, IpcMainEvent} from 'electron';
import path from 'path';
import WindowHandler from "../handler/WindowHandler";
import IWindow, {CloseType} from "./IWindow";
import LauncherDispatcher from "../dispatcher/LauncherDispatcher";

export default class LauncherWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;
  private launcherDispatcher: LauncherDispatcher;

  constructor(option: BrowserWindowConstructorOptions = {}) {

    const opt = Object.assign<BrowserWindowConstructorOptions, BrowserWindowConstructorOptions>(option, {
      width: 680,
      height: 510,
      resizable: false,
      backgroundColor: "#f5f5f5",
      icon: path.resolve(app.getAppPath(), './resources/fuurin_icon_16.png'),
      webPreferences: {
        nodeIntegration: false,
        preload: path.resolve(app.getAppPath(), './js/preload.js'),
      }
    });
    this.rowBrowserWindow = new BrowserWindow(opt);
    this.getRowBrowserWindow().setMenu(null);

    this.launcherDispatcher = new LauncherDispatcher();

    WindowHandler.install(this);

    const ipcMessage = (event: Event, channel: string, ...args: any[]): void => {
      this.launcherDispatcher.dispatch(event as IpcMainEvent, channel, ...args);
    };
    this.getRowBrowserWindow().webContents.on('ipc-message', ipcMessage);

    const ipcMessageSync = (event: Event, channel: string, ...args: any[]): void => {
      this.launcherDispatcher.dispatchSync(event as IpcMainEvent, channel, ...args);
    };
    this.getRowBrowserWindow().webContents.on('ipc-message-sync', ipcMessageSync);

  }

  public getWindowId(): string {
    return "LauncherWindow:" + this.getRowBrowserWindow().id;
  }

  public getRowBrowserWindow(): BrowserWindow {

    if (this.rowBrowserWindow === null) {
      throw new Error("LauncherWindow has been deleted");
    }

    return this.rowBrowserWindow;
  }


  public destroy() {

    WindowHandler.uninstall(this);

    this.rowBrowserWindow = null;
  }

  public close(type: CloseType): void {

    this.getRowBrowserWindow().close();

  }

}