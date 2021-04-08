/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result;
  const number = n;

  function getSum(num) {
    const arr = String(num).split('');
    let sum = 0;

    arr.forEach((el) => {
      sum += +el;
    });
    if (sum > 9) {
      getSum(sum);
    } else {
      result = sum;
    }
    return result;
  }

  getSum(number);
  return result;
}

module.exports = getSumOfDigits;
