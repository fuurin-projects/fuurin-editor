import {app, BrowserWindow, BrowserWindowConstructorOptions, Event} from "electron";
import path from "path";
import IWindow, {CloseType} from "./IWindow";
import WindowHandler from "../handler/WindowHandler";

export default class CreateProjectWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;
  private parent: IWindow;

  constructor(parent: IWindow, option: BrowserWindowConstructorOptions = {}) {

    this.parent = parent;

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

  public getId(): number {
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
    WindowHandler.uninstall(this);

    this.rowBrowserWindow = null;
  }

  public close(type: CloseType): void {

    this.getRowBrowserWindow().close();

  }

  getParent(): IWindow {
    return this.parent;
  }

}