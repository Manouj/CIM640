var canvas;
var person;
var bullet=[];
var bulletDist;
var toggle = false;
var obstacles = [];
var bgImg;
var x1 = 0;
var x2;
var scrollSpeed = 0.5;

var tail = [];
var tailSize;
var player;
var sizeY =10;
var sizeYneg = 10;
var sizeToggle = false;
var hit = false;
var score=0;
var isHit=[];

function preload(){
bgImg = loadImage("bg.png ");
player = loadImage("player.png");
}

function setup() {
  // put setup code here
   canvas = createCanvas(window.innerWidth, window.innerHeight);
   person = new Person();
   x2 = width;


  obstacles[0] = new Obstacles();
  for(var j=0; j<50; j++)
  {
  obstacles[j].display();

  obstacles.push(new Obstacles());
}




}


function draw() {
  // put drawing code here
   image(bgImg, x1, 0, width, height);
   image(bgImg, x2, 0, width, height);

   if(sizeY <= 10)
   {
    sizeToggle = true;
   }

   if(sizeY >= 300)
   {
     sizeToggle = false;
   }

   if(sizeToggle == true)
   {
     sizeY = sizeY+5;
   }
   else {
     sizeY = sizeY -5;
   }


   noStroke();

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  fill(240,50)
  //platform;
  //

  rect(0,0,200,height/2);
  person.update();
  person.edges();
  person.display();
  for(var j=0; j< obstacles.length; j++)
  {
    obstacles[j].display();
      obstacles[j].update();
  }

  for(i=0; i<tail.length;i++)
  {
  tail[i].display();
  tail[i].update();

  }
rect(800,0,20,sizeY);
rect(800, 0, 20, sizeY);
rect(800, height/2, 20, sizeY);

rect(700, 250, 20, sizeY);
rect(700, height/2, 20, sizeY);

rect(600, 0, 20, sizeY);
rect(600, height/2, 20, sizeY);

  for(var i=0; i<bullet.length; i++)
  {
    bullet[i].display();
    bullet[i].update();

    hit = collideRectCircle(800,0,20,sizeY, bullet[i].x,bullet[i].y,1,1)
    ||collideRectCircle(800, height/2, 20, sizeY, bullet[i].x,bullet[i].y,1,1)
    ||collideRectCircle(700, 250, 20, sizeY, bullet[i].x,bullet[i].y,1,1)
    ||collideRectCircle(700, height/2, 20, sizeY, bullet[i].x,bullet[i].y,1,1)
    ||collideRectCircle(600, 0, 20, sizeY, bullet[i].x,bullet[i].y,1,1)
    ||collideRectCircle(600, height/2, 20, sizeY, bullet[i].x,bullet[i].y,1,1);
    if(hit){ //change color!
    fill(000);
    rect(300,10,10,10);
    isHit = true;

   }
   else
   {
     isHit=false;
   }




    if(bullet[i].x > person.pos.x+800)
    {
    bullet.splice(i,1);
    console.log(isHit);
    if(isHit[i]==true)
    {

    }
    else
    {
      score++;
    }
    }


    console.log(score);

    // for(j=0;j<obstacles.length;j++)
    // {
    //
    //   if(bullet[i].x>obstacles[j].x+200 )
    //   {
    //     if(bullet[i].y>obstacles[j].y&&bullet[i].y<obstacles[j].y+50)
    //     {
    //     bullet.splice(i,1);
    //     obstacles.splice(j,1);
    //     }
    //   }
    // }

  }


  fill(240,50);
  rect(1000,0,800,height/2);

  fill(000);
  noStroke();
  rect(0,380,width,height/2);

//shutters
  fill(000)

  rect(800, 0, 20, sizeY);
  rect(800, height/2, 20, sizeY);

  rect(700, 250, 20, sizeY);
  rect(700, height/2, 20, sizeY);

  rect(600, 0, 20, sizeY);
  rect(600, height/2, 20, sizeY);

  var gravity = createVector(0,0.2);
  person.applyForce(gravity);




 if (keyIsPressed && key == ' ') {
   var jump = createVector(0,-0.4);
   person.applyForce(jump);
   tail.push(new Tail());

 }


fill(255)
 textSize(50);
 text('Score:', 700,450);
 text(score, 850,450);

}






function Person(x, y) {
  this.pos = createVector(200, 380);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);


  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill("blue");
    image(player,this.pos.x,this.pos.y-80,80,80);
    // rect(this.pos.x,this.pos.y-50,20,50);
  }

  this.edges = function() {
    if (this.pos.y > 380) {
      this.vel.y *= 0;
      this.pos.y = 380;
    }

    if (this.pos.y < 50) {
      this.vel.y *= 0;
      this.pos.y = 50;
    }

    // if (this.pos.x > width) {
    //   this.vel.x *= -1;
    //   this.pos.x = width;
    // }
  }
}



function Bullet(x,y)
{
  this.x = person.pos.x+40;
  this.y= person.pos.y-40;
  var isHit = false;

   this.display = function()
   {
     fill(000);
     ellipse(this.x,this.y,10,10);
   }

   this.update = function()
   {
     this.x = this.x+10;
   }
}


function Tail(x,y)
{
  this.x = person.pos.x;
  this.y= person.pos.y;


   this.display = function()
   {
    tailSize = random(0,30);
     fill(225,50,50,150);
     stroke(225,150,50);
     ellipse(this.x,this.y,tailSize,tailSize);

   }

   this.update = function()
   {
     this.x = this.x-8;


   }
}



function Obstacles(x,y)
{
  this.x = random(300,15000);
  this.y = random(50,300);
  this.display = function()
 {

   fill(000,50);
   rect(this.x+300,this.y,50,50);

 }

 this.update = function()
 {
   this.x = this.x-1;
 }

}

function keyPressed()
{
  if(key=='b'&& bullet.length<3)
  {
    bullet.push(new Bullet());
  }
  if(key=='p')
  {
    var jump = createVector(0,-2);
    person.applyForce(jump);

    console.log(obstacles.length);

  }
  if(key=='o')
  {
    for(var j=0; j<50; j++)
  {
    obstacles[j].display();
    obstacles.push(new Obstacles());
  }
}

}

function mousePressed()
{
if( bullet.length<3){
    bullet.push(new Bullet());
}
}
