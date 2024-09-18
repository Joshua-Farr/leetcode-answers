var gcdOfStrings = function (str1, str2) {
  let commonDivisor = "";

  // Start with first letter of each string
  // If they do not match, then return blank string
  // If they do, add letter to common divisor and see if the next letter is the same
  // Continue until there is no match
  // Return the commonDivisor string

  const str1len = str1.length;
  const str2len = str2.length;

  const shortestWord = str1len >= str2len ? str2 : str1;
  const longestWord = str1len >= str2len ? str1 : str2;

  for (let i = 0; i < longestWord.length; i++) {
    // console.log(shortestWord.charAt(i));
    if (shortestWord.charAt(i) === longestWord.charAt(i)) {
      commonDivisor += shortestWord.charAt(i);
    }
  }

  return commonDivisor;
};

const answer = gcdOfStrings("ABABAB", "ABAB");
console.log("Here is the lowest common divisor: ", answer);
