var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var distance = 0;

var form, player, game;
var cars,car1,car2,car3,car4
var track,c1,c2,c3,c4,g;

function preload()
{
  track = loadImage("track.png")
  c1 = loadImage("car1.png")
  c2 = loadImage("car2.png")
  c3 = loadImage("car3.png")
  c4 = loadImage("car4.png")
  g = loadImage("ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
  if(gameState===2)
  {
    game.end();
  }
}
