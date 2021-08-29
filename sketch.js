

function preload(){
 // load the images
  earthImg=loadImage("eathImg.png")
  starImg=loadImage("star.png")
  fighterPlaneImg=loadImage("fighterPlane (1).png")
  missileImg=loadImage("missile.png")
}

function setup() {
//create the sprites
  createCanvas(1050,800);
  Earth=createSprite(530,800,1100,150)
  Earth.addImage(earthImg)
  Earth.scale=1.5

  for (var s=0;s<50;s++){
    star=createSprite(random(50,width-50),random(50,500))
    star.addImage(starImg)
    star.scale=0.05
  }

  fighterPlane=createSprite(width/2,550)
  fighterPlane.addImage(fighterPlaneImg)
  fighterPlane.scale=0.4
  


  var ang=0;
}

function draw() {
  background(0,0,0);  
  drawSprites();

  console.log(mouseX+","+mouseY)
  
  fighterPlane.x=mouseX
  if (keyDown("left")){
    fighterPlane.rotation-=5
  }

  if (keyDown("right")){
    fighterPlane.rotation+=5
  }


}

function keyPressed(){
  missile=createSprite(fighterPlane.x,fighterPlane.y-30)
  missile.addImage(missileImg)
  missile.scale=0.2
  missile.velocityY=-10
}