// https://leetcode.com/problems/binary-search/description/

// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

var search = function (nums, target) {
  // Take the array and find the middle point
  // Keep track of index somehow
  // Check to see if that middle point is the value
  // If its too small, need to check right, if too big, check left
  // Split side and check again
  // Do this until we get to a side of length 1,
  // If this value is equal to the target, we return the index, if not, we return -1

  console.log(nums);

  const length = nums.length;

  //Initial starting values
  let startPoint = 0;
  let endPoint = nums.length - 1;
  let middlePoint = Math.trunc((startPoint + endPoint) / 2);

  // Loop through this portion:

  for (let i = 0; i < length; i++) {
    console.log(`Checking ${nums[middlePoint]}`);

    if (nums[middlePoint] === target) {
      return middlePoint;
    } else {
      // Need to check to see if too small or too big
      if (nums[middlePoint] > target) {
        console.log("Checking left side");
        endPoint = middlePoint;
        middlePoint = Math.trunc((startPoint + middlePoint) / 2);
      } else {
        console.log("Checking the right side");
        startPoint = middlePoint;
        middlePoint = Math.trunc((startPoint + endPoint) / 2);
        if (startPoint === middlePoint) {
          middlePoint += 1;
        }
      }
    }
  }

  return -1;
};

console.log(search([-1, 0, 5], 5));
