const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: [],
  getLength() {
    let len = this.chains.length;
    return len;
  },
  addLink(value) {
    this.chains.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      (position < 0 && position > this.getLength()) ||
      typeof position !== "number" ||
      position % 1 !== 0 ||
      isNaN(position)
    ) {
      this.chains = [];
      throw new Error();
    } else this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let str = this.chains.join("~~");
    this.chains = [];
    return str;
  },
};

module.exports = chainMaker;
