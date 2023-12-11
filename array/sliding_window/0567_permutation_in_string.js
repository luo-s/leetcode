/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

// https://leetcode.com/problems/permutation-in-string/

// sliding window -- better version
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  // create dictionary based on array structure
  const cnt1 = new Array(26).fill(0);
  const cnt2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    cnt1[s1[i].charCodeAt() - "a".charCodeAt()]++;
    cnt2[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }
  if (cnt1.toString() === cnt2.toString()) return true;
  // start sliding
  for (let i = s1.length; i < s2.length; i++) {
    cnt2[s2[i].charCodeAt() - "a".charCodeAt()]++;
    cnt2[s2[i - s1.length].charCodeAt() - "a".charCodeAt()]--;
    if (cnt1.toString() === cnt2.toString()) return true;
  }
  return false;
};

// sliding window -- optimized
var checkInclusion = function (s1, s2) {
  const l1 = s1.length,
    l2 = s2.length;
  if (l1 > l2) return false;
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < l1; i++) {
    cnt[s1[i].charCodeAt() - "a".charCodeAt()]++;
    cnt[s2[i].charCodeAt() - "a".charCodeAt()]--;
  }
  // determine the permutation
  let diff = 0;
  for (const c of cnt) {
    if (c !== 0) diff++;
  }
  if (diff == 0) return true;
  // sliding the window, recounting diff each time
  for (let i = l1; i < l2; i++) {
    const add = s2[i].charCodeAt() - "a".charCodeAt();
    const rmv = s2[i - l1].charCodeAt() - "a".charCodeAt();
    if (add == rmv) continue;
    if (cnt[add] == 0) diff++;
    cnt[add]--;
    if (cnt[add] == 0) diff--;
    if (cnt[rmv] == 0) diff++;
    cnt[rmv]++;
    if (cnt[rmv] == 0) diff--;
    if (diff == 0) return true;
  }
  return false;
};

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
