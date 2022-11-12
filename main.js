const { app, BrowserWindow } = require('electron')

const period = .2*1/60 * 60 * 60 * 1000; // how often to create the window in ms for setInterval to use
const viewingPeriod = .1 * 60 * 1000

const createWindow = () => {
  let win = new BrowserWindow({
    show: false
  })

  win.on("close", () => {
    win = null;
    clearTimeout(closeTimeout)
  })

  win.loadFile('index.html')
  win.maximize()

  // force window to close itself (timer) to make the user get started on some work and prevent them from putting win to the side and ignoring it.
  // have to clear this timeout if window is closed by user.
  const closeTimeout = setTimeout(() => {
    win.close();
    win = null;
  }, viewingPeriod);

}



app.whenReady().then(() => {
  createWindow()
  setInterval(createWindow, period)
})

// couldn't get the following to work, so the app will start itself every 2 hrs
/*app.setLoginItemSettings({
    openAtLogin: true
})*/


app.on('window-all-closed', () => {



  // prank
  // createWindow()
  // createWindow()
  // createWindow()

  // obselete given 2 hr thing
  // if (process.platform !== 'darwin') app.quit()
  // no need to keep it running - launch at login is fine
})