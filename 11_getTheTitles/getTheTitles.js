const getTheTitles = function (books) {
  let arr = [];
  for (const book in books) {
    arr.push(books[book].title);
  }
  return arr;
};
// Do not edit below this line
module.exports = getTheTitles;
