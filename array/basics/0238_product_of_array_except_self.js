/*
Given an integer array nums, return an array answer such that answer[i] 
is equal to the productLeft of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 
32-bit integer.

You must write an algorithm that runs in O(n) time and without using 
the division operation.
*/
//https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  let objStartLeft = {};
  let productLeft = 1;
  for (let i = 0; i < nums.length; i++) {
    productLeft *= nums[i];
    objStartLeft[i] = productLeft;
  }

  let objStartRight = {};
  let productRight = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    productRight *= nums[j];
    objStartRight[nums.length - j - 1] = productRight;
  }

  let result = [];
  for (let k = 0; k < nums.length; k++) {
    if (k === 0) {
      result.push(objStartRight[nums.length - 2]);
    } else if (k === nums.length - 1) {
      result.push(objStartLeft[nums.length - 2]);
    } else {
      result.push(objStartLeft[k - 1] * objStartRight[nums.length - 2 - k]);
    }
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, 3, -3])); // [0,0,9,0,0]
