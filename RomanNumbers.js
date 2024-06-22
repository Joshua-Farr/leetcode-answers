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

  for (let i = s.length - 1; i >= 0; i--) {
    const value = numberMap.get(s.charAt(i));

    if (numberMap.get(s.charAt(i)) > numberMap.get(s.charAt(i - 1))) {
      const reducerValue = 2 * numberMap.get(s.charAt(i - 1));
      const newValue = value - reducerValue;
      numeralSum += newValue;
    } else {
      numeralSum += value;
    }
  }
  return numeralSum;
};

const interger = romanToInt("MCMXCIV");

console.log(interger);
