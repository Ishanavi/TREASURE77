class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(0,100);
    car1.addImage("car1",car1_img);
    
    car2 = createSprite(0,300);
    car2.addImage("car2",car2_img);

    car3 = createSprite(0,500);
    car3.addImage("car3",car3_img);

    car4 = createSprite(0,700);
    car4.addImage("car4",car4_img);

    treasure1 = createSprite(5380,330);
    treasure1.addImage("t1",t1);
  
    treasure2=createSprite(5380,480);
    treasure2.addImage("t2",t5);

    treasure3=createSprite(5380,620);
    treasure3.addImage("t3",t1);

    treasure4=createSprite(5380,180)
    treasure4.addImage("t4",t5);
    
    
   
    treasure1.scale=0.2;
    treasure2.scale=0.05;
    treasure3.scale=0.2;
    treasure4.scale=0.05;

    game.subs();

    
    cars = [car1, car2, car3, car4];
    car1.scale=0.6;
    car2.scale=0.6;
    car3.scale=0.6;
    car4.scale=0.6;

    //subs = [sub1,sub2,sub3,sub4];
    

   
  }

  play(){
    form.hide();
    

    text("Score:"+score,displayWidth-200,40);
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(track);
      image(track, -displayWidth,displayHeight,displayWidth*5, displayHeight);
      
      var display_position = 100;

      


      //index of the array
      var index = 0;
      
      //x and y position of the cars
      var x;
      var y = 25 ;
      

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
      
        //position the cars a little away from each other in x direction
        //You can change the 100 and set accordingly.

        y = y + 150;
       
        //use data form the database to display the cars in y direction
       // y = displayHeight - allPlayers[plr].distance;

        x = displayWidth + allPlayers[plr].distance;
        
        cars[index-1].x = x;
        cars[index-1].y = y;

        
      


      
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
         
          cars[index - 1].shapeColor = "red";

          stroke(30);
          stroke("white");
          line(700,250,5370,250);
          line(700,560,5370,560);
          line(700,410,5370,410);
        

  //////////////////////////////////////////////////////////////////////////////////

         if(frameCount%50===0)
    {
      var obs2 = createSprite(random(1500,4050),random(160,700),10,10);
      obs2.scale=0.13;
      obs2.addImage(d2);
      //obs2.lifetime=300;
      ob1G.add(obs2);

      for(var i=0;i<ob1G.length;i++)
  {

      if(cars[index-1].isTouching(ob1G.get(i)))
    {
      score=score+10;
      ob1G.get(i).destroy();
      console.log("isTouching");
    }

  }
       }
         
  
  ///////////////////////////////////////////////////////////////////////

  if(frameCount%50===0)
  {
    var obs1 = createSprite(random(1500,4050),random(160,700),10,10);
    obs1.scale=0.1;
    obs1.addImage(d1);
    //obs2.lifetime=300;
    ob2G.add(obs1);

    for(var i=0;i<ob2G.length;i++)
{

    if(cars[index-1].isTouching(ob2G.get(i)))
  {
    score=score+10;
    ob2G.get(i).destroy();
    console.log("isTouching");
  }

}
     }

//////////////////////////////////////////////////////////////////////////////////

if(frameCount%50===0)
{
  var obs4 = createSprite(random(1500,4050),random(160,700),10,10);
  obs4.scale=0.3;
  obs4.addImage(r2);
  //obs2.lifetime=300;
  ob4G.add(obs4);

  for(var i=0;i<ob4G.length;i++)
{

  if(cars[index-1].isTouching(ob4G.get(i)))
{
  score=score+10;
  ob4G.get(i).destroy();
  console.log("isTouching");
}

}
   }

////////////////////////////////////////////////////////////////////////////////////

if(frameCount%50===0)
{
  var obs5 = createSprite(random(1500,4050),random(160,700),10,10);
  obs5.scale=0.6;
  obs5.addImage(mb);
  //obs2.lifetime=300;
  ob5G.add(obs5);

  for(var i=0;i<ob5G.length;i++)
{

  if(cars[index-1].isTouching(ob5G.get(i)))
{
  score=score+20;
  ob5G.get(i).destroy();
  console.log("isTouching");
}

}
   }

///////////////////////////////////////////////////////////////////////////////////////



          camera.position.y = displayHeight/2;
          camera.position.x = cars[index-1].x;
        }
       
       // textSize(15);
       // text(allPlayers[plr].name + ": " + allPlayers[plr].distance,display_position,120);
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

   
    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
      console.log(player.distance);
    }


    
    
    drawSprites();

    

  }

  end(){
    
    console.log("Game Ended");
    console.log(player.rank);
    background(bg2);
    //game.update(2);
    textSize(40);
    fill("white");
    text("Game Ended!",200,200);
    text("Rank:"+score,300,300);
    
  }





subs()
{
    sub1=createSprite(100,100,10,10);
    sub1.addImage("s1",sub);

    sub2=createSprite(100,230,10,10);
    sub2.addImage("s2",sub);

    sub3=createSprite(100,370,10,10);
    sub3.addImage("s3",sub);

    sub4=createSprite(100,500,10,10);
    sub4.addImage("s4",sub);

    sub1.scale=0.15;
    sub2.scale=0.15;
    sub3.scale=0.15;
    sub4.scale=0.15;
}





}
