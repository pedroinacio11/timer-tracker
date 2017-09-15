/* Vou usar só para o Timer */
const moment = require('moment');

module.exports = {
	iniciar(el){
		console.log(el);
		console.log(el.textContent);
		setInterval(function(){
			let tempo = moment.duration();
		}, 1000);
	}
}


	parar(){

	},
}