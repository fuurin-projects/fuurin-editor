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
      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        if (window.isRun()) {
          //すでに起動済みなら何もしない
          return "";
        }

        const project = window.getProject();

        //await DevBuilder.buildJS(project.dir);
        WindowManager.instance().openDevGameWindow(project, window);


        return "";

      }

      return "";

    });

    //ローカルで実行中のゲームを終了する
    ipcMain.handle(Channels.STOP_DEV, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.STOP_DEV}`);
      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        if (!window.isRun()) {
          //起動してない場合は何もしない
          return "";
        }

        await window.stopGame();

        return "";

      }

      return "";

    });

    //ゲームを実行中かどうか
    ipcMain.handle(Channels.IS_RUN, async (event, ...args: any[]) => {

      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        window?.getRowBrowserWindow().webContents.send(Channels.IS_RUN, window.isRun());

      }
    });

  }
}