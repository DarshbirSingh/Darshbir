
  const Engine = Matter.Engine; 
  const World = Matter.World; 
  const Bodies = Matter.Bodies; 
  var box1,box2,box3,box4,box5
  var ground1
  var bird1,pig1
  var log1,log2,log3,log4
  var engine, world;
   function setup(){
      var canvas = createCanvas(1100,800) 
      engine= Engine.create();
      world = engine.world;

      box1=new Box(700,650,70,70)
      box2=new Box(950,650,70,70)
      pig1=new Pig(825,650)
      bird1=new Bird(100,50)
      log1=new Log(825,600,300,PI/2)
      ground1=new Ground(550,750,1100,50)
   }

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  box1.display();
  box2.display();
  bird1.display();
  pig1.display();
  log1.display();
  ground1.display();

}