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

  this.pRect = function(p, box) {
    if (p.x < box.x + box.w && p.x + p.w > box.x && p.y < box.y + box.h && p.y + p.h > box.y) {
        return true;
    } else {
        return false;
    }
  }

  this.check = function(box) {
    // for (var i = 0; i < this.points.length; i++) {
    //     if (this.pRect(this.points[i], box)) {
    //         print("Collision");
    //         return true;
    //     }
    // }
    //this.x < box.x + box.w && this.x + this.w > box.x && this.y < box.y + box.h && this.y + this.h > box.y
    // mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h
    //box.x >= this.x && box.x <= this.x + this.w && box.y >= this.y && box.y <= this.y + this.h
    if (this.x < box.x + box.w && this.x + this.w > box.x && this.y < box.y + box.h && this.y + this.h > box.y) {
        return true;
    } else {
        // NO COLLISION
        return false;
    }
    var points = [
        {
            x : box.x,
            y : box.y
        }, {
            x : box.x + 274 / 3,
            y : box.y,
        }, {
            x : box.x,
            y : box.y + 171 / 3
        }, {
            x : box.x + 274 / 3,
            y : box.y + 171 / 3
        }
      ];
      //print(box.w);
    // for (var i = 0; i < points.length; i++) {
    //     if (points[i].x >= this.x && points[i].x <= this.x + this.w && points[i].y >= this.y && points[i].y <= this.y + this.h) {
    //         return true;
    //     } else {
    //         // NO COLLISION
    //         return false;
    //     }
    // }
  }
}
