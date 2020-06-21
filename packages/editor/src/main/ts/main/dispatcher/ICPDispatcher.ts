/**
 * ICP通信全体を管理しているクラス
 */
import {IpcMain} from "electron";
import WindowHandler from "../handler/WindowHandler";

export default class ICPDispatcher {

  public static registryICP(ipcMain: IpcMain) {

    WindowHandler.registryICP(ipcMain);

  }

}