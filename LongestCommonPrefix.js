/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  //Go through each string in the array
  //Look at the first char in the string and compare it to all the strings
  //If its in all the strings we add that char to the prefix string
  //Else we return "" since there is no common amongst them all
  //After going through all the strings, we return the prefix value

  let prefix = "";

  const word = strs[0];

  if (strs.length === 1 || strs[0] === "") {
    return strs[0];
  }

  for (let j = 0; j < word.length; j++) {
    let prefixStatus = false;
    const char = word.charAt(j);
    console.log("Now checking this char: ", char);

    for (let i = 0; i < strs.length - 1; i++) {
      console.log("Checking ", char, "in ", strs[i + 1]);

      if (char === strs[i + 1].charAt(j)) {
        prefixStatus = true;
      } else {
        return prefix;
      }
    }

    if (prefixStatus === true) {
      prefix += char;
      console.log("Prefix: ", prefix);
    }
  }
  return prefix;
};

const strings = ["flower", "flower", "flower", "flower"];

const answer = longestCommonPrefix(strings);
console.log("Here is the answer: ", answer);
