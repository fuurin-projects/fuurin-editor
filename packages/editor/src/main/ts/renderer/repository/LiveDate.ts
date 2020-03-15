import IpcRendererEvent = Electron.IpcRendererEvent;

export default class LiveDate<V> {

  private readonly channel: string;

  constructor(channel: string) {
    this.channel = channel;
  }

  public callbackList = new Map<any, (event: IpcRendererEvent, ...args: any[]) => void>();

  public on(callback: (project: V) => void) {

    const hock = (event: IpcRendererEvent, ...args: any[]) => {
      console.log(`LiveDate:channel=${this.channel}, date=${JSON.stringify(args)}`);
      callback(args[0]);
    };

    this.callbackList.set(callback, hock);

    window.ipcRenderer.addListener(this.channel, hock);

    //初回時は強制で最新のデータを発火
    window.ipcRenderer.send(this.channel);

  }

  public off(callback: (project: V) => void) {

    const hock = this.callbackList.get(callback);

    window.ipcRenderer.removeListener(this.channel, hock!);

  }

}