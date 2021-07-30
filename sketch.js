var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  cloudImage = loadImage("cloud.png")
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //to generate a random number
  var number = Math.round(random(10,60))
  console.log(number)
}

function draw() {
  background(180);
  
  //console.log(frameCount);
  
  
  if(keyDown("space") && trex.y>=161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn clouds
function spawnClouds(){
  if(frameCount% 60 === 0 ){
    cloud = createSprite (600,100,40,10);
    cloud.y = Math.round(random(50,100))
    cloud.addImage("cloud",cloudImage);
    cloud.scale= 0.4
    cloud.velocityX = -3
    //console.log(cloud.depth)

    //adjust the depth
    //1st cloud = 1, trex = 2
    //2nd cloud = 2, trex = 3
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1

  }
  
}