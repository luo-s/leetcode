/*
You are given a string num, representing a large integer. Return the 
largest-valued odd integer (as a string) that is a non-empty substring 
of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.
num only consists of digits and does not contain any leading zeros.
*/
// https://leetcode.com/problems/largest-odd-number-in-string/description/

// brute force
// time complexity O(n^2)
// space complexity O(n^2)
var largestOddNumber = function (num) {
  for (let right = num.length - 1; right >= 0; right--) {
    if (num[right] % 2 === 1) return num.slice(0, right + 1);
  }
  return "";
};
