var chick,chickImg;
var hen,henImg;

function preload(){
  chickImg= loadImage("chiks img/images (2).png");
  henImg=loadImage("hen img/hen1.gif");

}
function setup() {
  createCanvas(800,800);
  chick= createSprite(200,200,10,10);
  chick.addImage(chickImg);
  chick.scale=0.5;
  hen=createSprite(400,400,10,10);
  hen.addImage(henImg);
  hen.scale=0.5;


  

}

function draw() {
  background(0);  
  drawSprites();
}