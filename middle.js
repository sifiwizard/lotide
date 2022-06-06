const middle = function(arrayOne) {
  let mid = [];
  if (arrayOne.length > 2) {
    arrayOne.length % 2 !== 0 ? mid.push(arrayOne[Math.floor(arrayOne.length / 2)]) : mid.push(arrayOne[(arrayOne.length / 2) - 1], arrayOne[arrayOne.length / 2]);
  }
  return mid;
};

module.exports = middle;
