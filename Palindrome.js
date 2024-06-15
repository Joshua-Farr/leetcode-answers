var isPalindrome = function (x) {
  numberString = x.toString();
  numberStringLength = numberString.length;

  for (let i = 0; i < numberStringLength - 1; i++) {
    if (numberString[i] !== numberString[numberStringLength - i - 1]) {
      return false;
    }
  }
  return true;
};

const result = isPalindrome(121);
console.log("Result: ", result);
