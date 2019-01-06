function Obstacle(img) {
  // Constructor code
  this.img = img;
  this.possibleX = [900, -100, 400];
  this.possibleY = [-100, 700];
  
  this.y = 0;
  this.x = 0;
  
  this.mode = 0;

  this.w = 150;
  this.h = 150;

  this.xIdx = round(random(2));
  this.yIdx = round(random(1));
  print(this.xIdx);
  
  this.x = random(this.w, 800 - this.w); //this.possibleX[this.xIdx];
  this.y = random(this.h, 600 - this.h); //this.possibleY[this.yIdx];
  

  

  this.box = new HitBox(this.x, this.y, this.w, this.h);

  this.bound = function() { // checks for a collision with another obstacle only
    this.xSign = (this.x <= 0 || this.x + this.w >= 800) ? this.xSign * -1 : this.xSign;
    this.ySign = (this.y <= 0 || this.y + this.h >= 600) ? this.ySign * -1 : this.ySign;
  }

  this.xSign = 1;
  this.ySign = 1;

  this.update = function(tamBox) {
    this.bound();
    this.x = this.x + 1 * this.xSign; 
    this.y = this.y + 1 * this.ySign;
    
    
    image(this.img, this.x, this.y, this.w, this.h);
    //fill(255, 0, 0, 127);
    //rect(this.x, this.y, this.w, this.h);

    this.box.update(this.x, this.y);
    return this.box.check(tamBox);
  }
}
