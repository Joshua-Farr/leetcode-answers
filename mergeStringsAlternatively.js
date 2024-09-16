// 1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let mergedString = "";

  let word1Pointer = 0;
  let word2Pointer = 0;

  if (word1.length === word2.length) {
    for (let i = 0; i < word1.length; i++) {
      if (word1.charAt(i)) {
        mergedString += word1.charAt(word1Pointer + i);
        mergedString += word2.charAt(word2Pointer + i);
      }
    }
  } else {
    let longestWord = word1;
    if (word1.length < word2.length) {
      longestWord = word2;
    }

    for (let i = 0; i < longestWord.length; i++) {
      if (longestWord.charAt(i)) {
        mergedString += word1.charAt(word1Pointer + i);
        mergedString += word2.charAt(word2Pointer + i);
      }
    }
  }
  return mergedString;
};

const test = mergeAlternately("abcd", "pq");
console.log("Final Word: ", test);
