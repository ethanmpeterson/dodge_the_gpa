function HitBox(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.points = [
    {
        x : this.x,
        y : this.y
    }, {
        x : this.x + this.w,
        y : this.y,
    }, {
        x : this.x,
        y : this.y + this.h
    }, {
        x : this.x + this.w,
        y : this.y + this.h
    }
  ];
  for (var i = 0; i < this.points.length; i++) {
      this.points[i].w = this.w;
      this.points[i].h = this.h;
  }

  this.update = function(x, y) {
    this.x = x;
    this.y = y;
  }

  this.check = function(box) {
    return (this.x < box.x + box.w && this.x + this.w > box.x && this.y < box.y + box.h && this.y + this.h > box.y);
  }
}
