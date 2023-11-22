/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the 
square brackets is being repeated exactly k times. Note that k is guaranteed 
to be a positive integer.

You may assume that the input string is always valid; there are no extra white 
spaces, square brackets are well-formed, etc. Furthermore, you may assume that 
the original data does not contain any digits and that digits are only for those 
repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 10^5.

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

// https://leetcode.com/problems/decode-string/

// stack
// time complexity O(n)
// space complexity O(n)
var decodeString = function (s) {
  let stack = [];
  let ans = "";
  let rep = 0;
  for (let char of s) {
    if (char == "[") {
      // every '[', push to stack
      stack.push([rep, ans]);
      ans = "";
      rep = 0;
    } else if (char == "]") {
      // every ']' pop out and resolve
      let pop = stack.pop();
      ans = pop[1] + ans.repeat(pop[0]);
    } else if (char >= "0" && char <= "9") {
      rep = rep * 10 + Number(char);
    } else {
      ans += char;
    }
  }
  return ans;
};
