const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const sum = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sum;
};

const multiply = function (array) {
  const multiplied = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return multiplied;
};

const power = function (a,b) {
  return Math.pow(a,b)
};

const factorial = function (a) {
  if (a < 2)
  {
    return 1
  }
  let factor = 1
  for (let i = 1; i <= a; i++) {
    factor = factor * i 
  }
  return factor
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
