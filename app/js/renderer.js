/* Somente para manipulação do meu DOM */

const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play')

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});


let imgs = ['img/play-button.svg', 'img/stop-button.svg']
botaoPlay.addEventListener('click', function(){

/* Alterar minhas imagens play/stop */
	imgs = imgs.reverse()
	botaoPlay.src = imgs[0];
});
