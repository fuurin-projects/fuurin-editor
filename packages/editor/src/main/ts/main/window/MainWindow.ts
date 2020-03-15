import IWindow, {CloseType} from "./IWindow";
import {app, BrowserWindow, BrowserWindowConstructorOptions} from "electron";
import path from "path";
import Project from "../Project";

export default class MainWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;

  constructor(project: Project, option: BrowserWindowConstructorOptions = {}) {

    const title = `${project.name} [${project.dir}] - FuurinEditor`;

    const opt = Object.assign<BrowserWindowConstructorOptions, BrowserWindowConstructorOptions>(option, {
      title: title,
      modal: true,
      width: 880,
      height: 400,
      backgroundColor: "#f5f5f5",
      icon: path.resolve(app.getAppPath(), './resources/fuurin_icon_16.png'),
      webPreferences: {
        nodeIntegration: false,
        preload: path.resolve(app.getAppPath(), './js/preload.js'),
      }
    });

    console.log("MainWindow");
    this.rowBrowserWindow = new BrowserWindow(opt);

    this.rowBrowserWindow.loadFile(path.resolve(app.getAppPath(), "./html/main.html"));

    this.rowBrowserWindow.webContents.toggleDevTools();

  }

  close(type: CloseType): void {
  }

  destroy(): void {
  }

  getRowBrowserWindow(): Electron.BrowserWindow {

    if (this.rowBrowserWindow === null) {
      throw new Error("MainWindow has been deleted");
    }

    return this.rowBrowserWindow;
  }

  getWindowId(): string {
    return "MainWindow:" + this.getRowBrowserWindow().id;
  }

}