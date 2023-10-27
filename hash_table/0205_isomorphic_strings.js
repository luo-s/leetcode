/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while 
preserving the order of characters. No two characters may map to the same 
character, but a character may map to itself.
*/

// https://leetcode.com/problems/isomorphic-strings/

// optimized solution
// time complexity O(n)
// space complexity O(1)
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }
  return true;
};

// verity 1-to-1 mapping between two strings s and t
// time complexity O(n)
// space complexity O(n)
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map1.has(s[i]) && !map2.has(t[i])) {
      map1.set(s[i], t[i]);
      map2.set(t[i], s[i]);
    } else {
      if (!map1.get(s[i]) || map1.get(s[i]) != t[i]) return false;
    }
  }
  return true;
};
