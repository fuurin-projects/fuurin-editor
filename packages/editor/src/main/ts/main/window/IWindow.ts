import {BrowserWindow} from "electron";

interface IWindow {

  getId(): number

  getWindowId(): string

  getRowBrowserWindow(): BrowserWindow

  destroy(): void

  close(type: CloseType): void

}

export type CloseType = "open_project" | "cancel" | undefined;


export default IWindow;