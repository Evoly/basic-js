const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenerecurpheringMachine that allows us to create
 * direct and reverse curphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenerecurpheringMachine();
 * 
 * const reverseMachine = new VigenerecurpheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(msg, key) {
    if (!msg || !key || typeof (msg) !== "string" || typeof (key) !== "string") throw new Error('Incorrect arguments!')
    
      let result = '';
    let j = 0;
    for (let i = 0; i < msg.length; i += 1) {
      let currentLetter = msg[i];
      let cur = currentLetter.toUpperCase().charCodeAt();
      let k = key[j % key.length].toUpperCase().charCodeAt();

      if (cur >= 65 && cur <= 90) {
        let upperLetter = (((cur + k) % 26) + 26) % 26;
        result += String.fromCharCode(upperLetter + 65);
        j += 1;
      } else {
        result += currentLetter;
      }
    };
    return (this.isDirect) ? result : result.split('').reverse().join('');
  }

  decrypt(msg, key) {
    if (!msg || !key || typeof (msg) !== "string" || typeof (key) !== "string") throw new Error('Incorrect arguments!')
    
    let result = '';
    let j = 0;

    for (let i = 0; i < msg.length; i += 1) {
      let currentLetter = msg[i];
      let cur = currentLetter.toUpperCase().charCodeAt();
      let k = key[j % key.length].toUpperCase().charCodeAt();

      if (cur >= 65 && cur <= 90) {
        let upperLetter = (((cur - k) % 26) + 26) % 26;
        result += String.fromCharCode(upperLetter + 65);
        j += 1;
      } else {
        result += currentLetter;
      }
    };
    return (this.isDirect) ? result : result.split('').reverse().join('')
  }
}


module.exports = {
  VigenereCipheringMachine
};
