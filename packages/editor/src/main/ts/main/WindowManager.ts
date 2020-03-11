import Project from "./Project";
import MainWindow from "./window/MainWindow";


export default class WindowManager {

  private mainWindow: MainWindow | undefined;

  private static instance_: WindowManager;

  private constructor() {
  }

  public static instance(): WindowManager {

    if (!this.instance_) {
      this.instance_ = new WindowManager();
    }

    return this.instance_;
  }

  public openMainWindow(project: Project) {

    this.mainWindow = new MainWindow(project);

  }

}