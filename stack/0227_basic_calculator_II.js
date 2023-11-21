/*
Given a string s which represents an expression, evaluate this expression and 
return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate 
results will be in the range of [-2^31, 2^31 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as 
mathematical expressions, such as eval().

1 <= s.length <= 3 * 10^5
s consists of integers and operators ('+', '-', '*', '/') separated by some 
number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range 
[0, 2^31 - 1].
The answer is guaranteed to fit in a 32-bit integer.
*/

// https://leetcode.com/problems/basic-calculator-ii/

var calculate = function (s) {
  let stack = [];
  let index = 0;
  let op = "+";
  while (index < s.length) {
    if (s[index] === " ") {
      index++;
      continue;
    }
    if (!isNaN(s[index])) {
      let num = Number(s[index]);
      while (
        index + 1 < s.length &&
        !isNaN(s[index + 1]) &&
        s[index + 1] !== " "
      ) {
        index++;
        num = 10 * num + Number(s[index]);
      }
      console.log(num);
      if (op == "+") {
        stack.push(num);
      } else if (op == "-") {
        stack.push(0 - num);
      } else if (op == "*") {
        let top = stack.pop();
        stack.push(top * num);
      } else if (op == "/") {
        let top = stack.pop();
        let result = top / num;
        if (result >= 0) stack.push(Math.floor(result));
        else stack.push(Math.ceil(result));
      }
    } else {
      op = s[index];
    }
    index++;
  }
  console.log(stack);
  return stack.reduce((acc, cur) => acc + cur);
};
