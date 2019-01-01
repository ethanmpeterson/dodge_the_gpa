var img;

var backColor = 155;
var obstacles = [0, 0, 0, 0]; // max of 4 obstacles at any given time.
function setup() {
  createCanvas(800, 600);
  background(backColor);
  img = loadImage('tam.png');
  getObstacles();
  //obstacles[0].drawings[0]();
  obstacles[0].drawings[1]();
}

function draw() {
  background(backColor);
  image(img, mouseX, mouseY, img.width / 3, img.height / 3);
}

function getObstacles() {
  for (var i = 0; i < 4; i = i + 1) {
    obstacles[i] = new Obstacle();
  }
}

function drawHUD() {
  
}
