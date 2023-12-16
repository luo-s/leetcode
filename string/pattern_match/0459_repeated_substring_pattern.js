/*
Given a string s, check if it can be constructed by taking a substring of it 
and appending multiple copies of the substring together.
*/

// https://leetcode.com/problems/repeated-substring-pattern/

var repeatedSubstringPattern = function (s) {
  let length = s.length;
  let mid = Math.floor(length / 2);
  for (let i = 1; i <= mid; i++) {
    if (length % i !== 0) continue;
    let count = length / i;
    let temp = "";
    let sub = s.substring(0, i);
    for (let j = 0; j < count; j++) {
      temp += sub;
    }
    if (temp === s) return true;
  }
  return false;
};
