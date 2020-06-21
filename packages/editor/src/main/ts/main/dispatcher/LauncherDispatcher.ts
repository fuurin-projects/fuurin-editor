import {IpcMainEvent} from "electron";
import Channels from "../../common/Channels";
import IWindow from "../window/IWindow";

/**
 * LauncherWindowのipc通信の振り分けを管理するクラス
 */
export default class LauncherDispatcher {

  private readonly dispatchList: Map<string, IcpHandler> = new Map();

  public addIcpHandler(icpHandler: IcpHandler) {
    if (this.dispatchList.has(icpHandler.channel)) {
      throw new Error(`同じIcpHandlerがあります. channel=${icpHandler.channel}`);
    }

    this.dispatchList.set(icpHandler.channel, icpHandler);

  }

  public handle(event: IpcMainEvent, channel: string, ...args: any[]): void {
    console.log(`LauncherDispatcher#handle: channel=${channel}`);

  }

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

/**
 * Icpを処理する型
 */
export type IcpHandler =
  {
    channel: string,
    fun: (window: IWindow, event: IpcMainEvent, channel: string, ...args: any[]) => void
  }

