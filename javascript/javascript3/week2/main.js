const redCircle = document.querySelector("ul.marks>li:nth-child(1)");
const blueCircle = document.querySelector("ul.marks>li:nth-child(2)");
const greenCircle = document.querySelector("ul.marks>li:nth-child(3)");
console.log(redCircle.style.top, redCircle.style.left);

const translateOneByOne = () => {
  moveElement(redCircle, { x: 20, y: 300 }).then(() => {
    moveElement(blueCircle, { x: 400, y: 300 }).then(() => {
      moveElement(greenCircle, { x: 400, y: 20 });
    });
  });
};

//translateOneByOne();

const translateAllAtOnce = () => {
  Promise.all([
    moveElement(redCircle, { x: 20, y: 300 }),
    moveElement(blueCircle, { x: 400, y: 300 }),
    moveElement(greenCircle, { x: 400, y: 20 }),
  ]);
};

translateAllAtOnce();

// moveElement(document.querySelector("li"), { x: 100, y: 100 }).then(() => {
//     console.log("Element has been moved");
//   });
