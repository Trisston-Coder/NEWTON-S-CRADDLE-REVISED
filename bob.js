class Bob{

    constructor(x,y){
      var options ={
         isStatic: false,
         restitution: 1,
         friction: 0.5,
         density: 1.2
        }
      this.body = Bodies.circle(100, 200, 20,options);
      World.add(world, this.body);
    }

    display(){
       this.radius = 25;
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill("purple");
       ellipse(0,0, this.radius, this.radius)
       pop();
    }
}