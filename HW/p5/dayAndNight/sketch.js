var sun;
var moon;
function preload()
{
    sun = loadImage('assets/sun.png');
    moon = loadImage('assets/moon.png')
}

function setup() {
  // put setup code here
createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(sun,100,100);
    image(moon,200,100);
}
