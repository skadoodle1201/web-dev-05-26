const calculateArea = (shape, areaCalculation, ...argument) => {
  //Rest Operator
  const areaParams = argument;
  console.log(`Shape: ${shape}`, areaCalculation(...areaParams)); // Spread Operator
};

const squareArea = (side) => {
  console.log(side);
  return side * side;
};

const rectangleArea = (width, height) => {
  console.log(width, height);
  return width * height;
};

const cuboidArea = (length, breadth, height) => {
  return 2 * (length * breadth + breadth * height + height * length);
};

calculateArea("square", squareArea, 10);
calculateArea("rectangle", rectangleArea, 10, 30);
calculateArea("cubiod", cuboidArea, 1, 3, 4);

// console.log(`Requested Area of shape: square`, squareArea(10));
// console.log(`Shape: rectangle`, rectangleArea(10, 30));
