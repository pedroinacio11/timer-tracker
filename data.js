/* jsonfile npm */
const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {

	salvaDados(curso, tempoEstudado){
		let arquivoDoCurso = __dirname + '/data/'+  curso + '.json';
		
		//o arquivo já existe
		if(fs.existsSync(arquivoDoCurso)){
			//Salva dados
			this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
		}else{
			
		// ou acabei de criar ele..
			this.criaArquivoDeCurso(arquivoDoCurso, {})
			.then(() => {
				// salvar dados
				this.adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado);
			})
		}
},
	adicionaTempoAoCurso(arquivoDoCurso, tempoEstudado){

		let dados = {
			ultimoEstudo: new Date().toString(),
			tempo: tempoEstudado
		}

		jsonfile.writeFile(arquivoDoCurso, dados, {spaces: 2})
			.then(() => {
				console.log('Salvo com sucesso');
			}).catch((err) => {
			console.log(err);
		})
	},

	criaArquivoDeCurso(nomeArquivo, conteudoArquivo){
		 return jsonfile.writeFile(nomeArquivo, conteudoArquivo)
/* se der certo */.then(() => {
					console.log('Arquivo Criado')
			}).catch((err) => {
					console.log(err);
			});
	},

	pegaDados(curso){

		let arquivoDoCurso = __dirname + '/data/'+  curso + '.json';
		return jsonfile.readFile(arquivoDoCurso);
	}
}