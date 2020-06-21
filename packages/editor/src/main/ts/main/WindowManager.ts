import Project from "./Project";
import MainWindow from "./window/MainWindow";
import IWindow from "./window/IWindow";
import {app, BrowserWindow} from "electron";
import LauncherWindow from "./window/LauncherWindow";
import CreateProjectWindow from "./window/CreateProjectWindow";

const path = require('path');


export default class WindowManager {

  private windowList: Map<number, IWindow>;

  private mainWindow: MainWindow | undefined;

  private static instance_: WindowManager;

  private constructor() {

    this.windowList = new Map<number, IWindow>();

  }

  public static instance(): WindowManager {

    if (!this.instance_) {
      this.instance_ = new WindowManager();
    }

    return this.instance_;
  }

  public async showLauncher() {

    console.log("create LauncherWindow!");
    const launcherWindow = new LauncherWindow();
    this.windowList.set(launcherWindow.getId(), launcherWindow);

    let browserWindow: BrowserWindow = launcherWindow.getRowBrowserWindow();

    browserWindow.webContents.openDevTools();

    // and load the launcher.html of the app.
    await browserWindow.loadFile(path.resolve(app.getAppPath(), "./html/launcher.html"));

  }

  public showCreateProjectWindow(window: IWindow) {

    const createProjectWindow = new CreateProjectWindow(window);
    this.windowList.set(createProjectWindow.getId(), createProjectWindow);

  }

  public openMainWindow(project: Project) {

    this.mainWindow = new MainWindow(project);

  }

  public getWindows(): Map<number, IWindow> {
    return this.windowList;
  }

  public getWindow(id: number): IWindow | undefined {
    return this.getWindows().get(id);
  }

  public sendAll(chanel: string, ...args: any[]) {

    for (let [key, value] of this.getWindows()) {

      value.getRowBrowserWindow().webContents.send(chanel, ...args);

    }

  }

}