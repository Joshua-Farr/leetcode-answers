/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    let nextValue = nums[i + 1];

    if (currentValue === nextValue) {
      return [currentValue, currentValue + 1];
    }
  }
};
