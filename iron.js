class Iron {
    constructor(x,y) {
      var options = {
      'density':2,
      'friction':1.0,
      'restitution':0.5
      }
      this.body = Bodies.rectangle(x,y,80,50,options);
      this.width = 80;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");  
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();

    }
  };