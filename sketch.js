var hr
var mn
var sc
//angleMode(DEGREES)

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
 stroke(255,0,0)
 strokeWeight(7)

 angleMode(DEGREES)
}

function draw() {
  background("black"); 
  translate(200,200)
  rotate(-90)
  hr=hour()
  mn=minute()
  sc=second()
  
  scAngle=map(sc,0,60,0,360) 
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

//translate()
push ()

rotate (scAngle)

stroke(255,0,0)
strokeWeight (7)
line(0,0,100,0)
pop ()
push ()
rotate (mnAngle)

stroke(0,255,0)
strokeWeight (7)
line(0,0,100,0)
pop ()
push ()
rotate (hrAngle)

stroke(0,0,255)
strokeWeight (7)
line(0,0,100,0)
pop ()
noFill()
stroke(255,0,0)
arc (0,0,300,300,0,scAngle)
stroke(0,255,0)
arc (0,0,280,280,0,mnAngle)
stroke(0,0,255)
arc (0,0,260,260,0,hrAngle)
  drawSprites();
}