console.log("init preload");

import {ipcRenderer} from 'electron';
import path from "path";

// @ts-ignore
window.ipcRenderer = ipcRenderer;
// @ts-ignore
window.systemPreferences = {};
// @ts-ignore
window.sep = path.sep;