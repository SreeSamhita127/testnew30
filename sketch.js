const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Particle = [];
var plinko = [];

function setup() {
    createCanvas(480,800);

    engine = Engine.create();
	world = engine.world;
    Engine.run(engine)

    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,50));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,150));        
    }
    for (var j = 40; j <= width; j = j + 50){
        plinko.push( new Plinko(j,250));
    }
    for(var j = 15; j <= width; j = j+ 50){
        plinko.push(new Plinko(j,350));        
    }

    base = new Base(0,780,480,20);

    div1 = new Division(0,605);
    div2 = new Division(80,605);
    div3 = new Division(160,605);
    div4 = new Division(240,605);
    div5 = new Division(320,605);
    div6 = new Division(400,605);
    div7 = new Division(480,605);


  }
  
  function draw() {
    background(0);  
    Engine.update(engine);
   
   fill("grey");
   base.display();
   div1.display();
   div2.display();
   div3.display();
   div4.display();
   div5.display();
   div6.display();
   div7.display();


   for (var i = 0; i < plinko.length; i++) {
     
    plinko[i].display();
  }

   if(frameCount%60 === 0){
    Particle.push(new Particle1( random( width/2-30,width/2+30), 10, 10));
  }

   for (var j = 0; j < plinko.length; j++) {
   
    plinko[j].display();
  }

    drawSprites();
  }