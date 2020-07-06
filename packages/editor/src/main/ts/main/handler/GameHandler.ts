import {IpcMain} from "electron";
import Channels from "../../common/Channels";
import {WindowManager} from "../WindowManager";
import MainWindow from "../window/MainWindow";

/**
 * ゲームのテストプレイに関する処理をまとめている
 */
export class GameHandler {
  public static registryICP(ipcMain: IpcMain) {

    //ローカルで実行
    ipcMain.handle(Channels.RUN_DEV, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.RUN_DEV}`);
      const window = WindowManager.getWindow(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();

        //await DevBuilder.buildJS(project.dir);
        WindowManager.instance().openDevGameWindow(project);

        return "";

      }

      return "";

    });

  }
}