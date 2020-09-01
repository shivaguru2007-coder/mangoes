
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var img;

function preload()
{
	img = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);

	boy = createSprite(250,500,50,10);
	boy.addImage(img);
	boy.scale = 0.12;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ree = new tree(1300,350,300,500)
    round = new ground(800,600,1600,20)
    stone = new Stone(200,200,35,35);
    mango1 = new Mango(1275,175,35,35);
    mango2 = new Mango(1228,258,35,35);
    mango3 = new Mango(1388,252,35,35);
    mango4 = new Mango(1352,175,35,35);
    mango5 = new Mango(1301,275,35,35);

	string1 = new pull(stone.body,{x:172, y:413});

	Engine.run(engine);
}

	
  



function draw() {
  rectMode(CENTER);
  background("cyan");
  ree.display();
  stone.display();
  round.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  string1.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);


  //console.log(mouseX);
  //console.log(mouseY);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string1.fly();
}
function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stone.body,{x:71,y:464})
		string1.attach(stone.body);
	}
}
function detectCollision(lstone,lmango){
	stonePosition = lstone.body.position;
	mangoPosition = lmango.body.position;

	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
	if(distance<=lstone.width+lmango.width){
		Matter.Body.setStatic(lmango.body,false);
	}

}



