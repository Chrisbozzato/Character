var p1
var x=200
var y=200
var a1
function setup() {
  createCanvas(400, 400);
  p1 = new player
  a1= new animation
}

function draw() {
  background(220);
  p1.show()
  p1.move()
  
  if(mouseIsPressed){
  a1.show()}
    else{stroke(0,0,0)}
}

class player{
  
  show(){
square(x,y, 20)
  }
  move(){
if(keyIsDown(RIGHT_ARROW)){
  x ++
}
    else if(keyIsDown(LEFT_ARROW)){
      x--
    }
    else if(keyIsDown(UP_ARROW)){
      y--
    }
    else if(keyIsDown(DOWN_ARROW)){
      y++
    }
  }
  attack(){
    if(keyIsDown(SPACE)){
      
    }
  }
}
class animation{
  show(){
    stroke(255, 0, 0)
  line(x+25, y+20, x+35, y)
  }
}