const { ipcRenderer, shell } = require('electron');
/* O process mostra alguns detalhes do sitemas */
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkGit = document.querySelector("#link-git");
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
  versaoElectron.textContent = process.versions.electron;
}

linkFechar.addEventListener('click', function(){
  ipcRenderer.send('fechar-janela-sobre');
})


/* Abrir apps externos posso usar o Shell */
linkGit.addEventListener('click', function(){
  shell.openExternal("https://github.com/pedroinacio11");
})
