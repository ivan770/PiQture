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
               label: 'Exit',
               click: function () {
                  exit()
               }
            }
         ]

         let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
         trayIcon.setContextMenu(trayMenu)
