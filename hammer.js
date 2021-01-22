class Hammer {
    constructor(x,y) {
      var options = {
      'density':2,
      'friction':1.0,
      'restitution':0.5
      }
      this.body = Bodies.rectangle(x,y,120,40,options);
      this.width = 120;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      push();
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");  
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
      pop();

    }
  };