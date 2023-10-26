/*
Given two strings ransomNote and magazine, return true if ransomNote can be 
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

// https://leetcode.com/problems/ransom-note/

// hash table
// time complexity O(n)
// space complexity O(1)
var canConstruct = function (ransomNote, magazine) {
  let dictNote = {},
    dictMag = {};
  for (let char of ransomNote) {
    if (!dictNote[char]) {
      dictNote[char] = 1;
    } else {
      dictNote[char]++;
    }
  }
  for (let char of magazine) {
    if (!dictMag[char]) {
      dictMag[char] = 1;
    } else {
      dictMag[char]++;
    }
  }
  for (let key of Object.keys(dictNote)) {
    if (!dictMag[key] || dictMag[key] < dictNote[key]) return false;
  }
  return true;
};
