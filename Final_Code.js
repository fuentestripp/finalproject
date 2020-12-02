var x = 200;
var y = 200;


function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(0);
  ellipse(x,y,50,50);
  
  //x = x + 1;
 
    
  if (x >= 400){
   x = 0; 
  }
 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
  
}
