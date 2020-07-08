import Project from "./Project";
import MainWindow from "./window/MainWindow";
import IWindow from "./window/IWindow";
import {app, BrowserWindow, IpcMainInvokeEvent, WebContents} from "electron";
import LauncherWindow from "./window/LauncherWindow";
import CreateProjectWindow from "./window/CreateProjectWindow";
import {DevGameWindow} from "./window/DevGameWindow";

const path = require('path');


export class WindowManager {

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
    this.windowList.set(this.mainWindow.getId(), this.mainWindow);


  }

  public openDevGameWindow(project: Project, parent: MainWindow) {
    const devGameWindow = new DevGameWindow(project, parent);
    this.windowList.set(devGameWindow.getId(), devGameWindow);
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

  /**
   * イベントを発行したWindowを返す
   * @param event
   */
  public static getWindowFromEvent(event: IpcMainInvokeEvent): IWindow | undefined {

    const browserWindow = BrowserWindow.fromWebContents(event.sender);
    if (browserWindow) {
      return WindowManager.instance().getWindow(browserWindow.id);
    }

  }

  /**
   * WebContentsからWindowを返す
   * @param webContents
   */
  public static getWindowFromWebContents(webContents: WebContents): IWindow | undefined {

    const browserWindow = BrowserWindow.fromWebContents(webContents);
    if (browserWindow) {
      return WindowManager.instance().getWindow(browserWindow.id);
    }

  }

}