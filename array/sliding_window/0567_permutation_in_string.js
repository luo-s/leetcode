/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

// https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function (s1, s2) {};

// hash table + sliding window
// time complexity O(n^2)
// space complexity O(n)
var checkInclusion = function (s1, s2) {
  // make a function to check permutation -- time complexity: O(n)
  function isPermutation(str1, str2) {
    let tracker1 = {},
      tracker2 = {};
    for (let letter of str1) {
      if (tracker1[letter]) {
        tracker1[letter]++;
      } else {
        tracker1[letter] = 1;
      }
    }
    for (let letter of str2) {
      if (tracker2[letter]) {
        tracker2[letter]++;
      } else {
        tracker2[letter] = 1;
      }
    }
    for (let key of Object.keys(tracker1)) {
      if (tracker2[key] !== tracker1[key]) {
        return false;
      }
    }
    return true;
  }
  let l1 = s1.length,
    l2 = s2.length;
  let left = 0,
    right = l1;
  while (right <= l2) {
    // slicing the window
    let substr = s2.slice(left, right);
    if (isPermutation(s1, substr)) return true;
    // sliding the window
    left++;
    right++;
  }
  return false;
};
