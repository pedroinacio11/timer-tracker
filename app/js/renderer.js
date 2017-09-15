/* Somente para manipulação do meu DOM */
const { ipcRenderer } = require('electron');
/* vou usar meu timer como se fosse um modulo node */
const timer - require('./timer');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = documento.querySelector('.tempo');

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});


let imgs = ['img/play-button.svg', 'img/stop-button.svg']
botaoPlay.addEventListener('click', function(){

/* Alterar minhas imagens play/stop */
	imgs = imgs.reverse();
	timer.iniciar(tempo);
	botaoPlay.src = imgs[0];
});
