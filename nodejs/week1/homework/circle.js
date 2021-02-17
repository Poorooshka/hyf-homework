class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumference() {
    return this.radius * 2 * Math.PI;
  }

  getArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}

const circle = new Circle(10);

const diameter = circle.getDiameter();
console.log(diameter);

const circumference = circle.getCircumference();
console.log(circumference);

const area = circle.getArea();
console.log(area);
