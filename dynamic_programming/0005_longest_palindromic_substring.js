/*
Given a string s, return the longest 
palindromic substring in s.

s consist of only digits and English letters.
*/

// https://leetcode.com/problems/longest-palindromic-substring/

// brute force
// time complexity O(n^3)
// space complexity O(1);
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  let longest = "";
  let substr;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      substr = s.slice(i, j);
      if (isPalindrome(substr)) {
        if (substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  }
  return longest;
};

// center spread solution
// time complexity O(n^2)
// space complexity O(1)
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let left = 0,
    right = 0;
  for (let i = 0; i < s.length; i++) {
    centerSpread(i, i);
    centerSpread(i, i + 1);
  }
  function centerSpread(start, end) {
    while (start >= 0 && end < s.length && s[start] == s[end]) {
      start--;
      end++;
    }
    if (end - start - 1 > right - left - 1) {
      left = start;
      right = end;
    }
  }
  return s.slice(left + 1, right);
};
