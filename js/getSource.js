function getSource(){
    let options = { types: ['screen'] }

  desktopCapturer.getSources(options, function (error, sourcesSelect) {
    if (error) return console.log(error)

    sourcesSelect.forEach(function (source) {
    var x = document.getElementById("screenshot-path");
    x.value = "Source: " + source.name + "(" + source.id + ")"
  })
})
}

getSource()
