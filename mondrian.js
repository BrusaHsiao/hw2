function setup() {
  createCanvas(500, 650); //Composition with Large Blue Plane, Red, Black, Yellow, and Gray
}

function draw() {
  background(225);
  noStroke();

  fill(74, 72, 155);
  rect(140, 0, 440, 375); //blue
  fill(255);
  rect(140, 375, 330, 175); //white
  fill(0);
  rect(40, 375, 100, 175); //black
  fill(215, 50, 15);
  rect(0, 375, 40, 175); //red

  fill(225, 200, 0);
  rect(335, 550, 135, 100); //yellow
  stroke(0);
  strokeWeight(13);
  line(0, 60, 140, 60);
  line(140, 0, 140, 550);
  line(0, 550, 470, 550);
  line(0, 375, 500, 375);
  line(140, 260, 500, 260);
  line(335, 260, 335, 650);
  line(40, 375, 40, 550);
  line(470, 375, 470, 650);
}
