const { NotImplementedError } = require('../extensions/index.js');

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
const createObj = (str) => str.split('').reduce((acc, item) => {
  if (Object.hasOwn(acc, item)) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {})

function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0 || typeof s1 !== 'string' || typeof s2 !== 'string') return 0;
  const objS1 = createObj(s1);
  const objS2 = createObj(s2);

  return Object.keys(objS1).reduce((acc, item) => {
    const temp = Object.hasOwn(objS2, item) ? Math.min(objS1[item], objS2[item]) : 0;
    acc += temp;
    return acc
  }, 0)
};

module.exports = {
  getCommonCharacterCount
};
