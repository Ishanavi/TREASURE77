var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img,treasure1,redFish,tFish,t2,r2,t3;
var treasure2,treasure3,treasure4,sub1,sub2,sub3,sub4,ob2G,ob4G,ob5G,ob1G;
var score=0;

function preload(){
  track = loadImage("../images/BhQ8iO.jpg");
  car1_img = loadImage("../images/diver.png");
  car2_img = loadImage("../images/diver.png");
  car3_img = loadImage("../images/diver.png");
  car4_img = loadImage("../images/diver.png");
  bg2 = loadImage("../images/bg2.jpg");
  
  rf = loadImage("../images/redfish.png");
  t1 = loadImage("../images/t2.png");
  t2 = loadImage("../images/t1.gif")
  
  t5=loadImage("../images/t4.png")
  sub=loadImage("../images/sub.png");

  d1=loadImage("../images/diamond1.gif");
  d2=loadImage("../images/d2.gif");
  r1=loadImage("../images/ruby1.gif");
  r2=loadImage("../images/r2.gif");
  mb=loadImage("../images/moneybag.png");

}

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-160);
  database = firebase.database();

  ob1G = new Group();
  ob2G = new Group();
  ob4G = new Group();
  ob5G = new Group();
  
    background(bg2);

    textSize(30);
    fill(255,128,62);
    text("UNDERWATER TREASURE RACE",windowWidth/2-240,30);

    textSize(25);
    fill(111,255,162);
    text("Goal of the Game: Help the diver to collect the maximum treasure in the least amount of time.",30,100);
    //text("from the sea monsters.",30,130)

    textSize(25);
    fill(255,187,187);
    text("Instructions:",30,195);

    textSize(20);
    fill("red");
    text("1. Press the 'START' button to start the game.",30,230);
    fill("orange");
    text("2. Use right arrow key to move the diver.",30,260);
    fill("yellow");
    text("3. Collecting the diamonds and rubies will score 10 points.",30,290);
    fill(119,255,69);
    text("4. Collecting the money bags will score 20 points.",30,320);
    fill(96,233,255);
    text("5. Get to the finishing line and collect the treasure before the other players. ",30,350);

    textSize(25);
    fill(217,255,91);
    text("BEST OF LUCK!",windowWidth/2-130,400);

    button1 = createButton('START');
    button1.position(windowWidth/2-80,450);

    button1.mousePressed(()=>{
      button1.hide();
      console.log("hello");
    
     game = new Game();
     clear();
     game.getState();
     game.start();
    })



 
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    
    game.play();
    
  }
  if(gameState === 2){
    game.end();
    
  }
}
