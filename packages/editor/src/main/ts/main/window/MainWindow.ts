import IWindow, {CloseType} from "./IWindow";
import {app, BrowserWindow, BrowserWindowConstructorOptions} from "electron";
import path from "path";
import Project from "../Project";
import {Icons} from "../Icons";
import Channels from "../../common/Channels";

export default class MainWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;
  private project: Project;

  /**
   * ゲームを起動しているかどうか
   */
  private isRunning: boolean = false;

  constructor(project: Project, option: BrowserWindowConstructorOptions = {}) {

    this.project = project;

    const title = `${project.name} [${project.dir}] - FuurinEditor`;

    const opt = Object.assign<BrowserWindowConstructorOptions, BrowserWindowConstructorOptions>(option, {
      title: title,
      modal: true,
      width: 1080,
      height: 680,
      backgroundColor: "#f5f5f5",
      icon: Icons.getAppIcon(),
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

  getId(): number {
    return this.getRowBrowserWindow().id;
  }

  getParent(): IWindow | undefined {
    return undefined;
  }

  public getProject(): Project {
    return this.project;
  }

  public isRun(): boolean {
    return this.isRunning;
  }

  public closeGame(): void {
    console.log("stop game");
    this.isRunning = false;
    this.getRowBrowserWindow().webContents.send(Channels.IS_RUN, this.isRun());
  }

  public runGame(): void {
    this.isRunning = true;
    this.getRowBrowserWindow().webContents.send(Channels.IS_RUN, this.isRun());
  }

}