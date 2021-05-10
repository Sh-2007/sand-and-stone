
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var ground;
var iron;
var sand;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 hammer = new Hammer();
 stone = new Stone();
 ground = new Ground();
 iron = new Iron();
 sand = new Sand();

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  stone.display();
  ground.display();
  iron.display();
  sand.display();
  
  drawSprites();
 
}



