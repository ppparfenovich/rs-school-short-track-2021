/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const index = Math.floor(end + start);
    const item = array[index];
    if (item === value) {
      return index;
    }
    if (item > value) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }
  return null;
  // throw new Error('Not implemented');
}

module.exports = findIndex;
