const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  const nf = Number.parseFloat(sampleActivity);
  if (Number.isNaN(nf) || nf <= 0 || nf > 15 ) return false;
  return Math.ceil((Math.log(nf / MODERN_ACTIVITY)) / (Math.log(2) / HALF_LIFE_PERIOD) * (-1));
}

module.exports = {
  dateSample
};
