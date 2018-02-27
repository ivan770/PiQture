function getSource(){
    let options = { types: ['screen'] }

  desktopCapturer.getSources(options, function (error, sourcesSelect) {
    if (error) return console.log(error)

    sourcesSelect.forEach(function (source) {
    var x = document.getElementById("screenSelector");
    var option = document.createElement("option");
    option.text = source.name + "(" + source.id + ")";
    option.id = source.name
    x.add(option);
  })
})
}

getSource()
