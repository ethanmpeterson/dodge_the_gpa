var imgs;
var img;

var backColor = 155;
var obstacles = [0, 0, 0, 0]; // max of 4 obstacles at any given time.

var tam;

var score = 0;
var mode = 0; // 0 for game in session 1 for game over.
function setup() {
  createCanvas(800, 600);
  background(backColor);
  img = loadImage('tam.png');
  imgs = [
    loadImage('jacket1.png'),
    loadImage('jacket2.png'),
    loadImage('jacket3.gif')
  ];
  print(imgs);
  getObstacles();
  tam = new HitBox(mouseX, mouseY, img.width / 3, img.height / 3);
}

function draw() {
  if (mode == 0) {
    background(backColor);
    for (var i = 0; i < 3; i++) {
      if (obstacles[i].update(tam)) {
        mode = 1;
        break;
      }
    }
    image(img, mouseX, mouseY, img.width / 3, img.height / 3);
    tam.update(mouseX, mouseY);
    drawHUD();
  } else if (mode == 1) {
    gameOverScreen();
  }
}

function getObstacles() {
  for (var i = 0; i < 3; i = i + 1) {
    obstacles[i] = new Obstacle(imgs[i]);
  }
}

function drawHUD() {
  fill(255);
  text("FREC APPLICATION '19 Creative Component", 5, 15);
  text("Ethan Peterson", 5, 30);
  var scoreString = "Score: " + score;
  text(scoreString, width - 70, 15);
}

function gameOverScreen() {
  background(backColor);
  fill(255);
  textSize(32);
  text("GAME OVER", width / 2, height / 2);
}
