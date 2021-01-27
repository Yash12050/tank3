class pea{
    constructor(){
        var options = {
            restitution:0.7,
            density:0.7
        }
        this.r = 5;
        this.body = Bodies.circle(displayWidth/2,displayHeight/2,this.r,options);
        World.add(world,this.body);
    }

    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("red");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}