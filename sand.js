class Sand {
    constructor(x,y) {
      var options = {
      'density':1,
      'friction':5,
      'restitution':0.5
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke("white");  
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
      pop();

    }
  };