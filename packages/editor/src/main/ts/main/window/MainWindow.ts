import IWindow, {CloseType} from "./IWindow";
import {app, BrowserWindow, BrowserWindowConstructorOptions} from "electron";
import path from "path";
import Project from "../Project";
import {Icons} from "../Icons";
import Channels from "../../common/Channels";
import {Sleep} from "../../common/Sleep";

export default class MainWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;
  private project: Project;
  private gameWindow: IWindow | undefined;

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
    return this.gameWindow !== undefined;
  }

  /**
   * GameWindowに停止命令を出す
   */
  public async stopGame(): Promise<void> {

    if (this.gameWindow != undefined) {

      //サーバーが停止するのを待つ
      const isStop = new Promise<void>((resolve, reject) => {
        this.gameWindow!.getRowBrowserWindow().once("closed", () => {
          resolve();
        });
      });
      this.gameWindow.getRowBrowserWindow().close();
      await Sleep.sleep(400);
      await isStop;
    }

  }

  public closedGame(): void {
    console.log("stop game");
    this.gameWindow = undefined;
    this.getRowBrowserWindow().webContents.send(Channels.IS_RUN, this.isRun());
  }

  public runGame(gameWindow: IWindow): void {
    this.gameWindow = gameWindow;
    this.getRowBrowserWindow().webContents.send(Channels.IS_RUN, this.isRun());
  }

}