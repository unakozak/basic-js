const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(k) {
    this.k = k === false ? "reverse" : "direct";
  }

  encrypt(message, key) {
    if (!message || !key || message.length <= 0 || key.length <= 0)
      throw new Error();

    message = message.toUpperCase();
    let str = "",
      subtrahend = 0,
      copyKey = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 90) {
        str += message[i];
        subtrahend++;
        continue;
      }

      this.keyIndex =
        i - subtrahend >= key.length
          ? (i - subtrahend) % key.length
          : i - subtrahend;
      this.keyIndex = this.keyIndex < 0 ? 0 : this.keyIndex;

      this.charCode =
        message[i].charCodeAt() + (copyKey[this.keyIndex].charCodeAt() - 65);
      if (this.charCode > 90) this.charCode -= 26;
      str += String.fromCharCode(this.charCode);
    }

    return this.k === "direct" ? str : str.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (
      !encryptedMessage ||
      !key ||
      encryptedMessage.length <= 0 ||
      key.length <= 0
    )
      throw new Error();

    encryptedMessage = encryptedMessage.toUpperCase();
    let str = "",
      subtrahend = 0,
      copyKey = key.toUpperCase();
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (
        encryptedMessage[i].charCodeAt() < 65 ||
        encryptedMessage[i].charCodeAt() > 90
      ) {
        str += encryptedMessage[i];
        subtrahend++;
        continue;
      }

      this.keyIndex =
        i - subtrahend >= key.length
          ? (i - subtrahend) % key.length
          : i - subtrahend;
      this.keyIndex = this.keyIndex < 0 ? 0 : this.keyIndex;

      this.charCode =
        encryptedMessage[i].charCodeAt() -
        (copyKey[this.keyIndex].charCodeAt() - 65);
      if (this.charCode < 65) this.charCode += 26;
      str += String.fromCharCode(this.charCode);
    }

    return this.k === "direct" ? str : str.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
