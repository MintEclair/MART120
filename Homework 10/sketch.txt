var redColor = 130;

var greenColor = 0;

var blueColor = 150;

var headY = 60;
var movement1;

var abdomenY = 150;
var movement2;

var eye1 = 140;
var movement3;

var eye2 = 160;
var movement4;

var hipsX = 75;
var hipsY = 175;
var movement5;

var size = 10
var count = 0;
var sizeDirection = 3;

// this function is called only once

 function setup()
    {
        createCanvas(300,500);
	movement1 = floor(random() * 10) +1;
	movement2 = floor(random() * 10) +1;
	movement3 = floor(random() * 10) +1;
	movement4 = floor(random() * 10) +1;
	movement5 = floor(random() * 10) +1;
    }
    /* this function is called continuously while the sketch is open in the browser
    */
    function draw()
    {
        background(redColor,greenColor,blueColor);
	textSize(16);

	text('A Portrait of a Shattered Man', 10, 30);

	// head
	circle(150,headY,50);
	headY += movement1;
	if(headY <= 60 || headY >= 100 )
	{
		movement1 *= -1;
	}

	// shoulders
	triangle(75, 80, 150, 120, 225, 80)

	// abdomen
	circle(150,abdomenY,70);
	abdomenY += movement2;
	if(abdomenY <= 150 || abdomenY >= 250 )
	{
		movement2 *= -1;
	}


	// hips (that don't lie)
	rect(hipsX,hipsY,150,30);
	hipsX += movement5;
	hipsY += movement5;

	if (hipsX >=width - 150 || hipsX <= 0 || hipsY >= height - 30 || hipsY <= 0) 
	{
	movement5 *= -1;
	}

	// eye 1
	circle(eye1,60,20);
	eye1 += movement3;
	if(eye1 >= 141 || eye1 <= 0 )
	{
		movement3 *= -1;
	}

	// eye 2
	circle(eye2,60,20);
	eye2 += movement4;
	if(eye2 <=159 || eye2 >=300 )
	{
		movement4 *=-1;
	}
	// one arm
	line(75, 80, 75, 150);

	// two arm
	line(225, 80, 225, 150);
	
	// one leg
	line(200, 200, 200, 450);
	
	// two leg
	line(90, 200, 90, 450);

	//Signature
	textSize(size);
	size+= sizeDirection;
	count++;
	if(count > 5)
	{
		sizeDirection *=-1;
		count = 0;
	}
	text ('By Mint Pitassy', 175, 475);

	//tried drawing nipples. But failed.. :(
	point(150, 125);
	point(175, 125);
    }