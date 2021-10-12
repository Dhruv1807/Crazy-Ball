
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottomEdge, leftEdge, rightEdge;
var ballOptions, ball

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ballOptions = {
		isStatic: false,
		restitution: 0.8,
		friction: 0,
		density: 3
	  }
	  ball = Bodies.circle(200, 200, 20, ballOptions)
	  World.add(world, ball);

	bottomEdge = new Wall(width/2, 670, width, 20)
	leftEdge = new Wall(500, 625, 10, 70)
	rightEdge = new Wall(650, 625, 10, 70)

	Engine.run(engine);
	ellipse(ball.position.x, ball.position.y, 20);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);  
  background(52);
  Engine.update(engine);
  keyPressed()
  ellipse(ball.position.x, ball.position.y, 20);
  bottomEdge.show()
  leftEdge.show()
  rightEdge.show()
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {
			x: 0,
			y: 0
		  }, {
			x: 2,
			y: 0
		  })
	}
}



