/*
A phrase is a palindrome if, after converting all uppercase letters into 
lowercase letters and removing all non-alphanumeric characters, it reads 
the same forward and backward. Alphanumeric characters include letters and 
numbers.

s consists only of printable ASCII characters.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
// https://leetcode.com/problems/valid-palindrome/

// two pointers
// time complexity O(n)
// space complexity O(1)
var isPalindrome = function (s) {
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
