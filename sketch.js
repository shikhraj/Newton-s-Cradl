const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var pinko1;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);

	pinko1 = new Pinko(200,200,30);
	ground = new Ground(240,800,480,10);
	


	
}


function draw() {
  rectMode(CENTER);
  background("grey");
  pinko1.display();
  ground.display();


  drawSprites();

 
}



