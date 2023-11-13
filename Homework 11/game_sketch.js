// player circle variables
var x = 50;
var y = 50;
var diameter = 25;

// rect 1 variables
var rect1x = 250
var rect1y = 400

// rect 2 variables
var rect2x = 200
var rect2y = 150

// mouse click variables
var mousex = 0;
var mousey = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  fill(24, 200, 29);
  circle(x, y, diameter);

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

  if (diameter < 100) {
    diameter += 2;
  } else if (diameter >= 100) {
    diameter = 25;
  }

  if (x == 200) {
    console.log("huh, crossing this threshold?");
  }

  // Rectangle Obstacle 1
  fill(69, 20, 80);
  rect(rect1x, rect1y, 150, 30);
  if (rect1x > 800) {
    rect1x = 10;
  } else if (rect1x >= 600 && rect1x <= 700) {
    rect1x += 5;
  } else if (rect1x <= 800) {
    rect1x += 15;
  }

  if (rect1y > 600) {
    rect1y = 400;
  } else if (rect1y > 300) {
    rect1y += 3;
  } else if (rect1y <= 600) {
    rect1y += 5;
  }

  // Rectangle Obstacle 2
  fill(100, 30, 50);
  rect(rect2x, rect2y, 150, 30);
  if (rect2x > 700) {
    rect2x = 10;
  } else if (rect2x >= 600 && rect2x <= 700) {
    rect2x += 4;
  } else if (rect2x <= 700) {
    rect2x += 10;
  }
  
  if (rect2y > 600) {
    rect2y = 150;
  } else if (rect2y > 100) {
    rect2y +=8;
  } else if (rect2y <=600) {
    rect2y +=14;
  }

  fill(20, 30, 100);
  ellipse(mousex, mousey, 30, 100);

  //exit square
  fill(200,0,0)
  rect(750,400,50,50)
	
  //exit text
  text('EXIT', 750, 390)

  if (x > 750 && x < 800 && y > 400 && y < 450)
  {
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text('Yay! YOURE WINNER', 400, 300);
  }
}

function mousePressed() {
  mousex = mouseX;
  mousey = mouseY;
}



