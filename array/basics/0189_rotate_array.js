// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative.

//https://leetcode.com/problems/rotate-array/

var rotate = function (nums, k) {
  let rotation = k % nums.length;
  numsCopy = nums.slice();
  for (let i = 0; i < nums.length; i++) {
    if (i < rotation) {
      nums[i] = numsCopy[nums.length - rotation + i];
    } else {
      nums[i] = numsCopy[i - rotation];
    }
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); //[3,99,-1,-100]
