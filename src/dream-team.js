const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  return Array.isArray(arr)
    ? arr
        .filter((elem) => typeof elem === "string")
        .map((elem) => elem.toUpperCase().trim())
        .sort()
        .map((elem) => elem[0])
        .join("")
    : false;
};
