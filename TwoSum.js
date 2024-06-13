// https://leetcode.com/problems/two-sum/

//Brute Force Solution

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; i < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Using a hash for O(N) speed

var twoSum = function (nums, target) {
  let previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededNumber = target - currentNumber;
    const index2 = previousValues[neededNumber];
    if (index2 != null) {
      return [i, index2];
    } else {
      previousValues[currentNumber] = i;
    }
  }
};
