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
      let temp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = temp;
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
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] !== 0) {
      left++;
    } else if (nums[right] === 0) {
      right--;
    } else {
      for (let i = left; i < right; i++) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  }
  return nums;
};
