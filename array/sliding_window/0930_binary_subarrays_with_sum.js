/*
Given a binary array nums and an integer goal, 
return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.
*/

// https://leetcode.com/problems/binary-subarrays-with-sum/description

// two pointers
var numSubarraysWithSum = function (nums, goal) {
  // corner cases
  if (nums.length === 0 || goal > nums.length) return 0;
  if (goal === nums.length) return 1;
  // if goal is 0
  if (goal === 0) {
    nums = nums.join("").split("1");
    let count = 0;
    for (let ele of nums) {
      count += ((ele.length + 1) * ele.length) / 2;
    }
    // if goal > 0
  } else if (goal > 0) {
    let left = 0,
      right = 0,
      left1 = nums.indexOf(1),
      sum = 0,
      count = 0;
    while (right < nums.length) {
      sum += nums[right];
      if (sum === goal) {
        let temp = right;
        while (nums[temp + 1] === 0) {
          temp++;
        }
        const leftZero = left1 - left,
          rightZero = temp - right;
        count += (leftZero + 1) * (rightZero + 1);
        left = left1 + 1;
        left1 = nums.indexOf(1, left);
        sum -= 1;
      }
      right++;
    }
  }
  return count;
};
