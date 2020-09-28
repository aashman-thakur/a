const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,g,box3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   box1=new Box(500,100,50,100) 
   box2=new Box(600,200,50,50)
  g=new Ground(200,375,width,30)
  box3=new Box(470,10,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    box2.display()
    g.display()
    box3.display()
}