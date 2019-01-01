function Obstacle() {
  //private var drawIndex = 0;
  this.jacket1 = loadImage('jacket1.png');
  this.drawings = [
    function() {
      image(this.jacket1, 100, 100);
    },
    function() {
      print("Second JACKET");
    }
  ];
}
