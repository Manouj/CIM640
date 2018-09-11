

function setup() {
  // put setup code here
  createCanvas (1600,600);
}

function draw() {
  // put drawing code here

  //background
  background("#81ecec");


  //road
  fill(000);
  rect(0,500,1600,50);

  //frame
  noStroke();
  fill("#2980b9");
  quad(235, 475, 225, 375, 885, 355, 845, 475);
  quad(275, 375, 400, 315, 550, 315, 685, 375);

  //tyres
  fill(000)

    ellipse(350,450,120,120);
    ellipse(725,450,120,120);
  //wheels
    fill(255);
    ellipse(350,450,90,90);
    ellipse(725,450,90,90);

    fill(200);
    ellipse(350,450,40,40);
    ellipse(725,450,40,40);


  //mirror frame
  fill(000);
    quad(310, 375, 400, 325, 550, 325, 640, 365);
    //mirrors
      fill(220);
    quad(410, 365, 400, 335, 540, 335, 600, 360);
    quad(350, 365, 390, 340, 400, 365, 350, 365);

//backlight
fill("#e74c3c");
quad(220, 425, 215, 395,240, 395,245, 425);

    //eyes

//ellipse(840,400,40,50);
//fill(000);
//ellipse(850,400,20,20);
fill(255);
quad(840, 425, 825, 385,880, 385,865, 425);

//decals
fill(000);
quad(250, 460, 250, 455,280, 455,280, 460);
quad(425, 460, 425, 455,650, 455,650, 460);
quad(800, 460, 800, 455,865, 455,865, 460);



  if(mouseIsPressed)
  {
    noStroke();
    var c = color(243, 156, 18, 102);
    fill(c);
    quad(840, 425, 825, 385,880, 385,865, 425);
  }
  else {
  }

  if(mouseIsPressed)
  {
    noStroke();
    var front = color(241, 196, 15, 102);

    fill(front);
    quad(860, 425, 875, 385,1600, 80,1600, 600);

    var rear = color(231, 76, 60, 102);
    fill(rear);
    quad(220, 425, 215, 395,0, 330,0,500);
  }
  else {
  }


}
