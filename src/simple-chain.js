const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  segments: [],

  getLength() {
    return this.segments.length;
  },
  addLink(value) {
    const val = value === undefined ? '' : String(value);
      this.segments.push(`( ${val} )`);
      return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number' || (position % 1) !== 0 || !this.segments[position - 1]) {
      this.segments = [];
      throw new Error("You can't remove incorrect link!");
    };
    
    this.segments.splice((position - 1), 1);
    return chainMaker;
  },

  reverseChain() {
    this.segments.reverse();
    return chainMaker;
  },

  finishChain() {
    const str = this.segments.join('~~');
    this.segments = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
