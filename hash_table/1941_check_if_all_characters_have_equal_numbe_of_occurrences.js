/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number 
of occurrences (i.e., the same frequency).
*/

// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

// hash table
// time complexity O(n)
// space complexity O(n)
var areOccurrencesEqual = function (s) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] == undefined) {
      dict[s[i]] = 1;
    } else {
      dict[s[i]]++;
    }
  }
  let benchmark = dict[s[0]];
  for (let value of Object.values(dict)) {
    if (value !== benchmark) return false;
  }
  return true;
};

var areOccurrencesEqual = function (s) {
  let dict = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!dict.has(s[i])) {
      dict.set(s[i], 1);
    } else {
      dict.set(s[i], dict.get(s[i]) + 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (dict.get(s[i]) !== s.length / dict.size) return false;
  }
  return true;
};
