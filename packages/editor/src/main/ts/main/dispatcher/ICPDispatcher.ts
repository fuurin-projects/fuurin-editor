/**
 * ICP通信全体を管理しているクラス
 */
import {IpcMain} from "electron";
import WindowHandler from "../handler/WindowHandler";
import SystemHandler from "../handler/SystemHandler";
import ProjectHandler from "../handler/ProjectHandler";

export default class ICPDispatcher {

  public static registryICP(ipcMain: IpcMain) {

    // システム自体の処理
    SystemHandler.registryICP(ipcMain);
    // ウィンドウに関連する処理
    WindowHandler.registryICP(ipcMain);
    // プロジェクトに関連する処理
    ProjectHandler.registryICP(ipcMain);

  }

}