import {IpcMain} from "electron";
import Channels from "../../common/Channels";
import {WindowManager} from "../WindowManager";
import MainWindow from "../window/MainWindow";
import {DevBuilder} from "../builder/DevBuilder";

/**
 * ゲームを実行可能な形式に出力する処理をまとめているHandler
 */
export class BuilderHandler {

  public static registryICP(ipcMain: IpcMain) {

    //ローカルで実行するためのhtmlやjsファイルを生成
    ipcMain.handle(Channels.BUILD_DEV, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.BUILD_DEV}`);
      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();

        await DevBuilder.buildJS(project.dir);
        await DevBuilder.buildDevHtml(project.dir);

      }

    });

  }

}