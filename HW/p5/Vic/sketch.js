//Tip Tap Toe : tic tac toe for dance schools

var rectSize = 100;
//
var rect1X = 50;
var rect1Y = 75;
var rect2X = 150;
var rect2Y = 75;
var rect3X = 250;
var rect3Y = 75;
//row2 square
var rect4X = 50;
var rect4Y = 175;
var rect5X = 150;
var rect5Y = 175;
var rect6X = 250;
var rect6Y = 175;
//row3 square
var rect7X = 50;
var rect7Y = 275;
var rect8X = 150;
var rect8Y = 275;
var rect9X = 250;
var rect9Y = 275;
//
var counter = [0,0,0,0,0,0,0,0,0];


//

var tip;
var tap;
var selectedImage;

var Player1 = true;
var Player2 = false;
var NewGame = false;

var value = 0

// var Player1BoxX = [];
// var Player1BoxY = [];
// var Player2BoxX = [];
// var Player2BoxY = [];
//
// var holdDrawing = false;
// var choice = 0;
// var player1Turn = 1;
// var player2Turn = 1;
//

// var controls = {
//                   "Player1" : [60,400,50,"green"],
//                   "Player2" : [110,400,50,"red"],
//                   "Reset" : [160,400,50,"blue"],
//                 };

//
function setup() {
  // put setup code here
  createCanvas(400,400);
  selectedImage = tip;
  // for(var keys in controls){
  //   console.log(keys + " values: " + controls[keys]);
  // }

}

function preload() {
  tip = loadImage('assets/tip.png');
  tap = loadImage ('assets/tap.png');
}

function draw() {
  // put drawing code here
  background("pink");

  textSize(20);
  text("Tip Tap Toe", 20,30);
  fill("gray");

  // BOX1

  //row 1 squares
  // rect(rect1X,rect1Y,rectSize,rectSize);
  rect(rect1X,rect1Y,rectSize,rectSize);
  rect(rect2X,rect2Y,rectSize,rectSize);
  rect(rect3X,rect3Y,rectSize,rectSize);
  //row 2 square
  rect(rect4X,rect4Y,rectSize,rectSize);
  rect(rect5X,rect5Y,rectSize,rectSize);
  rect(rect6X,rect6Y,rectSize,rectSize);
  //row 3 square
  rect(rect7X,rect7Y,rectSize,rectSize);
  rect(rect8X,rect8Y,rectSize,rectSize);
  rect(rect9X,rect9Y,rectSize,rectSize);

  //
  console.log("mouseX: " + mouseX + " mouseY: " + mouseY);

// PLAYER 1 BUTTON
  tipButton = createButton("Player 1: Ballerina");
  tipButton.position(25,45);
  tipButton.mousePressed(function(){
    Player1=true;
    Player2=false;
    selectedImage = tip;
    console.log("player 1: " + Player1);
  });



// PLAYER 2 BUTTON
  tipButton = createButton("Player 2: Tap Dancer");
  tipButton.position(158,45);
  tipButton.mousePressed(function(){
    Player1=false;
    Player2=true;
    selectedImage = tap;
      console.log("player2: " + Player2);
  });

  // NEW GAME BUTTON
  tipButton = createButton("New Game");
  tipButton.position(300,45);
  tipButton.mousePressed(function(){
    if(NewGame == false){
      NewGame = true;
    }else{
      NewGame = false;
    }
      console.log("newGame: " + NewGame);
    });


    if(mouseX>rect1X && mouseX<rect1X+(rectSize*3) && mouseY>rect1Y && mouseY< rect1Y+(rectSize*3))
    {
      if(Player1==true && Player2 == false)
      {
        imageMode(CENTER);
        image(tip,mouseX,mouseY,tip.width/3,tip.height/3);
      }
      else if (Player1==false && Player2 == true)
      {
        imageMode(CENTER);
        image(tap,mouseX,mouseY,tip.width/3,tip.height/3);
      }
    }

    //increasing counter value of each box when clicked

    if(mouseX>rect1X && mouseX<rect1X+rectSize && mouseY>rect1Y && mouseY< rect1Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[0] = 1;
      }
    }

    if(mouseX>rect2X && mouseX<rect2X+rectSize && mouseY>rect2Y && mouseY< rect2Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[1] = 1;
      }
    }

    if(mouseX>rect3X && mouseX<rect3X+rectSize && mouseY>rect3Y && mouseY< rect3Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[2] = 1;
      }
    }
    if(mouseX>rect4X && mouseX<rect4X+rectSize && mouseY>rect4Y && mouseY< rect4Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[3] = 1;
      }
    }
    if(mouseX>rect5X && mouseX<rect5X+rectSize && mouseY>rect5Y && mouseY< rect5Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[4] = 1;
      }
    }
    if(mouseX>rect6X && mouseX<rect6X+rectSize && mouseY>rect6Y && mouseY< rect6Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[5] = 1;
      }
    }
    if(mouseX>rect7X && mouseX<rect7X+rectSize && mouseY>rect7Y && mouseY< rect7Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[6] = 1;
      }
    }
    if(mouseX>rect8X && mouseX<rect8X+rectSize && mouseY>rect8Y && mouseY< rect8Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[7] = 1;
      }
    }
    if(mouseX>rect9X && mouseX<rect9X+rectSize && mouseY>rect9Y && mouseY< rect9Y+rectSize)
    {
      if(mouseIsPressed)
      {
        counter[8] = 1;
      }
    }





    //displaying image in each box if counter value of that box is > 0

    for(i=0; i<counter.length; i++)
    {
      if(counter[0]>0)
      {
        image(selectedImage,rect1X+50,rect1Y+50,tip.width/3,tip.height/3);
      }
      if(counter[1]>0)
      {
        image(selectedImage,rect2X+50,rect2Y+50,tip.width/3,tip.height/3);
      }
      if(counter[2]>0)
      {
        image(selectedImage,rect3X+50,rect3Y+50,tip.width/3,tip.height/3);
      }
      if(counter[3]>0)
      {
        image(selectedImage,rect4X+50,rect4Y+50,tip.width/3,tip.height/3);
      }
      if(counter[4]>0)
      {
        image(selectedImage,rect5X+50,rect5Y+50,tip.width/3,tip.height/3);
      }
      if(counter[5]>0)
      {
        image(selectedImage,rect6X+50,rect6Y+50,tip.width/3,tip.height/3);
      }
      if(counter[6]>0)
      {
        image(selectedImage,rect7X+50,rect7Y+50,tip.width/3,tip.height/3);
      }
      if(counter[7]>0)
      {
        image(selectedImage,rect8X+50,rect8Y+50,tip.width/3,tip.height/3);
      }
      if(counter[8]>0)
      {
        image(selectedImage,rect9X+50,rect9Y+50,tip.width/3,tip.height/3);
      }

    }

  }
