/* Vou usar só para o Timer */
const moment = require('moment');

/* Uso esse cara para me comunica entre processos */
const { ipcRenderer } = require('electron');

let segundos;
let timer;
let tempo

module.exports = {
	iniciar(el){
		tempo = moment.duration(el.textContent);
		segundos = tempo.asSeconds();
		clearInterval(timer);
		/* usei a arrowFunction para o this ficar fora do escopo e ser 
		   usado no segundosParaTempo. Em uma Funtion não funcionaria */
		timer = setInterval(()=>{
			segundos++;
			el.textContent = this.segundosParaTempo(segundos);
		}, 1000);
	},parar(curso){
		clearInterval(timer);
		let tempoEstudado = this.segundosParaTempo(segundos);
		//enviando para o meu processo principal os três parametros abaixo.
		ipcRenderer.send('curso-parado', curso, tempoEstudado);
	},segundosParaTempo(segundos){
		return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
	}
}