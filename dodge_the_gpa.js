var img;

var backColor = 155;

function setup() {
  createCanvas(800, 600);
  background(backColor);
  img = loadImage('tam.png');
}

function draw() {
  background(backColor);
  image(img, mouseX, mouseY, img.width / 3, img.height / 3);
}

function drawHUD() {
  
}
