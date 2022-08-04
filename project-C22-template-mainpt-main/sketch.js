const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher,playerimage;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

var options={

isStatic:true


}

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  playerBase=Bodies.rectangle(200,300,180,150,options);
  World.add(world,playerBase);
  //criar corpo do jogador
  player=Bodies.rectangle(250,140,50,180,options);
  World.add(world,player);


}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  //exibir a imagem do jogador usando a função image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  //exibir a imagem da base do jogador usando a função image()
  image(playerimage,player.position.x,player.position.y,50,180);

  

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
