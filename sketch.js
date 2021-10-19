
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;
var ground;
var leftS;
var rightS;
var side1;
var side2;
var side3;
var ground2;


function setup() {
	createCanvas(1600, 800);
  engine = Engine.create();
	world = engine.world;

   var ball_options={
	   isStatic:false,
	   restitution:0.3,
	   friction:0,
	   density:1.2
   }

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(310, 100, 20, ball_options)
	World.add(world,ball);

  side1=new Ground(1590,height/2,20,height);
	side2 =new Ground(10,height/2,20,height);
	side3=new Ground(width/2,10,width,20);
  ground2 =new Ground(1300,770,220,20);

  ground =new Ground(width/2,790,width,20);
  leftS =new Ground(1400,700,20,120);
	rightS =new Ground(1200,700,20,120);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20,20)


  ground.display();
  ground2.display();
  leftS.display();
  rightS.display();

   side1.display();
   side2.display();
   side3.display();

  }
 

function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
  }
}