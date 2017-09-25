const { app, BrowserWindow, ipcMain, Tray, Menu }  = require('electron');
const data = require('./data')
const templateGenerator = require('./template')

let tray = null;
let mainWindow = null;

/* Iniciando a aplicação e abrindo a janela */
app.on('ready', () => {
    console.log('Aplicação iniciada');
    mainWindow = new BrowserWindow({
      width: 600,
      height: 400
    });

    tray = new Tray(__dirname + '/app/img/favicon.png');
      let template = templateGenerator.geraTrayTemplate(mainWindow);
      let trayMenu = Menu.buildFromTemplate(template);
      tray.setContextMenu(trayMenu);

    /* Passando o nosso index.html */
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

/* Interrependo a aplicação corretamente */
app.on('window-all-closed', () => {
    app.quit();
});


let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if(sobreWindow == null){
    sobreWindow = new BrowserWindow({
      width: 300,
      height: 200,
      alwaysOnTop: true,
      frame: false
    });
/* Não deixo a janela ser destruida ao clicar no 'Fechar' */
    sobreWindow.on('closed', () => {
      sobreWindow = null;
    })
  }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () =>{
    sobreWindow.close();
});

ipcMain.on('curso-parado', (event, curso, tempoEstudado) => {
    data.salvaDados(curso, tempoEstudado);
});

ipcMain.on('curso-adicionado', (event, novoCurso) => {
    let novoTemplate = templateGenerator.adicionarCursoNoTray(novoCurso, mainWindow);
    let novoTrayMenu = Menu.buildFromTemplate(novoTemplate);
    tray.setContextMenu(novoTrayMenu);
});
