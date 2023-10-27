/*
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads the 
same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// https://leetcode.com/problems/valid-palindrome/

// two pointers + regexp
// time complexity O(n)
// space complexity O(1)
var isPalindrome = function (s) {
  // removing all non-alphanumeric characters
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};
