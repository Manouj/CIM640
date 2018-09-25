var sun;
var moon;
var r = 255;
var g = 255;
var b = 255;

var cX = 50;
var cY = 50;
var cEdge= 20;
var rectX = 50;
var rectY = 75;
var rectSize = 100;

function preload()
{
    sun = loadImage('assets/sun.png');
    moon = loadImage('assets/moon.png')
}

function setup()
{
  // put setup code here
createCanvas(800,400);
}

function draw() {
  // put drawing code here

  background(r,g,b);

  line(width/2,0,width/2,height);
  if(mouseX>=0 && mouseX<width/2)
  {

    image(sun,50,100);

  }
  else if (mouseX>=width/2) {

    image(moon,450,100);

  }


var cDist = dist(cX, cY, mouseX, mouseY);


  textSize(20);
  text("Move over each area",20,20);
  text("cDist is " + cDist, 20, 60) ;
  text("mouseX pos:" + mouseX,20,100);


  if(cDist < 10)
  {
    r=255;
    g=0;
    b=0;
  }
  else{
    r = 255;
    g = 255;
    b = 255;
  }

  if (mouseX >= rectX && mouseX < rectX+rectSize)
  {
    if (mouseY >= rectY && mouseY < rectY+rectSize)
    {
    r=random(255);
    g=random(255);
    b=random(255);
  }
  }

  fill(r,g,b);
  ellipse(cX,cY,cEdge,cEdge);
  rect(rectX,rectY,rectSize,rectSize);

}
