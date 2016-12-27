var bubbles = [] //this holds the individual bubbles 
var bubmin //minimum bubble size, based on screen size
var bubmax //maximum bubble size, based on screen size

var score //the current score
var lvl // the level, which is used to determine how many bubbles are on the screen
var mode //are we playing, or looking at the leaderboard

var vol //size of water at bottom
var rtop //top of water at bottom

//<DOM variables>
var canvas;
var head
var infoP;
var button;
//</DOM variables>

function setup() {
  //<mess w/ DOM>
  if (windowWidth < 500) { //the game is too hard to play if the canvas is giant
    canvas = createCanvas(windowWidth, windowHeight - 15); //make a small canvas
  } else { // if the window is biiger then 500
    canvas = createCanvas(500, windowHeight - 15) //make a big canvas
  }
  head = createElement("h2", "Game Over")
  infoP = createP();
  button = createButton("Play Again");
  button.mousePressed(newGame)
  head.hide()
  button.hide()
  infoP.hide();
  //</mess w/ DOM>
  score = 1 //has to be 1 so that bubble generation works
  vol = 0
  lvl = 0
  mode = "game" //"game" gets played, "end" shows scores
  bubmin = width * height / 15000; //based on size of window
  if (bubmin < 15) {
    bubmin = 15
  }
  bubmax = width * height / 10000; //based on size of window
  if (bubmax < 24) {
    bubmax = 24
  }
  angleMode(DEGREES) //make my head hurt less
}

function draw() {
  rtop = height - (vol / (width / 50)) //
  if (mode == "game") { // if playing a game
    //<make the background and the bottom>
    background("lightskyblue");
    fill("blue");
    stroke("blue");
    rect(0, rtop, width, height);
    //</make the background and the bottom>
    if (score - lvl > score / 2) { // if the difference between the score and the level is more then half the score
      lvl = score //levelup
      bubbles.push(new Bubble()); //add a bubble
    }
    //<make the bubbles>
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].move()
      bubbles[i].disp()
    }
    //</make the bubbles>
    Crosshairs(mouseX, mouseY); // put crosshairs around the mouse, in function so that crosshair will not be affected by mouse movement
    //<put the score in the upper left corner>
    stroke("black")
    fill("black")
    textSize(20)
    textAlign(LEFT);
    text(round(score / 10), 5, 20);
    //</put the score in the upper left corner>
    //<put the amount of water at the upper left corner of the water>
    stroke("white")
    fill("white")
    text(abs(round(((rtop / height) * 100) - 100)), 5, rtop + 22);
    //</put the amount of water at the upper left corner of the water>
    if (rtop <= 0) { //if the water has filled the screen
      mode = "end" //end the game
    }
  } else if (mode == "end") { //if looking at scores
    //<make the info P>
    var Pconts = "Score = "
    Pconts += round(score / 10);
    //</make the info P>
    //<mess with DOM>
    infoP.html(Pconts)
    canvas.hide()
    button.show()
    infoP.show()
    head.show();
    //</mess with DOM>
  }
}