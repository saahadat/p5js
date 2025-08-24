function setup() {
  createCanvas(1980, 720);
}

function draw() {
  //background("aqua");
  //circle in the center with the width of 100
  background(123,23,221);


  fill("red");
    stroke("orange");
    strokeWeight(10);
  circle(520,60,100)
  
  
  stroke("blue");
  strokeWeight(1);
  fill("green");
  rect(0,520,1920,200);
  
  textSize(75);
  text("💀",100,650);
  text("🐞",220,550);

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

}

