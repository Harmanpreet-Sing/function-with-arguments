
var movingRect,fixedRect;

function setup(){
createCanvas(1300,1000);
movingRect = createSprite(800,500,50,50);
movingRect.debug = true;

fixedRect = createSprite(500,200,50,80);
fixedRect.debug = true;

} 

function draw(){
  background("white")
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(collide(movingRect,fixedRect)){
      movingRect.visible = "false"
      fixedRect.shapeColor = "yellow";
    }
    else {
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "black";
    }
    drawSprites();
  }

function collide(r1,r2){
  if ( r1.x - r2.x < r2.width/2+r1.width/2 
    && r2.x - r1.x < r2.width/2+r1.width/2 
    && r1.y - r2.y < r2.height/2+r1.height/2
    && r2.y - r1.y < r2.height/2+r1.height/2){
  return true }
  else{
    return false
  }
}