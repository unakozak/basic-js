const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(str) {
  return typeof str !== "string" ||
    parseFloat(str) <= 0 ||
    parseFloat(str) > 15 ||
    isNaN(parseFloat(str)) ||
    typeof parseFloat(str) === "string"
    ? false
    : Math.ceil(
        Math.log(MODERN_ACTIVITY / parseFloat(str)) /
          (Math.LN2 / HALF_LIFE_PERIOD)
      );
};
