//var cow
//var position;
var farmer;

function preload()   {
  bg = loadImage("images/bg1.png")
  cowImage = loadImage("images/cow3.jpg")
  roosterImg = loadImage("images/rooster.jpg")
  farmerImg = loadImage("images/farmer1.jpg")
}


function setup(){
  
  createCanvas(1600,800);

  //cow = createSprite(800,600,10,10)
  //cow.addImage("cow1",cow)
  farmer = createSprite(10,10);

  farmer.x = mouseX  ;
  farmer.y = mouseY;
  farmer.addImage(farmerImg);
  



}

function draw(){
  background(bg);

 text(mouseX+","+mouseY,mouseX,mouseY)

  spawnCows();
  spawnChicken();
  

    drawSprites();
  
}

function spawnCows() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cow = createSprite(800,600,10,10);
    cow.y = Math.round(random(80,120));
    cow.addImage(cowImage);
    //cloud.scale = 0.5;
    cow.velocityX = 3;
    cow.scale = 0.2;

  }}

  function spawnChicken() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var chicken = createSprite(1000,600,10,10);
      chicken.y = Math.round(random(80,120));
      chicken.addImage(roosterImg);
      //cloud.scale = 0.5;
      chicken.velocityX = 3;
      chicken.scale = 0.2;
  
    }}

