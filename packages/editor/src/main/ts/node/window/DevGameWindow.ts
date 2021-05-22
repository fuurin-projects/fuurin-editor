import IWindow from "./IWindow";
import {app, BrowserWindow, BrowserWindowConstructorOptions} from "electron";
import Project from "../Project";
import {Icons} from "../Icons";
import path from "path";
import express, {Express} from "express";
import * as http from "http";
import {WindowManager} from "../WindowManager";
import MainWindow from "./MainWindow";

export class DevGameWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;
  private project: Project;
  private serverApp: Express | undefined;
  private server: http.Server | undefined;
  private parent: IWindow | undefined;

  constructor(project: Project, parent: MainWindow, option: BrowserWindowConstructorOptions = {}) {

    this.createDevServer(project);

    parent.runGame(this);

    this.project = project;
    this.parent = parent;

    const title = `${project.name} [Dev]`;

    const opt = Object.assign<BrowserWindowConstructorOptions, BrowserWindowConstructorOptions>(option, {
      parent: parent.getRowBrowserWindow(),
      title: title,
      width: 800,
      height: 600,
      backgroundColor: "#f5f5f5",
      icon: Icons.getAppIcon(),
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        webviewTag: true
        //preload: path.resolve(app.getAppPath(), './js/preload.js'),
      }
    });

    console.log("DevGameWindow");
    this.rowBrowserWindow = new BrowserWindow(opt);

    this.rowBrowserWindow.loadFile(path.resolve(app.getAppPath(), "./html/dev_game.html"));

    this.rowBrowserWindow.webContents.toggleDevTools();

    this.rowBrowserWindow.on("closed", () => {
      this.destroy();
    });

    this.getRowBrowserWindow().setMenu(null);

  }

  private createDevServer(project: Project) {

    this.serverApp = express();
    this.serverApp.use(express.static(path.resolve(project.dir, "./build/dev")));
    this.server = this.serverApp.listen(3000, function () {
    });

  }

  close(type: "open_project" | "cancel" | undefined): void {
  }

  destroy(): void {
    console.log("close server.");
    this.server?.close();

    //MainWindow側にゲームの終了を通知
    const mainWindow = WindowManager.getWindowFromWebContents(this.parent!.getRowBrowserWindow().webContents);
    if (mainWindow instanceof MainWindow) {
      mainWindow.closedGame();
    }
    this.parent = undefined;
  }

  getId(): number {
    return this.getRowBrowserWindow().id;
  }

  getParent(): IWindow | undefined {
    return undefined;
  }

  getRowBrowserWindow(): Electron.BrowserWindow {
    if (this.rowBrowserWindow === null) {
      throw new Error("DevGameWindow has been deleted");
    }

    return this.rowBrowserWindow;
  }

  getWindowId(): string {
    return "DevGameWindow:" + this.getRowBrowserWindow().id;
  }

}