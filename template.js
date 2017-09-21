const data = require('./data')

module.exports = {

  geraTrayTemplate(){
      let template = [
        {
          'label':'Projetos'
        },
        {
          type: 'separator'
        }
      ];

      let cursos = data.pegaNomeDosCursos();
      cursos.forEach((curso) => {
        // novo Objeto
          let menuItem = {
              label: curso,
              type: 'radio'
          }
          template.push(menuItem);
      });

      return template;
    }
}
