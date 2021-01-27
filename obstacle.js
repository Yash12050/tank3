class obstacle {
  constructor(x,y){
    var options = {
      density:0.7,
      restitution:0.7
    }
    this.r = 70
    this.body = Bodies.circle(x,y,this.r,options);
   // this.body.velocity.y = 5;
    this.img = loadImage("rock.png");
    World.add(world,this.body);
  }

  display() {
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(this.body.angle);
  imageMode(CENTER);
  fill("grey");
  image(this.img,0,0,100,this.r);
  pop();
  }
}
