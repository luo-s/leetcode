/*
Write a function to find the longest common prefix string amongst an array of 
strings.

If there is no common prefix, return an empty string "".

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

// https://leetcode.com/problems/longest-common-prefix/

// time complexity O(n^2)
// space complexity O(1)
var longestCommonPrefix = function (strs) {
  let ans = "";
  let minLength = Math.min(...strs.map((ele) => ele.length));
  if (minLength == 0) return "";
  for (let i = 0; i < minLength; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) return ans;
    }
    ans += strs[0][i];
  }
  return ans;
};

// time complexity O(n^2)
// space complexity O(1)
var longestCommonPrefix = function (strs) {
  let ans = "";
  for (let i = 0; i <= 200; i++) {
    // use the max string length to aviod higher order function call
    for (let str of strs) {
      if (str[i] !== strs[0][i]) return ans;
    }
    if (strs[0][i]) ans += strs[0][i];
  }
  return ans;
};
