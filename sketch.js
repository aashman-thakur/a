const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,canvas;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,400,1200,50)
    bin1=new Bin(1000,365,150,20)
    bin2=new Bin(925,315,20,100)
    bin3=new Bin(1075,315,20,100)
    paperBall=new ball(100,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    bin1.display();
    bin2.display();
    bin3.display()
    paperBall.display()
    //maam the ball always go out of the canvas through the ground and bin
}