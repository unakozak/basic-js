const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber,turnsSpeed) {
  let obj = {turns : 1, seconds: 0};
  for (let i = 1; i < diskNumber; i++)
    obj.turns += Math.pow(2,i);
  obj.seconds = Math.floor(obj.turns / (turnsSpeed/3600));
  return obj;
};