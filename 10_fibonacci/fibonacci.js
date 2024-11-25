const fibonacci = function (n) {
  let a = 0;
  let b = 1;
  let result = 0;

  if (n === 1) result = b;

  for (let i = 1; i < n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
