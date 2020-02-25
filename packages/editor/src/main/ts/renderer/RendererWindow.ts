import IpcRenderer = Electron.IpcRenderer;

interface RendererWindow extends Window {
  ipcRenderer: IpcRenderer
}

declare var window: RendererWindow;
export default window;