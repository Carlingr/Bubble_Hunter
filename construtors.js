function Bubble() {
  this.sze = random(bubmin, bubmax)
  this.x = random(this.sze * 2, width - (this.sze * 2))//make sure that the bubble does not extend past the edges of the canvas
  this.y = 0 - random(this.sze, this.sze + 5) // makes a random increment between when the bubble is destroyed and the next one appears
  this.move = function() { //move the bubble
    this.y = this.y + (this.sze * (height / 10000)) + (score / 10000)
    if (this.y + (this.sze / 2) > rtop) {
      vol = vol + (3.14159 * (this.sze / 2) * (this.sze / 2))
      this.sze = random(bubmin, bubmax)
      this.x = random(this.sze, width - this.sze)
      this.y = this.sze
    }
  }
  this.disp = function() { //draw the bubble on the screen
    ellipse(this.x, this.y, this.sze)
  }
}

function Crosshairs(X, Y) { //draw the crosshairs
  //seperate function is used so that the coorodonates wil be the same for all the parts
  noFill();
  stroke("black");
  for (var i = 0; i < 4; i++) { // make the circle, with breaks
    arc(X, Y, 15, 15, (i * 90) + 15, ((i + 1) * 90) - 15); //arc is 70 degrees, with 15 degree offset
  }
  //<make the crossing lines>
  line(X + 12, Y, X - 12, Y)
  line(X, Y - 12, X, Y + 10)
    //</make the crossing lines>
}