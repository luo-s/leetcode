/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and 
']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
s consists of parentheses only '()[]{}'.
*/

// simplified version
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

function isValid(s) {
  if (s.length % 2 === 1) return false;
  const check = [];
  const open = "([{";
  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      check.push(s[i]);
    } else {
      if (s[i] === ")") {
        if (check[check.length - 1] === "(") {
          check.pop();
        } else {
          return false;
        }
      } else if (s[i] === "]") {
        if (check[check.length - 1] === "[") {
          check.pop();
        } else {
          return false;
        }
      } else if (s[i] === "}") {
        if (check[check.length - 1] === "{") {
          check.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (check.length === 0) {
    return true;
  } else {
    return false;
  }
}
