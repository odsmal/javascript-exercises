const palindromes = function (string) {
  const array = string.split("");
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    if (array[i] !== array[array.length - i - 1]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
