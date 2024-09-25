/*
Your friend is typing his name into a keyboard. Sometimes, when typing a character 
c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return True if it is possible 
that it was your friends name, with some characters (possibly none) being long 
pressed.
*/

// https://leetcode.com/problems/long-pressed-name/

// two pointers
// time complexity O(m + n)
// space complexity O(1)
var isLongPressedName = function (name, typed) {
  let p1 = 0,
    p2 = 0;
  while (p1 < name.length && p2 < typed.length) {
    if (name[p1] !== typed[p2]) return false;
    p1++;
    p2++;
    if (name[p1] !== name[p1 - 1]) {
      while (typed[p2] === typed[p2 - 1]) {
        p2++;
      }
    }
  }
  if (p1 < name.length || p2 < typed.length) return false;
  return true;
};
