let trayIcon = new Tray(path.join(__dirname, 'assets/icons/icon.png'))

         const trayMenuTemplate = [
            {
               label: 'PiQture',
               enabled: false
            },

            {
               label: 'Open PiQture',
               click: function () {
                  show()
               }
            },

            {
               label: 'Screenshot',
               click: function () {
                  start(path.join(os.homedir(), piqture_time()+".png"))
               },
               submenu: [
                 {
                 label: 'Quick capture',
                 click: function () {
                    start(path.join(os.homedir(), piqture_time()+".png"))
                 }
               },
                 {
                   label: 'Choose path',
                   click: function () {
                     ipc.send('save-dialog')
                     ipc.on('saved-file', function (event, pathFile) {
                     if (!pathFile) pathFile = 'Clipboard'
                     screenshotMsg.placeholder = `Path selected: ${pathFile}`
                     start(pathFile)
                   })
                   }
                 }
                        ]
            },
            {
              type: 'separator'
            },
            {
               label: 'Exit',
               click: function () {
                  exit()
               }
            }
         ]

         let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
         trayIcon.setContextMenu(trayMenu)
         trayIcon.setToolTip('PiQture')
