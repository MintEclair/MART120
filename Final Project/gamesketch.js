// player circle variables
var x = 50;
var y = 50;
var diameter = 25;


// mouse click variables
var mousex = 0;
var mousey = 0;

// obstacle variables
var obsXs = [];
var obsYs = [];
var obsDiameters = [];

//obstacle speeds
var obsXSpeeds = [];
var obsYSpeeds = [];

//obstacle colors
var obstacleColors = [];

function setup() {
  createCanvas(1000, 3000);

  for (var i = 0; i < 5; i++) {
  obsXs[i] = random(width);
  obsYs[i] = random(height);
  obsDiameters[i] = random(10, 69);
  obsXSpeeds[i] = random(-3, 5)
  obsYSpeeds[i] = random(-2, 4)
  obstacleColors[i] = color(random(255), random(255), random(255));
  }
}

function draw() {
  background(0);
  fill(255, 0, 100);
  circle(x, y, diameter);

  for (var i = 0; i < 5; i++) {
      fill(obstacleColors[i]);
      circle(obsXs[i], obsYs[i], obsDiameters[i]);

      obsXs[i] += obsXSpeeds[i];
      obsYs[i] += obsYSpeeds[i];

  if (obsXs[i] > width) {
            obsXs[i] = 0;
            }
  if (obsXs[i] < 0) {
            obsXs[i] = width;
            }
  if (obsYs[i] > height) {
            obsYs[i] = 0;
            }
  if (obsYs[i] < 0) {
            obsYs[i] = height;
            } 

//real talk, I know we didn't learn about collision in class. I did consult chatgpt on how to detect collision because I wanted to do something funny and make this game more of a game.
    var distance = dist(x, y, obsXs[i], obsYs[i]);
    var minDistance = diameter / 2 + obsDiameters[i] / 2;
    if (distance < minDistance) {
    window.location.href = 'GAYBABYJAIL.html'
    }
}

  controlCircle();

  borders();

  introText();

  walls();

  safetyZoneText();

  safetyZone();

}

 function controlCircle(){
 if (keyIsDown(83)) {
    y += 10;
    console.log("s is for going south");
  } else if (keyIsDown(87)) {
    y -= 10;
    console.log("w is for going upwards");
  } else if (keyIsDown(65)) {
    x -= 10;
    console.log("a is for ah! I'm going left!");
  } else if (keyIsDown(68)) {
    x += 10;
    console.log("d is for definitely going right here!");
  }


}


  if (x == 200) {
    console.log("huh, crossing this threshold?");
  }

function borders() {
  fill(100,100,100)
  rect(0,0,25,3000)
  rect(0,0,1000,25)
  rect(0,2975,1000,25)
  rect(975,0,25,3000)
}

function introText(){
  fill(255);
  textSize(12);
  text('Press w, a, s, d, to move. Scroll down as you go through the maze. Do your best to not run into the ghosts(they have anxiety). Good luck!', 75, 50);
  }

function walls() {
  fill(100,100,100)

  //first walls
  rect(0,100,400,25)
  rect(600,100,400,25)

  //second walls
  rect(0,300,250,25)
  rect(350,300,700,25)

  //third walls
  rect(0,700,700,25)
  rect(800,700,250,25)
  
  //hey you! Gonna destroy this one you see?
  rect(0,1000,500,25)
  rect(600,1000,400,25)

  //fifth walls
  rect(0,1300,200,25)
  rect(250,1300,750,25)

  //sixth walls
  rect(0,1750,700,25)
  rect(800,1750,200,25)

  //seventh walls
  rect(0,2000,100,25)
  rect(150,2000,850,25)

  //are we done yet walls
  rect(0,2200,450,25)
  rect(550,2200,450,25)

  //just keep swimming walls
  rect(0,2500,300,25)
  rect(350,2500,650,25)

  //donion ring walls
  rect(0,2800,450,25)
  rect(550,2800,450,25)

if (
    // First Walls
    (x > 0 && x < 400 && y > 100 && y < 125) ||
    (x > 600 && x < 1000 && y > 100 && y < 125) || 
  
    // Second walls
    (x > 0 && x < 250 && y > 300 && y < 325) ||
    (x > 350 && x < 1000 && y > 300 && y < 325) ||

    // Third walls
    (x > 0 && x < 700 && y > 700 && y < 725) ||
    (x > 800 && x < 1000 && y > 700 && y < 725) ||
  
    //hey you! Gonna destroy this one you see?
    (x > 0 && x < 500 && y > 1000 && y < 1025) ||
    (x > 600 && x < 1000 && y > 1000 && y < 1025) ||

    // Fifth walls
    (x > 0 && x < 200 && y > 1300 && y < 1325) ||
    (x > 250 && x < 1000 && y > 1300 && y < 1325) ||

    // Sixth walls
    (x > 0 && x < 700 && y > 1750 && y < 1775) ||
    (x > 800 && x < 1000 && y > 1750 && y < 1775) ||

    // Seventh walls
    (x > 0 && x < 100 && y > 2000 && y < 2025) ||
    (x > 150 && x < 1000 && y > 2000 && y < 2025) ||

    // Are we done yet walls
    (x > 0 && x < 450 && y > 2200 && y < 2225) ||
    (x > 550 && x < 1000 && y > 2200 && y < 2225) ||

    // Just keep swimming walls
    (x > 0 && x < 300 && y > 2500 && y < 2525) ||
    (x > 350 && x < 1000 && y > 2500 && y < 2525) ||

    // Donion ring walls
    (x > 0 && x < 450 && y > 2800 && y < 2825) ||
    (x > 550 && x < 1000 && y > 2800 && y < 2825)
  ) {
    window.location.href = 'danradjumpscare.html';
  }

}

function safetyZoneText() {
  fill(225);
  textSize(40);
  text('SAFETY ZONE', 350, 2900);
}

function safetyZone() {
  if (
   (x > 0 && x < 1000 && y > 2825 && y < 3000)
  ) {
    window.location.href = 'wingamescreen.html';
  }
}

function mousePressed() {
  mousex = mouseX;
  mousey = mouseY;
}
