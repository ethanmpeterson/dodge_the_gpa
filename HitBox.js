function HitBox(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.update = function(x, y) {
    this.x = x;
    this.y = y;
  }

  this.check = function(box) {
    
  }

}
