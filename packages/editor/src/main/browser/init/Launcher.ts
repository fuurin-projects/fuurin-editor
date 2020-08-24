import {createComponent} from "../components/LauncherApplication";

console.log("aa");

window.ipcRenderer.on('test-reply', (event, arg) => {
  console.log(arg)
});

window.ipcRenderer.send('test-message', 'bar');

function main() {

  window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Load React Component");
    createComponent();
  });

}

main();