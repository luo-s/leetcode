/*
Write a function that reverses a string. The input string is given as an s of 
characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

// https://leetcode.com/problems/reverse-string/

// two pointers
// time complexity O(n)
// space complexity O(1)
var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};
