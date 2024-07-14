// https://leetcode.com/problems/valid-anagram/description/
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {
  // Sort each string alphabetically
  // Iterate through each string and compare the values to eachother
  // If there is no match then false

  sortedS = s.split("").sort().join("");
  sortedT = t.split("").sort().join("");

  if (t.length > s.length) {
    return false;
  }

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS.charAt(i) === sortedT.charAt(i)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("cat", "rat"));
console.log(isAnagram("cat", "tac"));
