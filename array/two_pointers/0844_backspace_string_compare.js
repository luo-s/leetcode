/*
Given two strings s and t, return true if they are equal when both are typed into 
empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
s and t only contain lowercase letters and '#' characters.
*/

// https://leetcode.com/problems/backspace-string-compare/

// two pointers

var backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;
  let skipS = 0,
    skipT = 0;
  while (p1 >= 0 || p2 >= 0) {
    while (p1 >= 0) {
      if (s[p1] === "#") {
        skipS++;
        p1--;
      } else if (skipS > 0) {
        skipS--;
        p1--;
      } else break;
    }
    while (p2 >= 0) {
      if (t[p2] === "#") {
        skipT++;
        p2--;
      } else if (skipT > 0) {
        skipT--;
        p2--;
      } else break;
    }
    if (s[p1] !== t[p2]) return false;
    p1--;
    p2--;
  }
  return true;
};
