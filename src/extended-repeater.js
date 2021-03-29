const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let st = `${str}`,
    obj = Object.assign({}, options),
    arr = [];
  let add = "";
  obj.addition = `${obj.addition}`;

    if (obj.separator === undefined) obj.separator = "+";
    else obj.separator = `${obj.separator}`;

    if (obj.additionSeparator === undefined) obj.additionSeparator = "|";
    else obj.additionSeparator = `${obj.additionSeparator}`;

  if (obj.additionRepeatTimes !== undefined && obj.addition !== undefined) {
    arr[obj.additionRepeatTimes - 1] = "";
    arr.fill(obj.addition);
    add = arr.join(obj.additionSeparator);
    arr = [];
  } else if (obj.addition !== undefined) add = obj.addition;
  else add = "";

  if (add === "undefined") add = "";

  st = st.concat(add);

  if (obj.repeatTimes !== undefined) {
    arr[obj.repeatTimes - 1] = "";
    arr.fill(st);
    st = arr.join(obj.separator);
  }
  return st;
};
