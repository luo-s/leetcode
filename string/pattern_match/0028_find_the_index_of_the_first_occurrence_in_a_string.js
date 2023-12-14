/*
Given two strings needle and haystack, return the index of the first occurrence of 
needle in haystack, or -1 if needle is not part of haystack.
*/
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// rewrite haystack.indexOf(needle, 0);
// sliding window
// time complexity O(l1 * l2)
// space complexity O(1)
var strStr = function (haystack, needle) {
  let p = 0;
  while (p <= haystack.length - needle.length) {
    let i = 0;
    while (i < needle.length) {
      if (haystack[p + i] !== needle[i]) {
        break;
      }
      if (haystack[p + i] === needle[i] && i == needle.length - 1) {
        return p;
      }
      i++;
    }
    p++;
  }
  return -1;
};
