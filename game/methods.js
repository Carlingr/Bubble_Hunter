function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].sze / 2) + 10) {
      score = score + (bubmax - bubbles[i].sze)
      bubbles.splice(i, 1)
      bubbles.push(new Bubble());
    }
  }
}

function windowResized() { //when the window is resized
  if (windowWidth < 500) { //the game is too hard to play if the canvas is giant
    resizeCanvas(windowWidth, windowHeight - 15); //resize the canvas
  } else { // if the window is biiger then 500
    resizeCanvas(500, windowHeight - 15) //resize the canvas
  }
  bubmin = width * height / 15000; //based on size of window
  if (bubmin < 24) {
    bubmin = 10
  }
  bubmax = width * height / 10000; //based on size of window
  if (bubmax < 24) {
    bubmax = 24
  }
}