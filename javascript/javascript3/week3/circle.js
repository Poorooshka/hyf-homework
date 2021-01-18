class Circle {
  constructor(x, y, r, s, e, f) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.e = e;
    this.f = f;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, this.s, this.e);
    ctx.fillStyle = this.f;
    ctx.fill();
  }
  setCircle() {
    this.x = Math.floor(Math.random * 501);
    this.y = Math.floor(Math.random * 501);
    this.r = Math.floor(Math.random * 21);
    let r = Math.floor(Math.random * 255);
    let g = Math.floor(Math.random * 255);
    let b = Math.floor(Math.random * 255);
    let a = Math.floor(Math.random * 2);
    let f = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    this.f = f;
  }
}
var canvas = document.getElementById("cnv");
var ctx = canvas.getContext("2d");
let c = new Circle(20, 20, 10, 0, 2 * Math.PI, "#000");

c.draw();
