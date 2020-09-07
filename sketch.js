const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  stage1, stage2;
var block1,block2,block3,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;
var polygon,slingShot,polygon_image;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
 
 
  stage1=new Stage (1000,335,250,20);
  stage2=new Stage (700,585,250,20);

  block1=new Block (1000,200,40,50);
  block2=new Block (1000,250,40,50);
  block3=new Block (1000,300,40,50);
  block4=new Block (960,250,40,50);
  block5=new Block (1040,250,40,50);
  block6=new Block (960,300,40,50);
  block7=new Block (1040,300,40,50);
  block8=new Block (1080,300,40,50);
  block9=new Block (920,300,40,50);

  block10=new Block (700,500,40,50);
  block11=new Block (700,450,40,50);
  block12=new Block (740,500,40,50);
  block13=new Block (660,500,40,50);
  block14=new Block (700,550,40,50);
  block15=new Block (660,550,40,50);
  block16=new Block (740,550,40,50);
  block17=new Block (620,550,40,50);
  block18=new Block (780,550,40,50);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  text("Press Space to get a second Chance to Play!!",700 ,100);
  textSize(100);

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
  block17.display();
  block18.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,100,20);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}