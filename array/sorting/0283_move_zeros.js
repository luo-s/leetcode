/*
Given an integer array nums, move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
// https://leetcode.com/problems/move-zeroes/

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
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
      right--;
    }
  }
  return nums;
};

console.log(moveZeroes([1, 2, 3, 0, 4, 5]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1]));
