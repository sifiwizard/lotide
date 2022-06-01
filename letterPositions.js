const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions('lighthouse').i, [1]);

assertArraysEqual(letterPositions('lighthouse').l, [0]);

assertArraysEqual(letterPositions('lighthouse').e, [9]);
