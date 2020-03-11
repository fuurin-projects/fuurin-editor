import {createComponent} from "../components/MainApplication";


function main() {

  window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Load React Component");
    createComponent();
  });

}

main();