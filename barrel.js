class barrel{
  constructor(){
    var options = {
      isStatic:true
    }
    this.body = Bodies.rectangle(displayWidth/2,600,10,60,options);
    World.add(world,this.body);
  }
  display(){
    push();
    translate(width / 2, height / 2+200);
    angleMode(DEGREES); 
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    rotate(a);
    fill("black");
    rectMode(CENTER);
    rect(20,0,60,10);
    pop();

    // launchX = this.body.position.x + ((this.height + 10) * cos(angle));
    // launchY = this.body.position.y - ((this.height - 10) * sin(angle));
  }
}
