import {IpcMain} from "electron";
import Channels from "../../common/Channels";

/**
 * Tile関係の処理をまとめているHandler
 */
export class TileHandler {

  public static registryICP(ipcMain: IpcMain) {

    //エディタにTile画像を登録する
    ipcMain.handle(Channels.REGISTER_TILE, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.REGISTER_TILE}`);

      /*
      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();

        await DevBuilder.buildJS(project.dir);
        await DevBuilder.buildDevHtml(project.dir);

      }*/

    });

  }

}