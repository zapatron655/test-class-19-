var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  // creating tower
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  // creating ghost 
  var ghost = createSprite (200,300)
   ghost .addImage("ghost",ghostImg)
  ghost.scale=0.4
  //ghost.velocityY=3




}

function draw() {
  background(200);
  // loading functions 
  jumpghost ()    
  doorclimber ()
 drawSprites()



    

  if(tower.y > 400){
      tower.y = 300
    }



  }


  function doorclimber (){
    if (frameCount%70===0){
    
    
    // creating door sprite
  var door = createSprite(200,100)
door.addImage("door",doorImg)
door.scale=0.7
//door.y = Math.round(random(10,300))  
door.x = Math.round(random(100,300))
door.velocityY=3


var climber = createSprite(200,140)
climber.addImage("climber",climberImg)
climber.scale=0.5
//climber.y = Math.round(random(10,300))
climber.x = Math.round(random(100,300))
climber.velocityY=3


climber.x=door.x
//climber.y=door.y
}
  }


  function jumpghost () { 

// giving space to ghost 
if(keyDown("space")){
  ghost.velocityY = -2

}




  }