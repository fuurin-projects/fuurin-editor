import IpcRendererEvent = Electron.IpcRendererEvent;

/**
 * Mainからのデータ購読するのをかんたんにするクラス
 */
export default class LiveDate<V> {

  private readonly channel: string;
  private readonly subChannel?: string;
  private readonly channelCode: string;

  constructor(channel: string, subChannel?: string) {
    this.channel = channel;
    this.subChannel = subChannel;
    if (this.subChannel) {
      this.channelCode = `${this.channel}#${this.subChannel}`
    } else {
      this.channelCode = this.channel;
    }
  }

  public callbackList = new Map<any, (event: IpcRendererEvent, ...args: any[]) => void>();

  public on(callback: (project: V) => void) {

    const hock = (event: IpcRendererEvent, ...args: any[]) => {
      console.log(`LiveDate:channel=${this.channel}, sub=${this.subChannel} date=${JSON.stringify(args)}`);
      callback(args[0]);
    };

    this.callbackList.set(callback, hock);

    window.ipcRenderer.addListener(this.channelCode, hock);

    //初回時は強制で最新のデータを発火
    window.ipcRenderer.invoke(this.channel, this.subChannel);

  }

  public off(callback: (project: V) => void) {

    const hock = this.callbackList.get(callback);

    window.ipcRenderer.removeListener(this.channelCode, hock!);

  }

}