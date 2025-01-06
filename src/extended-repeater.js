const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator1 = options.separator ?? '+';
  const separator2 = options.additionSeparator ?? '|';
  const additionToStr = options.addition !== undefined ? String(options.addition) : '';
  //const strToStr = typeof str !== undefined ? options.addition : '';
  const substr = Array(options.additionRepeatTimes ?? 1).fill(additionToStr).join(`${separator2.toString() }`);
  return Array(options.repeatTimes ?? 1).fill(`${String(str)}${substr}`).join(`${separator1.toString() }`);
}

module.exports = {
  repeater
};
