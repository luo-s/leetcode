/*
Given a string s, remove duplicate letters so that every letter appears once 
and only once. You must make sure your result is the smallest in 
lexicographical order among all possible results.
*/

// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/description/

/* 
get the sequence of letter in s, and construct a monotone stack, 
1) if char > stack[stack.length - 1], push it into stack;
2) if char < stack[stack.length - 1], and we have more than 1 char left, 
   pop until char > stack[stack.length - 1] or stack is empty, then push
3) if stack includes char, skip it, and count[char] - 1 
*/
// time complexity: O(n)
// space complexity: O(n)
var removeDuplicateLetters = function (s) {
  let count = new Map();
  for (let char of s) {
    count.set(char, count.get(char) + 1 || 1);
  }
  let stack = [];
  for (let char of s) {
    if (stack.length === 0) {
      stack.push(char);
    } else if (stack.includes(char)) {
      count.set(char, count.get(char) - 1);
      continue;
    } else if (char < stack[stack.length - 1]) {
      while (
        count.get(stack[stack.length - 1]) > 1 &&
        char < stack[stack.length - 1] &&
        stack.length > 0
      ) {
        let c = stack.pop();
        count.set(c, count.get(c) - 1);
      }
      stack.push(char);
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
