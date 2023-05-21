
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var air;
var bg_img;
var blower;



function preload(){
  bg_img = loadImage("background.png");
  food = loadImage("melon.png");

  air = loadSond("air.wav");
}


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
  blower = createImg("balloon.png");
  blower.position(10,250);
  blower.size(150,100);
  blower.mouseClicked(airblow);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

function airblow(){
  Matter.Body.applyForce(fruit,{x:0,y:0},{x:0.01,y:0});
  air.play();
}
