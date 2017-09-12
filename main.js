const { app, BrowserWindow, ipcMain }  = require('electron');

/* Iniciando a aplicação e abrindo a janela */
app.on('ready', () => {
    console.log('Aplicação iniciada');
    let mainWindow = new BrowserWindow({
      width: 600,
      height: 400
    });
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
