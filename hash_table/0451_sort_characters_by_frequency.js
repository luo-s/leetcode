/*
Given a string s, sort it in decreasing order based on the frequency of the 
characters. The frequency of a character is the number of times it appears in 
the string.

Return the sorted string. If there are multiple answers, return any of them.
*/

// https://leetcode.com/problems/sort-characters-by-frequency/

// higher order function
// time complexity O(n)
// space complexity O(n)
var frequencySort = function (s) {
  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((ele) => ele[0].repeat(ele[1]))
    .join("");
};

// string is immutable, we have to make another string.
// time complexity O(n), every characters being called once
// space complexity O(n)
var frequencySort = function (s) {
  // make a dictionary of string s
  let dict = {};
  for (let char of s) {
    if (!dict[char]) dict[char] = 1;
    else dict[char]++;
  }
  // get the most frequency
  let freq = Object.values(dict);
  let max = Math.max(...freq);
  // eleminate duplicates
  let set = new Set(s);
  // make a new array, starting from the most frequencied character
  let ans = [];
  while (max > 0) {
    for (let char of set) {
      if (dict[char] == max) {
        let i = max;
        while (i > 0) {
          ans.push(char);
          i--;
        }
      }
    }
    max--;
  }
  return ans.join("");
};
