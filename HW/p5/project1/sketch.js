new p5();

var boop = random(300);

function setup() {
    createCanvas(500, 500);
  background(0);
}

function draw() {
  background("black");
    var posX = mouseX;
    var posY = mouseY;
  // Put drawing code here
    stroke ('white');
    //eyes
    fill("white");
    ellipse(150,120,50,50);

    ellipse (350,120,50,50);

    fill("black");
    ellipse (350,130,20,20);
    ellipse (150,130,20,20);
    //eye brows
      fill("white");
    arc(150, 70, 30, 30, PI, 0);
    arc(350, 70, 30, 30, PI, 0);

    //mouth
    arc(250, 300, 150, 80, 0, PI);
    arc(mouseX , mouseY, 50, 50, QUARTER_PI, PI*1.75);
    fill("black");
    arc(250, 310, 130, 60, 0, PI);


    //nose
      fill("white");
    //arc(250, 220, 80, 80, 0, PI);
    triangle(200, 250, 300, 250, 250, 150);

    stroke ('red');
    point(width/2,height/2);
}
