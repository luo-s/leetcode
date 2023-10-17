/*
Given a binary array nums, return the maximum number of consecutive 1's 
in the array.
*/

// http://leetcode.com/problems/max-consecutive-ones/

// traverse
// time compelxity O(n)
// space complexity O(1)
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(count, maxCount);
};
