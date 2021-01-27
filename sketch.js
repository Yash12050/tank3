const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimg,barrel1,ground,obstacle1,life,gameState;
var ob = [];
var launchX,launchY;

function preload() {
}

function setup(){
    createCanvas(displayWidth,displayHeight-100);
    engine = Engine.create();
    world = engine.world;
   //engine.world.gravity.y = 0;

    barrel1 = new barrel();
    ground = new Ground(displayWidth/2,displayHeight,1,600);
    pea1 = new pea();
    life = 3;
}

function draw()
{   
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(displayWidth/2,displayHeight/2,600,800);

    if(frameCount%60===0)
    {
     ob.push(new obstacle(random(width/2-100,width/2+200),0));
    }

    for(var i = 0; i < ob.length; i++){
     ob[i].display();
     if(ob[i].body.position.y>500){
         life = life-1;
         World.remove(world,ob[i].body);
     }
     if(detectcollision(ob[i],pea1)){
         World.remove(world,ob[i].body);
         World.remove(world,pea1.body);
     }
    }

    pea1.display();
    barrel1.display();
    textSize(15);
    fill("white");
    text("Lives:"+life,800,50);
    
    //if (keyIsDown(32)) {
      //  pea1.attach(barrel1.body)
   // }
    
}
function detectcollision(objectA,objectB){
    var distance=dist(objectA.x, objectA.y, objectB.x, objectB.y)
    if(distance<=objectB.r+objectA.r){
      return true
    }
}
/* function keyReleased() {
    // Call the shoot method for the cannon.
    if (keyCode === (32)) {
        flag = "launch"

        pea1.shoot();
    }
}
    */


/* function keyPressed(){
    if (keyCode===32){
       
        pea1.display();
    }
} */