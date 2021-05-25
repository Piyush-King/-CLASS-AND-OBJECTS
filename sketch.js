var  countDistanceX=0
var gap=60

function preload()
{}

function setup() {
  createCanvas(9000, 668);

  for( var i = 0 ; i<20 ; i++ ){
  platform1=new Platform(countDistanceX);
  gap = random([0,20,40,60,80])
  countDistanceX=countDistanceX+platform1.rw + gap
  
  }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

