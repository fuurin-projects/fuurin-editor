import {IpcMainEvent} from "electron";
import Channels from "../../common/Channels";

/**
 * LauncherWindowのipc通信の振り分けを管理するクラス
 */
export default class LauncherDispatcher {

  public dispatch(event: IpcMainEvent, channel: string, ...args: any[]): void {
    console.log(`LauncherDispatcher#dispatch: channel=${channel}`)
  }

  public dispatchSync(event: IpcMainEvent, channel: string, ...args: any[]): void {
    console.log(`LauncherDispatcher#dispatchSync: channel=${channel}`);

    //バージョン文字列の取得
    if (Channels.VERSION == channel) {
      event.returnValue = process.env.npm_package_version;
    }

  }

}