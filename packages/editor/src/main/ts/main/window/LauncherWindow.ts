import {app, BrowserWindow, BrowserWindowConstructorOptions} from 'electron';
import path from 'path';
import IWindow, {CloseType} from "./IWindow";

export default class LauncherWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;

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

  }


  getId(): number {
    return this.getRowBrowserWindow().id;
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

    this.rowBrowserWindow = null;

  }

  public close(type: CloseType): void {

    this.getRowBrowserWindow().close();

  }

  getParent(): IWindow | undefined {
    return undefined;
  }


}