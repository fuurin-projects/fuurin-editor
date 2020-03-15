import Project from "./Project";
import MainWindow from "./window/MainWindow";
import IWindow from "./window/IWindow";
import {app, BrowserWindow} from "electron";
import LauncherWindow from "./window/LauncherWindow";
import CreateProjectWindow from "./window/CreateProjectWindow";

const path = require('path');


export default class WindowManager {

  private windowList: Map<string, IWindow>;

  private mainWindow: MainWindow | undefined;

  private static instance_: WindowManager;

  private constructor() {

    this.windowList = new Map<string, IWindow>();

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
    this.windowList.set(launcherWindow.getWindowId(), launcherWindow);

    let browserWindow: BrowserWindow = launcherWindow.getRowBrowserWindow();

    browserWindow.webContents.openDevTools();

    // and load the launcher.html of the app.
    await browserWindow.loadFile(path.resolve(app.getAppPath(), "./html/launcher.html"));

  }

  public showCreateProjectWindow(window: IWindow) {

    const createProjectWindow = new CreateProjectWindow(window);
    this.windowList.set(createProjectWindow.getWindowId(), createProjectWindow);

  }

  public openMainWindow(project: Project) {

    this.mainWindow = new MainWindow(project);

  }

  public getWindows(): Map<string, IWindow> {
    return this.windowList;
  }

  public sendAll(chanel: string, ...args: any[]) {

    for (let [key, value] of this.getWindows()) {

      value.getRowBrowserWindow().webContents.send(chanel, ...args);

    }

  }

}