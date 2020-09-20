declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png" {
  const value: any;
  export default value;
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

