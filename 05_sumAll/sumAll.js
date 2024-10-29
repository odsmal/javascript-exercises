const sumAll = function (x, y) {
  if (!Number.isInteger(x) || x < 0) return "ERROR";
  if (!Number.isInteger(y) || y < 0) return "ERROR";

  let smallest = 0;
  let largest = 0;
  let sum = 0;

  if (x < y) {
    smallest = x;
    largest = y;
  } else {
    smallest = y;
    largest = x;
  }

  for (let i = smallest; i < largest + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
