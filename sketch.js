const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground,holder;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var slingShot;
var polygonimg;

function preload(){
    polygonimg=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    ball = Bodies.circle(40,200,20);
    World.add(world,ball);

    
    ground = new Ground();

    stand1= new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);



    //level two
    box1= new Box(330,235,30,40);
    box2= new Box(360,235,30,40);
    box3= new Box(390,235,30,40);
    box4= new Box(420,235,30,40);
    box5= new Box(435,235,30,40);

    //level three
    box6= new Box(360,195,30,40);
    box7= new Box(390,195,30,40);
    box8= new Box(420,195,30,40);

    //level top
    box9= new Box(390,155,30,40);

    box11 = new Box(700,95,30,40);

    box12 = new Box(730,135,30,40);
    box13 = new Box(700,135,30,40);
    box14 = new Box(670,135,30,40);
    
    box15 = new Box(760,175,30,40);
    box16 = new Box(730,175,30,40);
    box17 = new Box(700,175,30,40);
    box18 = new Box(670,175,30,40);
    box19 = new Box(640,175,30,40);






    
    
    slingshot = new SlingShot(this.ball,{x:100, y:200});
}



function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX + ',' + mouseY,10,15);
    textSize(20);
    fill("blue");
    text("Drag the ball to destroy the blocks ",300,30);
    textSize(10);
    text(" Press space to play again",650,350);

    ground.display();
    stand1.display();
    stand2.display();
    stroke (15);
    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box11.display();
    box12.display();
    fill("gold");
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();


    imageMode(CENTER);
    image(polygonimg,ball.position.x,ball.position.y,50,40);


    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball);
    }
}


    


