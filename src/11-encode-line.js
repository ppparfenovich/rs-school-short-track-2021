/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let number = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      number++;
    } else if (number === 1) {
      result += `${str[i]}`;
    } else {
      result += `${number}${str[i]}`;
      number = 1;
    }
  }

  return result;

  // throw new Error('Not implemented');
}

module.exports = encodeLine;
