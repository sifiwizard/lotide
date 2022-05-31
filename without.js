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

const without = function(source, itemsToRemove){
  let newSource = source.slice();
  for (let i = 0; i < newSource.length; i++) {
    for (const iteam of itemsToRemove) {
      if (newSource[i] === iteam) {
        newSource.splice(i, 1);
        i--;
      }
    }
  }
  return newSource;
}

assertArraysEqual(without([1,2,3],[1]), [2,3]);
assertArraysEqual(without(["1","2","3"], [1,2,"3"]), ["1","2"]);

const words = ["hello", "world", "lighthouse",];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);