/*
Given an array of strings strs, group the anagrams together. You can return 
the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, typically using all the original letters exactly once.

strs[i] consists of lowercase English letters.
*/
// https://leetcode.com/problems/group-anagrams/

// sort
// time complexity O(n)
// space complexity O(n)
var groupAnagrams = function (strs) {
  let tracker = {};
  if (strs.length <= 1) return [strs];
  for (let str of strs) {
    const strCopy = str.split("").sort().join("");
    if (tracker[strCopy] === undefined) {
      tracker[strCopy] = new Array();
      tracker[strCopy].push(str);
    } else {
      tracker[strCopy].push(str);
    }
  }
  let result = [];
  for (let val of Object.values(tracker)) {
    result.push(val);
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
