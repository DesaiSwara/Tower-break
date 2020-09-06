class Block{
  constructor(x,y,width,height){
      var options = {
          isStatic: false,
          restitution : 0.8 ,
          density : 0.03,
          friction : 0.3
          
      } 
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.visbility=255;
  this.width = width;
  this.height = height;
  World.add(world,this.body)
  
 
 
  }
 display(){
   console.log(this.body.speed);
   if (this.body.speed<3) {
    var pos = this.body.position;
    var angle = this.body.angle;
    rotate(angle);
    rectMode(CENTER);
    translate(pos.x,pos.y);
     rect(0,0,this.width,this.height);
   }
   else{
     World.remove(world,this.body);
     push();
     this.Visibility=this.visibility-5;
     tint(255,this.Visibility);
     pop();
   }

  }
};
  