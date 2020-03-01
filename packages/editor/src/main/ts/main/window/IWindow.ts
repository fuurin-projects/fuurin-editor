import {BrowserWindow} from "electron";

interface IWindow {

  getWindowId(): string

  getRowBrowserWindow(): BrowserWindow

}

export default IWindow;