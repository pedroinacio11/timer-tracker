const data = require('./data')

module.exports = {
  templateInicial: null,

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
      this.templateInicial = template;
      return template;
    },

      adicionarCursoNoTray(curso, win){
        // add num array
        this.templateInicial.push({
            label: curso,
            type: 'radio',
            checked: true,
            click: () => {
              win.send('curso-trocado', curso);
            }
        })
        return this.templateInicial;
      }
}
