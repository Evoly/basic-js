const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
//  const addSuffix = (str) => `{str}`
function renameFiles(names) {
  const data =  names.reduce((acc, name) => {
    if (!acc.result.includes(name)) {
      acc.result.push(name);
      acc.counter.name = 1;
    } else {
      const num = acc.counter.name;
      acc.result.push(`${name}(${num})`);
      acc.counter.name += 1;
    }
    return acc;

  }, {result: [], counter: {}});
  
  return data.result;
}

module.exports = {
  renameFiles
};
