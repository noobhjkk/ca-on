const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg;
var tower,towerImg;
var ground;
var canon;
var angle=15;

function preload() {
  backgroundImg=loadImage("./assets/background.gif");
  towerImg=loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)

  //static,freaccion,restauracion xd
  var options={
    isStatic:true
   };



   ground=Bodies.rectangle(0,height-1,width*2,1,options);
   World.add(world,ground);

   tower=Bodies.rectangle(160,350,160,310,options);
   World.add(world,tower);

   canon=new Canon(180,110,130,100,angle);
   
   

}

function draw() {
  image(backgroundImg,0,0,1200,600);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1);
  push();
  imageMode(CENTER);
  image(towerImg,tower.position.x,tower.position.y,160,310);
  pop();  
  canon.display();  

}
