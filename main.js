const { app, BrowserWindow }  = require('electron');

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
