const data = require('./data');
const { ipcMain } = require('electron');

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
      },

      geraMenuPrincipalTemplate(app){

        let templateMenu = [
          {
          label: 'view',
          submenu: [{
            role: 'reload'
          },
        {
            role: 'toggledevtools'
        }
      ]
    },
    {
      label: 'Windows',
      submenu: [
        {
          role: 'minimize'
        },
        {
          role: 'close'
        }
      ]
    },
          {
          label: 'Sobre',
          submenu: [
            {
              label: 'Sobre o Track Timer',
              click: () => {
                //emite o evento para abrir a janela sobre .. o IpcMain está escutando!
                ipcMain.emit('abrir-janela-sobre');
              },
              accelerator : 'CmdOrCtrl+I'
            }
          ]
    }];
          if( process.platform == 'darwin'){
            //função unshift sempre coloca a primeira posiçaõ do array
              templateMenu.unshift({
                label: app.getName(),
                submenu: [
                  {
                    label: 'Estou rodando no Mac!'
                  }
                ]
              })
            }
              return templateMenu;
          }

        }
