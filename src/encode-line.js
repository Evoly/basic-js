const { NotImplementedError } = require('../extensions/index.js');

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
  if (str.length === 0 || typeof str !== 'string') return '';
  const iter = (acc, index) => {
    if (index >= str.length) return acc;
    let currentIndex = index;
    let substr = str[currentIndex];
    while (str[currentIndex] === str[currentIndex + 1]) {
      substr += str[currentIndex];
      currentIndex += 1;
    }
    const newAcc = substr.length > 1 ? `${acc}${substr.length}${substr[0]}` : `${acc}${substr[0]}`;
    return iter(newAcc, currentIndex + 1);
  }
  return iter('', 0);
};

module.exports = {
  encodeLine
};
