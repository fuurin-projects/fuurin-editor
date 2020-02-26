import {createComponent} from "./LauncherComponent";

console.log("aa");

window.ipcRenderer.on('test-reply', (event, arg) => {
  console.log(arg)
});

window.ipcRenderer.send('test-message', 'bar');

window.onload = function () {
  console.log("aaa");
  createComponent();
};

