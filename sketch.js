const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var polygonimg;
var ground;
var stand1,stand2;
var slingshot;
var ball;
var block1;

function preload(){
polygonimg = loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();

    stand1 = new  Stand(390,300,250,10);
    stand2 = new  Stand(700,200,200,10);
    

    block1 = new Block(300,275,30,40);
    block2 = new Block(340,275,30,40);
    block3 = new Block(380,275,30,40);
    block4 = new Block(320,235,30,40);
    block5 = new Block(360,235,30,40);
    block6 = new Block(340,195,30,40);

    block7 = new Block(700,175,30,40);
    block8 = new Block(740,175,30,40);
    block9 = new Block(780,175,30,40);
    block10 = new Block(720,135,30,40);
    block11= new Block(760,135,30,40);
    block12= new Block(740,95,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new Slingshot(this.ball,{x:100,y:200});

}

function draw(){
    background("red");
    ground.display();
    stand1.display();
    stand2.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    imageMode (CENTER);
    image(polygonimg,ball.position.x,ball.position.y,40,40);
slingshot.display();
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly()
}