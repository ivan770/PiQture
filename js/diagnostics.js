function displayDiagnostics(){
  var currentDisplay = electronScreen.getPrimaryDisplay()
  return {
            "id":currentDisplay.id
            ,"rotation":currentDisplay.rotation
            ,"scaleFactor":currentDisplay.scaleFactor
            ,"touchSupport":currentDisplay.touchSupport
            ,"size":currentDisplay.size
            ,"workAreaSize":currentDisplay.workAreaSize
    }
}
