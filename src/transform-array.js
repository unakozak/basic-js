const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== "--discard-next" &&
      arr[i] !== "--discard-prev" &&
      arr[i] !== "--double-prev" &&
      arr[i] !== "--double-next"
    ) {
      newArray.push(arr[i]);
      continue;
    } else if (arr[i] === "--discard-next" && arr[i + 1] !== undefined)
      if (arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev")
        i += 2;
      else i++;
    else if (arr[i] === "--discard-prev" && arr[i - 1] !== undefined)
      newArray.pop();
    else if (arr[i] === "--double-next" && arr[i + 1] !== undefined)
      newArray.push(arr[i + 1]);
    else if (arr[i] === "--double-prev" && arr[i - 1] !== undefined)
      newArray.push(arr[i - 1]);
  }
  return newArray;
};
