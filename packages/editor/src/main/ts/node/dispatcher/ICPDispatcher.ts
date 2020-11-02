/**
 * ICP通信全体を管理しているクラス
 */
import {IpcMain} from "electron";
import WindowHandler from "../handler/WindowHandler";
import SystemHandler from "../handler/SystemHandler";
import ProjectHandler from "../handler/ProjectHandler";
import {BuilderHandler} from "../handler/BuilderHandler";
import {GameHandler} from "../handler/GameHandler";
import {TileHandler} from "../handler/TileHandler";
import {ImageHandler} from "../handler/ImageHandler";

export default class ICPDispatcher {

  public static registryICP(ipcMain: IpcMain) {

    // システム自体の処理
    SystemHandler.registryICP(ipcMain);
    // ウィンドウに関連する処理
    WindowHandler.registryICP(ipcMain);
    // プロジェクトに関連する処理
    ProjectHandler.registryICP(ipcMain);
    // ゲームのBuild処理
    BuilderHandler.registryICP(ipcMain);
    // デバック処理
    GameHandler.registryICP(ipcMain);
    // Tile関係
    TileHandler.registryICP(ipcMain);
    // 画像関係
    ImageHandler.registryICP(ipcMain);
  }

}