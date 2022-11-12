const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    show: false
  })

  win.loadFile('index.html')
  win.maximize()
}

app.whenReady().then(() => {
  createWindow()
})

app.setLoginItemSettings({
    openAtLogin: true,

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
  // no need to keep it running - launch at login is fine
})