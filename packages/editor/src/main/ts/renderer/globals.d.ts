declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }

  const classNames: IClassNames;
  export = classNames;
}

import IpcRenderer = Electron.IpcRenderer;

/**
 * Windowを拡張
 */
interface Window {
  ipcRenderer: IpcRenderer,
  // セパレター(区切り文字)
  sep: string
}

