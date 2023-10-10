/*
Given a string s, find the length of the longest substring without repeating 
characters.
*/
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// brute force
// time complexity O(n^2)
// space complexity O(n^2)
var lengthOfLongestSubstring = function (s) {
  function isDuplicate(str) {
    let tracker = {};
    for (let letter of str) {
      if (tracker[letter] !== undefined) {
        return true;
      } else {
        tracker[letter]++;
      }
    }
    return false;
  }
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let substr = s.slice(i, j);
      if (!isDuplicate(substr)) result = Math.max(result, substr.length);
    }
  }
  return result;
};

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

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("abccba")); // 3
