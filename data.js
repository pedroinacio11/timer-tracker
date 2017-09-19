/* jsonfile npm */
const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {

	salvaDados(curso, tempoEstudado){
		let arquivoDoCurso = __dirname + '/data/'+  curso + '.json';
		if(fs.existsSync(arquivoDoCurso)){
			//Salva dados
		}else{
			
			this.criaArquivoDeCurso(arquivoDoCurso, {})
			.then(() => {
				// salvar dados
			})
		}
},
	criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
		 return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
/* se der certo */.then(() => {
					console.log('Arquivo Criado')
			}).catch((err) => {
					console.log(err);
			});
	}
}