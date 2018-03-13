function start(pathFile){
  var screenshotInformation = [];
  windowSecond.hide();
  setTimeout(func, settings.get('timeOutCapture'));
  screenshotInformation["timeOut"] = settings.get("timeOutCapture")
  function func(){
  const thumbSize = determineScreenShotSize()
  screenshotInformation["thumbSize"] = thumbSize
  let options = { types: ['screen'], thumbnailSize: thumbSize }

  desktopCapturer.getSources(options, function (error, sources) {
    if (error) return console.log(error)

    sources.forEach(function (source) {
      if (source.name === 'Entire screen' || source.name === 'Screen 1') {
        const screenshotPath = path.join(pathFile)

        fs.writeFile(screenshotPath, source.thumbnail.toPng(), function (error) {
          if (error) return console.log(error)
            if(settings.get("openPhoto") == true){
              shell.showItemInFolder('file://' + screenshotPath)
              screenshotInformation["openPhoto"] = true
            }
            if(settings.get("playBeep") == true){
              shell.beep()
              screenshotInformation["beep"] = true
            }
          const message = `Saved screenshot to: ${screenshotPath}`
          screenshotMsg.value = message
          clipboard.clear();
          clipboard.writeImage(source.thumbnail)
          console.log(screenshotInformation)
        })
      }
    })
  })
}
}
