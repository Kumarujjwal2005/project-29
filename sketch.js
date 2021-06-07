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

    stand1 = new  Stand(390,100,250,10);
    stand2 = new  Stand(700,200,200,10);
    

    block1 = new Block(300,275,30,40);

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