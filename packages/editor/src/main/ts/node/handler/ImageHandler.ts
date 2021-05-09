import {IpcMain} from "electron";
import Channels from "../../common/Channels";
import {WindowManager} from "../WindowManager";
import MainWindow from "../window/MainWindow";
import {ImageManager} from "../ImageManager";

/**
 * 画像データを処理するハンドラー
 */
export class ImageHandler {
  public static registryICP(ipcMain: IpcMain) {

    //画像データを返す
    ipcMain.handle(Channels.GET_IMAGE, async (event, ...args: any[]) => {

      console.log(`handle. ${Channels.GET_IMAGE}`);
      const window = WindowManager.getWindowFromEvent(event);

      if (window instanceof MainWindow) {

        const project = window.getProject();

        return await ImageManager.getImage(project, args[0]);

      }

      return null;

    });

  }
}