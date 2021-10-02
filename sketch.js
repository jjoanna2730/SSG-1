var path,spaceShip, leftBoundary,rightBoundary;
var pathImg,ssImg;
var i;

function preload(){
  pathImg = loadImage("/Assets/path.png");
  ssImg = loadImage("/Assets/Spaceship.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
//path.velocityY = ;
path.scale=1.2;

//creating spaceShip running
spaceShip = createSprite(180,340,30,30);
spaceShip.scale=0.5;
spaceShip.addAnimation("JakeRunning",ssImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  //path.velocityY = 4;
  
  // spaceShip moving on Xaxis with mouse
  spaceShip.x = World.mouseX;
  
  edges= createEdgeSprites();
  spaceShip.collide(edges[3]);
  spaceShip.collide(leftBoundary);
  spaceShip.collide(rightBoundary);
  
  //code to reset the background
 // if(path.y > 400 ){
   // path.y = height/2;
  //}
  
  drawSprites();
}
