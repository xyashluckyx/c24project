
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer,stone;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(600,height,1200,20);
	hammer=new Hammer(200,200);
	stone=new Stone(900,250,120,120);
	rubber=new Rubber(700,120);
	sand1=new Sand(765,100);
	sand2=new Sand(766,100);
	sand3=new Sand(767,100);
	sand4=new Sand(768,100);
	sand5=new Sand(769,100);
	sand6=new Sand(770,100);
	sand7=new Sand(771,100);
	sand8=new Sand(782,100);
	sand9=new Sand(783,100);
	sand10=new Sand(784,100);
	iron=new Iron(500,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();	

}



