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

  for (let j = 0; j < strs[0].length; j++) {
    let prefixStatus = false;
    const char = strs[0].charAt(j);
    for (let i = 0; i < strs.length - 1; i++) {
      console.log("Checking ", char, "in ", strs[i + 1]);
      if (strs[i + 1].charAt(j) === char) {
        prefixStatus = true;
      } else {
        false;
      }
      if (!prefixStatus) {
        return "";
      }
    }
    if (prefixStatus) {
      prefix += char;
    }

    return prefix;
  }

  return;
};
