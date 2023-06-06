/* 
You are given an array of strings tokens that represents an arithmetic 
expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the 
expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
*/
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function (tokens) {
  const calculator = [];
  for (let i = 0; i < tokens.length; i++) {
    if (Number.isNaN(Number(tokens[i]))) {
      operand2 = Number(calculator.pop());
      operand1 = Number(calculator.pop());
      switch (tokens[i]) {
        case "+":
          calculator.push(operand1 + operand2);
          break;
        case "-":
          calculator.push(operand1 - operand2);
          break;
        case "*":
          calculator.push(operand1 * operand2);
          break;
        case "/":
          if (operand1 / operand2 > 0) {
            calculator.push(Math.floor(operand1 / operand2));
          } else {
            calculator.push(Math.ceil(operand1 / operand2));
          }
      }
    } else {
      calculator.push(Number(tokens[i]));
    }
  }
  return calculator[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); //((2 + 1) * 3) = 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); //(4 + (13 / 5)) = 6
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
); // ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
