/*
Given an integer array nums, find a subarray that has the largest product, 
and return the product.

1 <= nums.length <= 2 * 10^4
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

// https://leetcode.com/problems/maximum-product-subarray/

// math solution
/*
handle 0s: if ni is 0 
maxProduct = Math.max(0, maxProduct(nums.slice(0, i), nums.slice(i+1)))
handle negative numbers: let negativeCount be the number of negative numbers in the array
1) if negativeCount is even, ans = n1 * n2 * ... * nn
2) if negativeCount is odd, find the first and last negative numbers, nj and nk,
ans = Math.max(n1 * n2 * ... * n(k-1), n(j+1) * n(j+2) * ... * nn)
*/
var maxProduct = function (nums) {
  // base case
  if (nums.length === 0) return -Infinity;
  if (nums.length === 1) return nums[0];
  // handle 0s
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return Math.max(
        0,
        maxProduct(nums.slice(0, i)),
        maxProduct(nums.slice(i + 1))
      );
    }
  }
  // handle negative numbers
  let negativeCount = nums.filter((n) => n < 0).length;
  if (negativeCount % 2 === 0) return nums.reduce((a, b) => a * b);
  if (negativeCount % 2 === 1) {
    let first = nums.findIndex((n) => n < 0);
    let last = nums.findLastIndex((n) => n < 0);
    return Math.max(
      last > 0 ? nums.slice(0, last).reduce((a, b) => a * b) : -Infinity,
      first < nums.length - 1
        ? nums.slice(first + 1).reduce((a, b) => a * b)
        : -Infinity
    );
  }
};
