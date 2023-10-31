/*
Given two strings s and p, return an array of all the start indices of p's 
anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.
*/

// https://leetcode.com/problems/find-all-anagrams-in-a-string/

// sliding window
// time complexity O(n)
// space complexity O(1)
var findAnagrams = function (s, p) {
  let ans = [];
  if (s.length < p.length) return ans;
  let cnt = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    cnt[s[i].charCodeAt() - "a".charCodeAt()]++;
    cnt[p[i].charCodeAt() - "a".charCodeAt()]--;
  }
  let diff = 0;
  for (let c of cnt) {
    if (c !== 0) diff++;
  }
  if (diff == 0) ans.push(0);
  for (let i = p.length; i < s.length; i++) {
    let add = s[i].charCodeAt() - "a".charCodeAt();
    let rmv = s[i - p.length].charCodeAt() - "a".charCodeAt();
    if (cnt[add] == 0) diff++;
    cnt[add]++;
    if (cnt[add] == 0) diff--;
    if (cnt[rmv] == 0) diff++;
    cnt[rmv]--;
    if (cnt[rmv] == 0) diff--;
    if (diff == 0) ans.push(i - p.length + 1);
  }
  return ans;
};
