const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const cases = {
  discard: function discardPrev(arr) {
    if (arr.length > 1) {
      arr.pop();
    }
    return arr;
  },
  double: function doublePrev(arr) {
    if (arr.length > 1) {
      arr.push(arr.at(-1))
    }
    return arr
  },
}

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == '--discard-next') {
      i += 1
    } else if (arr[i] == '--discard-prev') {
      if (result[result.length - 1] == arr[i - 1]) result.pop()
    }
    else if (arr[i] == '--double-next') {
      if (arr[i + 1]) result.push(arr[i + 1])
    }
    else if (arr[i] == '--double-prev') {
      if (result[result.length - 1] == arr[i - 1] && arr[i - 1]) result.push(arr[i - 1])
    }
    else result.push(arr[i])
  }

  return result
}

module.exports = {
  transform
};

