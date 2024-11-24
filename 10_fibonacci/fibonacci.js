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

// const fibonacci = function (n, a = 0, b = 1, result = 0) {
//   if (n === 0) return result;
//   result = a + b;
//   a = b;
//   b = result;
//   return result + fibonacci(n - 1, a, b, result);
// };

console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;
