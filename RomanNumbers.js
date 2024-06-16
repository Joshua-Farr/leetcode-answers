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

  //Need to work backwards from the end of the roman numeral

  for (let i = s.length - 1; i >= 0; i--) {
    const value = numberMap.get(s.charAt(i));

    const test1 =
      s.charAt(i) === "V" || s.charAt(i) === "L" || s.charAt(i) === "D";

    const test2 =
      s.charAt(i - 1) === "I" ||
      s.charAt(i - 1) === "X" ||
      s.charAt(i - 1) === "C";

    if (test1 && test2) {
      const reducerValue = 2 * numberMap.get(s.charAt(i - 1));
      numeralSum += value - reducerValue;

      console.log("We found a char!, ", s.charAt(i), reducerValue);
    } else {
      numeralSum += value;
    }
  }
  return numeralSum;
};

const interger = romanToInt("XV");

console.log(interger);
