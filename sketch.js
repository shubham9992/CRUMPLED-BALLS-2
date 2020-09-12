
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
var ground;
var paper,count=1;
var dustbinM,dustbinL,dustbinR;
var dustbinL1,dustbinL2,dustbinL3;
var dustbinM1;
var paperImg;
function preload()
{
	
}

 function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 	//Create the Bodies Here.
	ground=new Ground(600,height-10,1200,10);
	dustbinL=new Dustbin(540,610,20,100);
	//  dustbinL1=new Dustbin(540,610,20,100);
	// dustbinL2=new Dustbin(590,610,20,100);
	// dustbinL3=new Dustbin(640,610,20,100);
	dustbinM=new Dustbin(650,660,200,20);
	//dustbinM1=new Dustbin(600,550,270,20);
	dustbinR=new Dustbin(760,610,20,100);
	paper=new PAPER(50,600,20);
	Engine.run(engine);
  
 }


 function draw() {
   rectMode(CENTER);
   Engine.update(engine);
   background(255);
	paper.display();
	ground.display();
	dustbinL.display();
	//  dustbinL1.display();
	// dustbinL2.display();
	// dustbinL3.display();
	dustbinM.display();
	//dustbinM1.display();
	dustbinR.display();
    drawSprites(); 
}
function keyPressed(){
     if(keyCode===UP_ARROW){
           Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
		//    Body.setAngle(paper.body,PI/4);
		  // return true;
        }
		//return false;
}   