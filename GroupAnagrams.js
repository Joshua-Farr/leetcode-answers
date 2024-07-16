/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let solution = [];
  let tempArray = [...strs];
  console.log("Initial Array : ", strs);

  let anagramMap = new Map();

  for (let i = 0; i < tempArray.length; i++) {
    const sortedValue = tempArray[i].split("").sort().join("");
    // console.log("Sorted Value: ", tempArray[i], " --> ", sortedValue);
    tempArray[i] = sortedValue;
  }

  console.log("Here is the sorted Array: ", tempArray);

  for (let i = 0; i < tempArray.length; i++) {
    let pointer = tempArray[i];
    let anagramArray = [strs[i]];

    if (!anagramMap.has(pointer)) {
      for (let j = 1 + i; j < tempArray.length; j++) {
        if (tempArray[j] === pointer) {
          anagramArray = [...anagramArray, strs[j]];
        }
      }
      anagramMap.set(pointer, anagramArray);
      solution = [...solution, anagramArray];
    }
  }
  return solution;
};

// Create a blank array to store the solution
// Make a copy of the intial array
// Loop through the array copy of strings, setting each to alphabetical order
// Pointer at first word, and oop through all the strings in the array checking to see if they are the same.
// If anagram, they should be equal to eachother, place into separate array
// Store the array of anagrams somehow
// Then put the solution together

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
