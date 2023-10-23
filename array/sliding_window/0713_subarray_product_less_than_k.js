/*
Given an array of integers nums and an integer k, return the number of contiguous
subarrays where the product of all the elements in the subarray is strictly less 
than k.
*/

// https://leetcode.com/problems/subarray-product-less-than-k/

// sliding window
// time complexity O(n)
// space complexity O(1)
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let left = 0,
    right = 0;
  let product = 1,
    count = 0;
  while (right < nums.length) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    // new qualified subarray right pointer move every time
    count += right - left + 1;
    right++;
  }
  return count;
};
