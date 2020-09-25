const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,g;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var re={
    'restitution':1.0,
   ' density':0.8,
    'friction':0.8
  }
  ball=Bodies.circle(200,200,50,re)
  World.add(world,ball)
  var go={
    isStatic:true
  }
  g=Bodies.rectangle(400,375,800,50,go)
  World.add(world,g)
}

function draw() {
  background(255,255,150); 
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50);
  rectMode(CENTER)
  rect(g.position.x,g.position.y,800,50);
}