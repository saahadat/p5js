function setup() {
  createCanvas(600, 600);
}

function draw() {
  //background("aqua");
  //circle in the center with the width of 100
  background(123,23,221);


  fill("red");
    stroke("orange");
    strokeWeight(10);
  circle(520,60,100)
  if(mouseIsPressed===true){
    fill("yellow");
    stroke("orange");
    strokeWeight(10);
    //line(mouseX,mouseY,340,60);
  }
  else{
    fill(255);
    stroke(0);
    strokeWeight(5);

  }
  circle(mouseX,mouseY,100);
  
  stroke(0);
  strokeWeight(1);
  fill("green");
  rect(0,400,600,200);
  
  textSize(75);
  text("💀",100,450);
  text("🐞",220,430);


}

