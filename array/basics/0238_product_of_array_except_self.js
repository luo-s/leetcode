/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the productLeft of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 
32-bit integer.

You must write an algorithm that runs in O(n) time and without using 
the division operation.
*/
//https://leetcode.com/problems/product-of-array-except-self/

// ans = leftProduct * rightProduct
// time complexity O(n)
// space complexity O(n)
var productExceptSelf = function (nums) {
  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);
  let ans = new Array(nums.length).fill(1);
  let m1 = 1;
  let m2 = 1;
  for (let i = 1; i < nums.length; i++) {
    m1 *= nums[i - 1];
    left[i] *= m1;
  }
  for (let j = nums.length - 2; j >= 0; j--) {
    m2 *= nums[j + 1];
    right[j] *= m2;
  }
  for (let k = 0; k < nums.length; k++) {
    ans[k] = left[k] * right[k];
  }
  return ans;
};
