const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 
var ball,ground;
var tank;
function setup(){

    createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(200,200,40,40);
    ground = new Ground(width/2,height,1400,40);
    tank = new Tank(400,400);

}

function draw(){

    background(100);
    Engine.update(engine);
    tank.display();
    ball.display();
    ground.display();
    

}