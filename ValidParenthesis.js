// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Example:
// Input: s = "()"
// Output: true

var isValid = function (s) {
  // Create an empty stack
  // Traverse the string
  // Check the top of the stack to see if the current char in the string is on top (corresponding parenthesis)
  //If not, we need to add the char to the stack, move to the next char
  //If so, we we need to pop off the char from the stack, move to the next char.

  //Check the stack, if it is empty, then return true, if not, then return false.

  const parenthesisStack = [];

  for (const char of s) {
    if (
      parenthesisStack.length === 0 ||
      getPairedParenthesis(char) !==
        parenthesisStack[parenthesisStack.length - 1]
    ) {
      parenthesisStack.push(char);
      console.log("Adding ", char, " to the stack!");
    } else {
      parenthesisStack.pop();
    }

    console.log(parenthesisStack);
  }
  return parenthesisStack.length !== 0 ? false : true;
};

const getPairedParenthesis = (char) => {
  if (char === ")") {
    return "(";
  } else if (char === "]") {
    return "[";
  } else if (char === "}") {
    return "{";
  }
};

console.log(isValid("()[]{}"));
console.log(isValid("([]}"));
