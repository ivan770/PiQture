function determineScreenShotSize () {
  const screenSize = electronScreen.getPrimaryDisplay().workAreaSize
  const maxDimension = Math.max(screenSize.width, screenSize.height)
  if(nativeCaptureValue.checked == true){
    return {
      width: maxDimension * window.devicePixelRatio,
      height: maxDimension * window.devicePixelRatio
    }
  }else{
    return {
      width: screenSize.width * window.devicePixelRatio,
      height: screenSize.height * window.devicePixelRatio
    }
  }
}
