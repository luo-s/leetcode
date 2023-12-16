/*
Given two strings needle and haystack, return the index of the first occurrence of 
needle in haystack, or -1 if needle is not part of haystack.
*/
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// rewrite haystack.indexOf(needle, 0);
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

var strStr = function (haystack, needle) {
  // corner case
  if (!haystack || !needle || haystack.length < needle.length) return -1;
  let i = 0,
    j = 0;
  // loop through haystack and needle at the same time
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1; // failed matching, reset i to the next index
      j = 0; // failed matching, reset j to 0
    }
  }
  // if needle matches, return the index
  if (j === needle.length) return i - j;
  // if needle does not match, return -1
  return -1;
};
