var imgs;
var img;

var backColor = 155;
var obstacles = [0, 0, 0]; // max of 4 obstacles at any given time.

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
  print(img.height);
  print(img.width);
  tam = new HitBox(mouseX, mouseY, 274 / 3, 171 / 3);
}
//var count = 0;
function draw() {
  if (mode == 0) {
    background(backColor);
    for (var i = 0; i < obstacles.length; i++) {
      if (obstacles[i].update(tam)) {
        mode = 1;
        break;
      }
    }
    drawTam();
    drawHUD();
    score = score + 1;
    if (score % 500 == 0) {
      // spawn more obstacles here
      ob = new Obstacle(imgs[round(random(0, 2))]);
      obstacles.push(ob);
      //count = count + 1;
    }
  } else if (mode == 1) {
    gameOverScreen();
  }
}

function getObstacles() {
  for (var i = 0; i < 3; i = i + 1) {
    obstacles[i] = new Obstacle(imgs[i]);
  }
}

function drawTam() {
  image(img, mouseX, mouseY, img.width / 3, img.height / 3);
  fill(255, 0, 0, 127);
  //rect(mouseX, mouseY, img.width / 3, img.height / 3);
  tam.update(mouseX, mouseY);
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
  text("GAME OVER", width / 2 - textWidth("GAME OVER") / 2, height / 2);
  textSize(16);
  text("Reload Page to start a new game", width / 2 - textWidth("Reload Page to start a new game") / 2, height / 2 + 50);
}