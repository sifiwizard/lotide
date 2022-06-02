const map = (array, callback) => {
  const reults = [];
  for (let item of array) {
    reults.push(callback(item));
  }
  return reults;
}

const eqArrays = function(arrayOne, arrayTwo) {
  let i = 0;
  while (i < arrayOne.length || i < arrayTwo.length) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
    i++;
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => eqArrays(arrayOne, arrayTwo) ? console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🔴🔴🔴 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"])


