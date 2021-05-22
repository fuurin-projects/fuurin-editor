import {createComponent} from "../components/pages/LauncherApplication/LauncherApplication";

window.electronBridge.ipcRenderer.on('test-reply', (event, arg) => {
  console.log(arg)
});

window.electronBridge.ipcRenderer.send('test-message', 'bar');

function main() {

  window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Load React Component");
    createComponent();
  });

}

main();