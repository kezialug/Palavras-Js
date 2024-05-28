function setup() {
  createCanvas(400, 400);
  background("black");
}

function draw() {
  fill("purple");
  stroke("red");
  
  if(mouseIsPressed)
  rect(mouseX,mouseY,20,10);
}
