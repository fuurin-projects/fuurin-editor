console.log("init preload");

import {contextBridge, ipcRenderer} from 'electron';
import path from "path";

// @ts-ignore
//window.ipcRenderer = ipcRenderer;
// @ts-ignore
//window.systemPreferences = {};
// @ts-ignore
//window.sep = path.sep;

const listeners = {};

//直接渡すと機能しないので擬似的に関数を複製
const on2 = (channel: string, listener: any) => {
  return ipcRenderer.on(channel, listener);
}
const addListener2 = (channel: string, listener: any) => {
  return ipcRenderer.addListener(channel, listener);
}
const removeListener2 = (channel: string, listener: any) => {
  return ipcRenderer.removeListener(channel, listener);
}

contextBridge.exposeInMainWorld(
  "electronBridge", {
    sep: path.sep,
    ipcRenderer: {...ipcRenderer, on: on2, addListener: addListener2, removeListener: removeListener2}
  }
);