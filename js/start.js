function start(pathFile){
  windowSecond.hide();
  setTimeout(func, settings.get('timeOutCapture'));
  function func(){
  screenshotMsg.value = 'Gathering screens...'
  const thumbSize = determineScreenShotSize()
  let options = { types: ['screen'], thumbnailSize: thumbSize }

  desktopCapturer.getSources(options, function (error, sources) {
    if (error) return console.log(error)

    sources.forEach(function (source) {
      if (source.name === 'Entire screen' || source.name === 'Screen 1') {
        const screenshotPath = path.join(pathFile)

        fs.writeFile(screenshotPath, source.thumbnail.toPng(), function (error) {
          if (error) return console.log(error)
          // shell.openExternal('file://' + screenshotPath) -- Open photo
          shell.showItemInFolder('file://' + screenshotPath)
          const message = `Saved screenshot to: ${screenshotPath}`
          screenshotMsg.value = message
          clipboard.clear();
          clipboard.writeImage(source.thumbnail)
        })
      }
    })
  })
}
}
