/* Vou usar só para o Timer */
const moment = require('moment');
let segundos;
let timer;

module.exports = {
	iniciar(el){
		let tempo = moment.duration(el.textContent);
		segundos = tempo.asSeconds();
		clearInterval(timer);
		/* usei a arrowFunction para o this ficar fora do escopo e ser 
		   usado no segundosParaTempo. Em uma Funtion não funcionaria */
		timer = setInterval(()=>{
			segundos++;
			el.textContent = this.segundosParaTempo(segundos);
		}, 1000);
	},parar(){
		clearInterval(timer);
	},segundosParaTempo(segundos){
		return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
	}
}