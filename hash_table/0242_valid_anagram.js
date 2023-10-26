/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.
*/

// https://leetcode.com/problems/valid-anagram/

// hash table
// time complexity O(n)
// space complexity O(26)
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let dictS = {};
  for (let char of s) {
    if (!dictS[char]) dictS[char] = 1;
    else dictS[char]++;
  }
  let dictT = {};
  for (let char of t) {
    if (!dictT[char]) dictT[char] = 1;
    else dictT[char]++;
  }
  for (let key of Object.keys(dictS)) {
    if (!dictT[key] || dictS[key] !== dictT[key]) return false;
  }
  return true;
};
