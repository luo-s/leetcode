/*
Given an array of strings strs, group the anagrams together. You can return 
the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, typically using all the original letters exactly once.

strs[i] consists of lowercase English letters.
*/
// https://leetcode.com/problems/group-anagrams/

// sorting + hash
// time complexity O(nlogn)
// space complexity O(n)
var groupAnagrams = function (strs) {
  if (strs.length <= 1) return [strs];
  let map = new Map();
  for (let str of strs) {
    const strSort = str.split("").sort().join("");
    if (!map.has(strSort)) {
      map.set(strSort, [str]);
    } else {
      map.get(strSort).push(str);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
