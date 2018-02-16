const electron = require('electron')
const {app, BrowserWindow, desktopCapturer, shell} = require('electron')
const path = require('path')
const url = require('url')
const ipc = require('electron').ipcMain
const dialog = require('electron').dialog
const globalShortcut = electron.globalShortcut

const fs = require('fs')
const os = require('os')

let win

function createWindow () {
  win = new BrowserWindow({width: 500, height: 200, frame: false, icon: path.join(__dirname, 'assets/icons/icon.png'), maximizable: false})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  const electronScreen = electron.screen
  const clipboard = require('electron').clipboard
  createWindow()
  globalShortcut.register('CommandOrControl+Alt+S', function () {
    win.webContents.send("shortcut-screenshot")
  })
  app.setAsDefaultProtocolClient('piqture')
})

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (win === null) {
    createWindow()
  }
})

app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

ipc.on('save-dialog', function (event) {
  const options = {
    title: 'Save an Image',
    filters: [
      { name: 'Images', extensions: ['png'] }
    ]
  }
  dialog.showSaveDialog(options, function (filename) {
    event.sender.send('saved-file', filename)
  })
})

ipc.on('developer', function (event) {
  win.webContents.openDevTools()
})
