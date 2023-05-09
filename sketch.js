//Constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Variables
var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare an array for arrows playerArrows = [ ]
var playerArrows = [];

var arrow;

//Function Setup
function setup() {
  //Canvas
  canvas = createCanvas(windowWidth, windowHeight);

  //Engine/World
  engine = Engine.create();
  world = engine.world;

  //Player Base
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  //Computer Base
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  //Computer
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  //Computer Archer
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}
//Function Draw
function draw() {
  //Backround 
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Player Base/Display Player
  playerBase.display();
  player.display();
  
  //Display Computer Base/Display Computer
  computerBase.display();
  computer.display();
  
  //Display Player Archer/Display Computer Archer 
  playerArcher.display();
  computerArcher.display()

 // Use for loop to display arrow using showArrow() function
 for (var i = 0; i < playerArrows.length; i++) {
  showArrows(i, playerArrows);
}

}

/*********** Choose correct keyPressed() function out of these *************/

//Function keyPressed
function keyPressed() {

  if(keyCode === 32){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    //Function keyPressed Variables
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.y;
    var angle = playerArcher.body.angle+PI/2;
    //New Player Arrow
    var arrow = new PlayerArrow(posX, posY, 100, 10);
    //Arrow Trajectory
    arrow.trajectory = [];
    Matter.Body.setAngle(arrow.body, angle);
    playerArrows.push(arrow);

  }
}
//Function keyReleased
function keyReleased () {

  if(keyCode === 32){
    //call shoot() function for each arrow in an array playerArrows
    if (playerArrows.length) {
      var angle = playerArcher.body.angle+PI/2.4;
      //Angle Trajectory Change
      playerArrows[playerArrows.length - 1].shoot(angle);
    }
  }

}
//Display arrow and Trajectory
function showArrows(index, arrows) {
  arrows[index].display();
  
    
  
 

}