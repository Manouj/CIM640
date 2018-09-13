var sun;
var moon;
var bgColor=0;
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


  background(240);
  textSize(20);
  color("red");
  text("Move over each area",20,20);
  text("mouseX pos:"+mouseX,20,50);
  fill(bgColor);
  rect(0,0,width,height);
  line(width/2,0,width/2,height);
  if(mouseX<width/2)
  {

    image(sun,50,100);
    bgColor = 255;

  }
  else if (mouseX>width/2) {
    image(moon,450,100);
    bgColor = 000;
  }

}
