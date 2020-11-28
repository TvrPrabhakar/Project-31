const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world;
var ground;
var particles = [];
var plinkos = [];
var pillars = [];


var pillarsHeight=300;

function setup() {
  createCanvas(480,800);
  //background("black");
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,800,10);
  
  //createSprite(400, 200, 50, 50);
  //inserting values in array of pillars
  for (var k = 0;k <=width; k=k + 80){
    pillars.push(new Divisions(k,height-pillarsHeight/2,10,pillarsHeight));
    console.log(k,height-pillarsHeight/2,10,pillarsHeight);
  }
  //inserting values in array of plinkos 4 rows

  for (var a = 40; a< width;a=a+50){
    plinkos.push(new Plinko(a,75,15))
  }
  for (var a = 15; a< width-10;a=a+50){
    plinkos.push(new Plinko(a,175,15))
  }
  for (var a = 40; a< width-20;a=a+50){
    plinkos.push(new Plinko(a,275,15))
  }
  for (var a = 15; a< width-30;a=a+50){
    plinkos.push(new Plinko(a,375,15))
  }
 
}
function draw() {
  Engine.update(engine);
  background("black");
  ground.display();
  
  for (var k = 0;k<pillars.length;k++){
    pillars[k].display();
  } 
  for(var a = 0;a<plinkos.length;a++){
    plinkos[a].display();
  }
  //displaying particles
  
  if(frameCount%10===0){
    particles.push(new Particles(random(width/2-10,width/2+10),5,5));
    //console.log("adding particles",particles.length);
  }
  for(var m = 0;m<particles.length;m++){
    particles[m].display();
  }
  drawSprites();
  text("Balls: "+particles.length,5,20);
}