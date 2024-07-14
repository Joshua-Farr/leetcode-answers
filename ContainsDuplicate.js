//https://leetcode.com/problems/contains-duplicate/description/

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
  //PseudoCode:
  // Create a Hashmap to store the information
  // Iterate through the array
  // Check to see if we have seen that value before
  // If not, we notate the value
  // We return true (duplicate)

  let numberHash = {};

  for (number of nums) {
    if (numberHash[number] === undefined) {
      numberHash[number] = 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
