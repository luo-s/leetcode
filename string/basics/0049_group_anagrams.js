/*
Given an array of strings strs, group the anagrams together. You can return 
the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, typically using all the original letters exactly once.

strs[i] consists of lowercase English letters.
*/
// https://leetcode.com/problems/group-anagrams/

// sort
// time complexity O(nlogn)
// space complexity O(n)
var groupAnagrams = function (strs) {
  if (strs.length <= 1) return [strs];
  let tracker = {};
  for (let str of strs) {
    const strSort = str.split("").sort().join("");
    if (tracker[strSort] === undefined) {
      tracker[strSort] = new Array();
      tracker[strSort].push(str);
    } else {
      tracker[strSort].push(str);
    }
  }
  let result = [];
  for (let val of Object.values(tracker)) {
    result.push(val);
  }
  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
