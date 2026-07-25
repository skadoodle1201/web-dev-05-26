const logger = (level) => {
  return (message) => {
    console.log(`[${level}] : ${message}`);
  };
};

function add(a, b) {
  return a + b;
}

const sum = add(1, 5);

logger("info")(`sum = ${sum}`);

function curryingAdd(a) {
  return function (b) {
    return a + b;
  };
}

const curringSum = curryingAdd(1)(5);
logger("info")(`curryingSum = ${sum}`);

logger("ERROR")("Application Stopped");

// console.log(); //Info
// console.error(); //Error
// console.warn(); //warning

const calculateTax = (tax) => {
  return (val) => {
    console.log(val * tax);
  };
};

calculateTax(18)(100);
calculateTax(7)(100);
