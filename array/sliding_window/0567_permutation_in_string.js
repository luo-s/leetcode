/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

// https://leetcode.com/problems/permutation-in-string/

// hash table + sliding window
// time complexity O(n^2)
// space complexity O(n)
var checkInclusion = function (s1, s2) {
  // make dictionary of s1
  let tracker1 = {};
  for (let letter of s1) {
    if (tracker1[letter]) {
      tracker1[letter]++;
    } else {
      tracker1[letter] = 1;
    }
  }

  let l1 = s1.length,
    l2 = s2.length;
  let left = 0,
    right = l1;
  while (right <= l2) {
    // slice the sliding window substring
    let substr = s2.slice(left, right);
    // make the dictionary of substring
    let tracker2 = {};
    for (let letter of substr) {
      if (tracker2[letter]) {
        tracker2[letter]++;
      } else {
        tracker2[letter] = 1;
      }
    }
    // compare the two dictionaries
    let indicator = true;
    for (let key of Object.keys(tracker1)) {
      if (tracker2[key] !== tracker1[key]) {
        indicator = false;
        break;
      }
    }
    if (indicator) {
      return true;
    }
    left++;
    right++;
  }
  return false;
};
