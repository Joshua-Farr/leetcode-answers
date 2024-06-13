var isPalindrome = function (x) {
  numberString = x.toString();

  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] !== numberString[numberString.length - i]) {
      return false;
    }
  }
  return true;
};

const result = isPalindrome(122);
console.log("Result: ", result);
