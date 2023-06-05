/*
Given two strings s and t, return true if t is an anagram of s, and false 
otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once. 
*/
// https://leetcode.com/problems/valid-anagram/

// hash table
// time complexity O(n)
// space complexity O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let trackerS = {};
  let trackerT = {};
  for (let letter of s) {
    if (trackerS[letter] !== undefined) {
      trackerS[letter]++;
    } else {
      trackerS[letter] = 1;
    }
  }
  for (let letter of t) {
    if (trackerT[letter] !== undefined) {
      trackerT[letter]++;
    } else {
      trackerT[letter] = 1;
    }
  }
  if (Object.keys(trackerS).length !== Object.keys(trackerT).length)
    return false;
  for (let key of Object.keys(trackerS)) {
    if (trackerS[key] !== trackerT[key]) return false;
  }
  return true;
};

// sorting
// time complexity O(n)
// space commplexity O(1)
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
