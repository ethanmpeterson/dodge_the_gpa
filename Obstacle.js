function Obstacle(img) {
  // Constructor code
  this.img = img;
  this.possibleX = [900, -100];
  this.possibleY = [-100, 700];
  
  this.y = 0;
  this.x = 0;
  
  this.mode = 0;

  this.xIdx = random(1);
  this.yIdx = random(1);
  this.x = this.possibleX[this.xIdx];
  this.y = this.possibleY[this.yIdx];
  
  // test
  this.x = 400;
  this.y = 300;

  this.update = function() {
    // ADD HIT DETECTION USING TAM POS
    
    // after collision check incriment position
    if (this.xIdx == 0) {
      this.x = this.x - 1;
    } else if (this.xIdx == 1) {
      this.x = this.x + 1;
    }

    if (this.yIdx == 0) {
      this.y = this.y + 1;
    } else if (this.yIdx == 1) {
      this.y = this.y - 1;
    }
    image(this.img, this.x, this.y);
  }
  
}
