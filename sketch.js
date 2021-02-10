/*var str = "This is a string";
console.log(str);

var num = 100;
console.log(num);

var bool = true;
console.log(bool);

var obj;
console.log(obj);

obj = null;
console.log(obj);

var arr = [10,20,30];
console.log(arr[1]);

var arr1 = [[10,20],[30,40],[50,60]];
console.log(arr1[2][0]);

var arr2 = ["name",10,true];
console.log(arr2);

arr.push(40);
console.log(arr);

arr.pop();
console.log(arr);*/




const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld, engine;
var box1, box2, box3, box4, box5;
var ground;
var pig,pig1;
var log1, log2, log3, log4, conslog;
var bird;
var back, backImage;
var sling;
var ground2;
var gamestate = "onSling";

function preload(){
  backImage = loadImage("sprites/bg.png");

}
function setup() {
  createCanvas(1200,400);
  
  engine = Engine.create();
  myWorld = engine.world;

  box1 = new Box(700,300,70,70);
  box2 = new Box(920,300,70,70);
  box3 = new Box(700,250,70,70);
  box4 = new Box(920,250,70,70);
  box5 = new Box(810,160,70,70);
  ground = new Ground(600,400,1200,20);
  pig = new Pig(810,350);
  pig1 = new Pig(810,200);
  log1 = new Log(810,280,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(750,100,150,PI/7);
  log4 = new Log(880,100,150,PI/-7);
  //conslog = new Log(400,200,100,PI/2);
  bird = new Bird(200,50);
  sling = new SlingShot(bird.Body,{x: 200, y:50});
  ground2 = new Ground(150,305,300,170);
  
  
}

function draw() {
  background(backImage);  
  
  Engine.update(engine);
 
 box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig.display();
  pig1.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  //conslog.display();
  bird.display();
  sling.display();
  ground2.display();
}
function mouseDragged(){
  if(gamestate !== "Launched"){
  Matter.Body.setPosition(bird.Body,{x:mouseX, y:mouseY});
}
}

function mouseReleased(){
  sling.fly();
  gamestate = "Launched";
}

/*function keyPressed(){
  if(keyCode === 32){
    sling.attach(bird.Body);
  }
}*/
