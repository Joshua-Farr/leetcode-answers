/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numberMap = new Map();

  numberMap.set("I", 1);
  numberMap.set("V", 5);
  numberMap.set("X", 10);
  numberMap.set("L", 50);
  numberMap.set("C", 100);
  numberMap.set("D", 500);
  numberMap.set("M", 1000);

  let numeralSum = 0;

  //Need to work backwards from the end of the roman numberal

  for (let i = s.length - 1; i >= 0; i--) {}

  return numeralSum;
};
