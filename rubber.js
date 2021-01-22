class Rubber {
    constructor(x,y) {
      var options = {
      'density':2,
      'friction':1.0,
      'restitution':0.5
      }
      this.body = Bodies.circle(x,y,20,options);
      this.radius = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("white");  
      fill("darkblue");
      ellipse(pos.x, pos.y, this.radius);
      pop();

    }
  };