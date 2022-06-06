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

module.exports = eqArrays;