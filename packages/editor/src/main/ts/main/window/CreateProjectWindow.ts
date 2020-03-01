import {app, BrowserWindow, BrowserWindowConstructorOptions} from "electron";
import path from "path";
import IWindow from "./IWindow";
import WindowHandler from "../handler/WindowHandler";

export default class CreateProjectWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;

  constructor(parent: IWindow, option: BrowserWindowConstructorOptions = {}) {

    const opt = Object.assign<BrowserWindowConstructorOptions, BrowserWindowConstructorOptions>(option, {
      parent: parent.getRowBrowserWindow(),
      modal: true,
      width: 680,
      height: 200,
      backgroundColor: "#f5f5f5",
      icon: path.resolve(app.getAppPath(), './resources/fuurin_icon_16.png'),
      webPreferences: {
        nodeIntegration: false,
        preload: path.resolve(app.getAppPath(), './js/preload.js'),
      }
    });

    console.log("ss");
    this.rowBrowserWindow = new BrowserWindow(opt);

    this.rowBrowserWindow.loadFile(path.resolve(app.getAppPath(), "./html/create_project.html"));

    this.rowBrowserWindow.webContents.toggleDevTools();

    this.rowBrowserWindow.setMenu(null);

    WindowHandler.install(this);

    this.getRowBrowserWindow().once("close", (event: Event): void => {
      WindowHandler.uninstall(this);
    });

    // this.rowBrowserWindow.once('closed', (event: Event, window: BrowserWindow) => {
    //   console.log("blur");
    // });
    //this.rowBrowserWindow.flashFrame(true);
    //this.rowBrowserWindow.flashFrame(true);
    //this.rowBrowserWindow.flashFrame(true);


    //this.rowBrowserWindow.once('focus', () => this.rowBrowserWindow?.flashFrame(false));
    //this.rowBrowserWindow.flashFrame(true)

  }

  public getWindowId(): string {
    return "LauncherWindow";
  }

  public getRowBrowserWindow(): BrowserWindow {

    if (this.rowBrowserWindow === null) {
      throw new Error("LauncherWindow has been deleted");
    }

    return this.rowBrowserWindow;
  }

}