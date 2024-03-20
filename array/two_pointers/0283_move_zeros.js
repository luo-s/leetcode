/*
Given an integer array nums, move all 0's to the end of it while maintaining the 
relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

// fast and slow pointers
// time complexity O(n)
// space complexity O(1)
var moveZeroes = function (nums) {
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
    fast++;
  }
  return nums;
};

// two pointers
// time complexity O(n)
// space complexity O(1)
var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[left] !== 0) {
      left++;
      right++;
    } else if (nums[right] === 0) {
      right++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right++;
    }
  }
  return nums;
};
