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
    if (this.x < box.x + box.w && this.x + this.w > box.x && this.y < box.y + box.h && this.y + this.h > box.y) {
        print("collsion");
    } else {
        // NO COLLISION
    }
  }

}
