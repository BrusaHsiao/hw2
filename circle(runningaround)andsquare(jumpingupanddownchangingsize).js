function setup() {
  createCanvas(400, 400);
}

var ballX = 50
var ballSpeed = 20

var boomX = 20
var boombie = 2

var ballX2 = 50
var ballSpeed2 = 3

function draw() {
  background(220);
  fill(0, 255, 255);
  ellipse(ballX, ballX2, boomX);
  fill(255, 0, 255);
  rect(ballX2, ballX, mouseY, mouseX)

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2
  boomX = boomX + boombie

  if (ballX >= 400) {
    ballSpeed = ballSpeed * -1
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -3
  }

  if (ballX <= 0) {
    ballSpeed = ballSpeed * -1
  }
  if (boomX >= 200) {
    boombie = boombie * -1
  }
  if (boomX <= 0) {
    boombie = boombie * -1
  }

  if (ballX2 <= 0) {
    ballSpeed2 = ballSpeed2 * -1
  }


}
