import {IpcMain} from "electron";
import Channels from "../../common/Channels";
import {WindowManager} from "../WindowManager";
import MainWindow from "../window/MainWindow";
import {TileBuilder} from "../builder/TileBuilder";

/**
 * Tile関係の処理をまとめているHandler
 */
export class TileHandler {

  public static registryICP(ipcMain: IpcMain) {

    //エディタにTile画像を登録する
    ipcMain.handle(Channels.REGISTER_TILE, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.REGISTER_TILE}`);


      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();

        await TileBuilder.createTile(project, args[0], args[1]);

      }

    });

    //タイル情報を取得して返す
    ipcMain.handle(Channels.TILE_LIST, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.TILE_LIST}`);

      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();

        const files = await TileBuilder.getTileList(project, args[0]);

        window.getRowBrowserWindow().webContents.send(`${Channels.TILE_LIST}#${args[0]}`, files);

      }

      return []

    });

    //Tile画像を返す
    ipcMain.handle(Channels.GET_TILE_IMAGE, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.GET_TILE_IMAGE}`);


      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();


        return await TileBuilder.getTileImage(project, args[0]);

      }

      return null;

    });


  }

}