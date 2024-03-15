/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and 
']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
s consists of parentheses only '()[]{}'.
*/

// https://leetcode.com/problems/valid-parentheses/description/

// FILO -> utilizing data structure: stack
// time complexity O(n)
// space complexity O(n)
function isValid(s) {
  if (s.length % 2) return false;
  let stack = [];
  for (let par of s) {
    switch (par) {
      case "(":
      case "{":
      case "[":
        stack.push(par);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
    }
  }
  return !stack.length;
}
