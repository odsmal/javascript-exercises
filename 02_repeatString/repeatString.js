const repeatString = function (s, n) {
  if (n < 0) return "ERROR";

  let total = "";
  for (let repeats = 0; repeats < n; repeats++) {
    total += s;
  }
  return total;
};

// Do not edit below this line
module.exports = repeatString;
