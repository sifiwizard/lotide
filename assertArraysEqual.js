const eqArrays = function(arrayOne, arrayTwo) {
  let i = 0;
  while (i < arrayOne.length && i < arrayTwo.length) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
    i++;
  }
  return true;
};

const assertArraysEqual = (arrayOne, arrayTwo) => eqArrays(arrayOne, arrayTwo) ? console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`🔴🔴🔴 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);


assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false