/*
Given a string s, find the length of the longest substring without repeating 
characters.
*/
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// sliding window + Set
// time complexity O(n)
// space complexity O(n)
var lengthOfLongestSubstring = function (s) {
  const chars = new Set();
  let left = 0;
  let right = 0;
  let max = 0;
  while (right < s.length) {
    if (!chars.has(s[right])) {
      chars.add(s[right]);
      right++;
      max = Math.max(max, chars.size);
    } else {
      chars.delete(s[left]);
      left++;
    }
  }
  return max;
};

