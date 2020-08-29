const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  stage1, stage2;
var block1,block2,block3,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  stage1=new Stage (200,200,50,50);
  stage2=new Stage (400,400,50,50);

  block1=new Block (200,350,20,10);
  block2=new Block (200,350,20,10);
  block3=new Block (200,350,20,10);
  block4=new Block (200,350,20,10);
  block5=new Block (200,350,20,10);
  block6=new Block (200,350,20,10);
  block7=new Block (200,350,20,10);
  block8=new Block (200,350,20,10);
  block9=new Block (200,350,20,10);
  block10=new Block (200,350,20,10);
  block11=new Block (200,350,20,10);
  block12=new Block (200,350,20,10);
  block13=new Block (200,350,20,10);
  block14=new Block (200,350,20,10);
  block15=new Block (200,350,20,10);
  block16=new Block (200,350,20,10);
}

function draw() {
  background(255,255,255);  

  stage1.display();
  stage2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  drawSprites();
}