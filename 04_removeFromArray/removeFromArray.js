const removeFromArray = function (lst, ...value) {
  console.log(lst);
  console.log(value);

  let filtered = lst;

  for (let j = 0; j < value.length; j++) {
    filtered = filtered.filter((item) => item !== value[j]);
  }

  return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
