/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1Arr = s1.split('');
  const str2Arr = s2.split('');
  const resArr = [];

  str1Arr.forEach((el) => {
    if (str2Arr.includes(el)) {
      resArr.push(el);
      const index = str2Arr.indexOf(el);
      str2Arr.splice(index, 1);
    }
  });
  return resArr.length;
}

module.exports = getCommonCharacterCount;
