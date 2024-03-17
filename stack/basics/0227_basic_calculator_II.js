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

// time complexity  O(n)
// space complexity O(n)
var calculate = function (s) {
  let stack = [],
    num = "",
    preOperator = "+";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    else if (!isNaN(s[i])) {
      num += s[i];
    } else if (isNaN(s[i]) || i === s.length - 1) {
      if (preOperator === "+") stack.push(Number(num));
      else if (preOperator === "-") stack.push(-Number(num));
      else if (preOperator === "*") stack.push(stack.pop() * Number(num));
      else if (preOperator === "/")
        stack.push(Math.trunc(stack.pop() / Number(num)));
      preOperator = s[i];
      num = "";
    }
  }
  console.log(stack);
  return stack.reduce((acc, cur) => acc + cur);
};

console.log(calculate("3+2*2"));
