const findTheOldest = function (arr) {
  return arr.reduce((oldest, person) => {
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const personAge = person.yearOfDeath - person.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  });
};
// Do not edit below this line
module.exports = findTheOldest;
