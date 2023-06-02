/*
Given a string s which consists of lowercase or uppercase letters, return the 
length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome 
here.
*/
// https://leetcode.com/problems/longest-palindrome/

// brute force, hash table
var longestPalindrome = function (s) {
  if (s.length <= 1) return s.length;
  let tracker = {};
  for (let letter of s) {
    if (tracker[letter] !== undefined) {
      tracker[letter]++;
    } else {
      tracker[letter] = 1;
    }
  }
  let length = 0;
  let count = 0;
  for (let val of Object.values(tracker)) {
    length += Math.floor(val / 2) * 2;
    if (val % 2 !== 0) count = 1;
  }
  return length + count;
};

console.log(longestPalindrome("abccccdd"));
