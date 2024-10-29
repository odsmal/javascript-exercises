const reverseString = function (s) {
  let reversed = "";

  for (let i = 0; i < s.length; i++) {
    reversed += s.charAt(s.length - 1 - i);
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
