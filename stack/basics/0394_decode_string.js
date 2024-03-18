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

const { is } = require("@babel/types");

// https://leetcode.com/problems/decode-string/

// time complexity O(n)
// space complexity O(n)
var decodeString = function (s) {
  var isNum = (char) => char >= "0" && char <= "9";
  var isLetter = (char) => char >= "a" && char <= "z";
  let stack = [],
    num = "",
    str = "";
  for (let i = 0; i < s.length; i++) {
    if (isNum(s[i])) {
      num += s[i];
    } else if (s[i] === "[") {
      stack.push([Number(num), str]);
      str = "";
      num = "";
    } else if (s[i] === "]") {
      let [n, preStr] = stack.pop();
      console.log(n, preStr);
      str = preStr + str.repeat(n);
    } else if (isLetter(s[i])) {
      str += s[i];
    }
  }
  return str;
};
