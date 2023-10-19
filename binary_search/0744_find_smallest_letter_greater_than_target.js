/*
You are given an array of characters letters that is sorted in non-decreasing 
order, and a character target. There are at least two different characters in 
letters.

Return the smallest character in letters that is lexicographically greater 
than target. If such a character does not exist, return the first character 
in letters.

letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.
*/
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// same problem: https://leetcode.com/problems/search-insert-position/

// find first letter greater than target, if non return letters[0]
var nextGreatestLetter = function (letters, target) {
  if (letters[letters.length - 1] <= target) return letters[0];
  let left = 0;
  let right = letters.length - 1;
  // search [0, l-1]
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (letters[mid] < target) {
      // target belongs to [mid + 1, right]
      left = mid + 1;
    } else if (letters[mid] > target) {
      // target belongs to [left, mid - 1]
      right = mid - 1;
    } else if (letters[mid] == target) {
      // target == letters[mid]
      left = mid + 1;
    }
  }
  return letters[left];
};

var nextGreatestLetter = function (letters, target) {
  if (letters[letters.length - 1] <= target) return letters[0];
  let left = 0;
  let right = letters.length;
  // search [0, l)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (letters[mid] < target) {
      // target belongs to [mid + 1, right)
      left = mid + 1;
    } else if (letters[mid] > target) {
      // target belongs to (left, mid)
      right = mid;
    } else if (letters[mid] == target) {
      // target == letters[mid]
      left = mid + 1;
    }
  }
  return letters[left];
};
