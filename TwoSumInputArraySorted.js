// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

var twoSum = function (numbers, target) {
  let index1 = 1;
  let index2 = number.length - 1;

  for (const num of numbers) {
    const sumOfTwoIndexValues = numbers[index1] + numbers[index2];

    if (sumOfTwoIndexValues > target) {
      //The sume is too big, move right index down
      index2 -= 1;
    } else if (sumOfTwoIndexValues < target) {
      //The sum is too small, move left index up
      index1 += 1;
    } else if (sumOfTwoIndexValues === target) {
      //The sum is the target, return the answe.
      return [index1, index2];
    }
  }
};
