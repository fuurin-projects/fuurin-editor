import IWindow from "./IWindow";
import {app, BrowserWindow, BrowserWindowConstructorOptions} from "electron";
import Project from "../Project";
import {Icons} from "../Icons";
import path from "path";
import express, {Express} from "express";
import * as http from "http";

export class DevGameWindow implements IWindow {

  private rowBrowserWindow: BrowserWindow | null;
  private project: Project;
  private serverApp: Express | undefined;
  private server: http.Server | undefined;

  constructor(project: Project, option: BrowserWindowConstructorOptions = {}) {

    this.createDevServer(project);

    this.project = project;

    const title = `${project.name} [Dev]`;

    const opt = Object.assign<BrowserWindowConstructorOptions, BrowserWindowConstructorOptions>(option, {
      title: title,
      modal: true,
      width: 800,
      height: 600,
      backgroundColor: "#f5f5f5",
      icon: Icons.getAppIcon(),
      webPreferences: {
        nodeIntegration: false,
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