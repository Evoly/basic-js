const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDomains = (str) => str.split('.').reverse().reduce((acc, item, index) => {
    if (index === 0) return [...acc, `.${item}`];
    const temp = [acc[index - 1], `.${item}`].join('');
    return [...acc, temp]
  }, []);

function getDNSStats(domains) {
  const result = domains.reduce((acc, domain) => {
    const temp = getDomains(domain);
    temp.forEach(item => {
      console.log('item:', item, Object.hasOwn(acc, item))
      if (!Object.hasOwn(acc, item)) {
        acc[item] = 1;
      } else {
        acc[item] += 1;
      }
    });
    return acc; 
  }, {})
  return result
}

module.exports = {
  getDNSStats
};

