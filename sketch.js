var bubbles = []
var score
var vol
var lvl
var mode
var bubmin
var bubmax
var rtop

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightskyblue");
  textAlign(CENTER);
  textSize(height / 1.9);
  fill("White");
  text("Bubble", width / 2, (height / 2.4));
  text("Hunter", width / 2, height * .82);
  textSize(height / 10);
  text("Game is Loading...", width / 2, height * .95);
  score = 1
  textAlign(LEFT)
  textSize(height / 20);
  vol = 0
  lvl = 0
  mode = "game"
  bubmin = 10
  bubmax = 25
}

function draw() {
  rtop = height - (vol / (width / 50))
  if (mode == "game") {
    Scene();
    fill("blue")
    stroke("blue")
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].disp()
      bubbles[i].move()
    }
    if (score - lvl > score / 2) {
      lvl = score
      bubbles.push(new Bubble());
    }
    Crosshairs(mouseX, mouseY);
    stroke("black")
    fill("black")
    textSize(20)
    textAlign(LEFT);
    text(round(score / 10), 5, 20)
    text(abs(round(((rtop / height) * 100) - 100)), 5, 40)
    if (rtop <= 0) {
      mode = "end"
    }
  } else if (mode == "end") {
    background("blue");
    stroke("white")
    textAlign(CENTER);
    textSize(height * .45);
    fill("White");
    text("Game", width / 2, height * .37);
    text("Over", width / 2, height * .73);
    textSize(height * .1);
    text(concat("Score = ", round(score / 10)), width / 2, height * .84);
    textSize(height * .07);
    text("Click mouse to continue.", width / 2, height * .93);
    if (mouseIsPressed === true) {
      mode = "game"
      bubbles = []
      vol = 0
      lvl = 0
      score = 1
    }
  }
}

function Scene() {
  background("lightskyblue");
  fill("blue");
  stroke("blue");
  rect(0, rtop, width, height);
}

function Crosshairs(X, Y) {
  noFill();
  stroke("black");
  for (var i = 0; i < 4; i++)
    arc(X, Y, 15, 15, (i * 1.5708) + 0.261799, ((i + 1) * 1.5708) - 0.261799); //arc is 70 degrees, with 15 degree offset - numbers are in radians
  //                  (i * 90°   ) + 15°     , ((i + 1) * 90°     - 15°
  line(X + 12, Y, X - 12, Y)
  line(X, Y - 12, X, Y + 10)
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
    if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < (bubbles[i].sze / 2) + 5) {
      score = score + (bubmax - bubbles[i].sze)
      bubbles.splice(i, 1)
      bubbles.push(new Bubble());
    }
  }
}