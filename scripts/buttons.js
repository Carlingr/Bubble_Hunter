function newGame() {
  //<set us up for the game>
  head.hide()
  canvas.show()
  button.hide()
  infoP.hide();
  //</set us up for the game>
  //<reset all the variables>
  bubbles = [] //delete all the bubbles
  score = 1 //has to be 1 so that bubble generation works
  vol = 0
  lvl = 0
  mode = "game" //"game" gets played, "end" shows scores
  //</reset all the variables>
}