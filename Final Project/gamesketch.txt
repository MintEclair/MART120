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
  createCanvas(800, 600);

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
  fill(24, 200, 29);
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
}

  controlCircle();

  changeDiameter();

  ellipse1();

  exitSquare();

  exitText();

  winCondition();

  border();
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

 function changeDiameter(){
    if (diameter < 100) {
    diameter += 2;
  } else if (diameter >= 100) {
    diameter = 25;
  }
} 

  if (x == 200) {
    console.log("huh, crossing this threshold?");
  }


function ellipse1(){
  fill(20, 30, 100);
  ellipse(mousex, mousey, 30, 100);
}

function exitSquare(){
  fill(200,0,0)
  rect(725,400,50,50)
}	

function exitText(){
  text('EXIT', 725, 390)
}

function winCondition(){
  if (x > 750 && x < 800 && y > 400 && y < 450)
  {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text('Yay! YOURE WINNER', 400, 300);
  }
}

function border(){
  fill(100,100,100)
  rect(0,0,800,25)
  rect(0,0,25,600)
  rect(0,575,800,25)
  rect(775,0,25,600)
}

function mousePressed() {
  mousex = mouseX;
  mousey = mouseY;
}