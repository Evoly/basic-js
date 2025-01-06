const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = matrix.reduce((acc, el) => {
    const temp = el.reduce((tempAcc, item, indexCurrent) => {
      if (item === 0) {
        acc.idx.next.push(indexCurrent);
      }
      if (!acc.idx.current.includes(indexCurrent)) {
        tempAcc += item;
      }
      return tempAcc;
    }, 0);
    acc.idx.current = acc.idx.next;
    acc.idx.next = [];
    acc.sum += temp;
    return acc;
  }, { sum: 0, idx: { current: [], next: [] } });

  return result.sum;
}

module.exports = {
  getMatrixElementsSum
};
