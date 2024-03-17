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
  let array = [],
    num = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    else if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
      array.push(s[i]);
    } else {
      num += s[i];
      if (isNaN(parseInt(s[i + 1])) || i === s.length - 1) {
        array.push(parseInt(num));
        num = "";
      }
    }
  }
  let stack = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "*") {
      stack.push(stack.pop() * array[i + 1]);
      i++;
    } else if (array[i] === "/") {
      stack.push(Math.trunc(stack.pop() / array[i + 1]));
      i++;
    } else if (array[i] === "-") {
      stack.push(-array[i + 1]);
      i++;
    } else if (array[i] === "+") {
      continue;
    } else {
      stack.push(array[i]);
    }
  }
  return stack.reduce((a, b) => a + b);
};

// optimized solution
var calculate = function (s) {
  var isNum = (char) => char >= "0" && char <= "9";
  var isOp = (char) =>
    char === "+" || char === "-" || char === "*" || char === "/";
  let stack = [],
    num = 0,
    sign = "+";
  for (let i = 0; i < s.length; i++) {
    if (isNum(s[i])) {
      num = num * 10 + parseInt(s[i]);
    }
    if (isOp(s[i]) || i === s.length - 1) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        stack.push(Math.trunc(stack.pop() / num));
      }
      sign = s[i];
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b);
};
