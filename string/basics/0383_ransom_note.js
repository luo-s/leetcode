/*
Given two strings ransomNote and magazine, return true if ransomNote can be 
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/
// hash table
// time complexity O(n)
// space complexity O(n)
var canConstruct = function (ransomNote, magazine) {
  let ransom = {};
  let mag = {};
  for (let letter of ransomNote) {
    if (!ransom[letter]) {
      ransom[letter] = 1;
    } else {
      ransom[letter]++;
    }
  }
  for (let letter of magazine) {
    if (!mag[letter]) {
      mag[letter] = 1;
    } else {
      mag[letter]++;
    }
  }
  for (let key in ransom) {
    if (mag[key] === undefined) {
      return false;
    } else if (ransom[key] > mag[key]) {
      return false;
    }
  }
  return true;
};

// higher function
// time complexity O(n)
// space complexity O(1)
var canConstruct = function (ransomNote, magazine) {
  for (let letter of magazine) {
    ransomNote = ransomNote.replace(letter, "");
  }
  return !ransomNote ? true : false;
};
