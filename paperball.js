class ball {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,20, options);
      this.radius=20
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      push();
      if(keyCode=== UP_ARROW){
        pos.x=mouseX
        pos.y=mouseY
      }
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill(225);
      strokeWeight(10)
      stroke('white')
      ellipse(0, 0,20);
      pop();
    }
  };
  