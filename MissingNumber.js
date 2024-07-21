/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sortedArray = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length + 1; i++) {
    if (sortedArray[i] !== i) {
      return i;
    }
  }
};
