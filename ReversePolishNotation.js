//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.

//Note that:
//The valid operators are '+', '-', '*', and '/'.
//Each operand may be an integer or another expression.
//The division between two integers always truncates toward zero.
//There will not be any division by zero.
//The input represents a valid arithmetic expression in a reverse polish notation.
//The answer and all the intermediate calculations can be represented in a 32-bit integer.

//Example:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

var evalRPN = function (tokens) {
  //Create a stack
  //Loop through the array and check to see if the value is an operand or a number
  // If number, push to top of stack
  // If operand, pop top two items from the stack and complete calcualtion
  // Add resulting number back onto the stack
  //After we loop through everything, we want to output the resulting number that is in the stack
  //Stack should only contain one number

  let stack = [];

  for (const token of tokens) {
    console.log("Here is the stack: ", stack);
    if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
      console.log("Pushing ", token, "onto the stack!");
      stack.push(token);
    } else {
      const value1 = stack.pop();
      console.log("Popping off ", value1, "from the stack");
      const value2 = stack.pop();
      console.log("Popping off ", value2, "from the stack");

      const resultingNumber = doTheMath(value1, value2, token);

      stack.push(resultingNumber);
    }
  }

  return stack[0];
};

const doTheMath = (val1, val2, operand) => {
  const number1 = Number(val1);
  const number2 = Number(val2);

  let result = 0;

  if (operand === "+") {
    result = number1 + number2;
  } else if (operand === "-") {
    result = number2 - number1;
  } else if (operand === "*") {
    result = number1 * number2;
  } else if (operand === "/") {
    result = number2 / number1;
  }

  return Math.trunc(result);
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));

console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
