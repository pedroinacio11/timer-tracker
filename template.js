const data = require('./data')

module.exports = {

  geraTrayTemplate(win){
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
              type: 'radio',
              click: () => {
                win.send('curso-trocado', curso);
              }
          }
          template.push(menuItem);
      });

      return template;
    }
}
