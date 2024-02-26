/*
Given a non-empty array of integers nums, every element appears twice except for 
one. Find that single one.

You must implement a solution with a linear runtime complexity and use only 
constant extra space.

1 <= nums.length <= 3 * 10^4
-3 * 10^4 <= nums[i] <= 3 * 10^4
Each element in the array appears twice except for one element which appears only once.
*/

// https://leetcode.com/problems/single-number/

// consider every bit, 2 x 0s or 2 x 1s, and 1 x 0 or 1 x 1
// thus each bit is (sum of 1s) % 2 (binary system)
// toggle the bit for each 1, not toggle for 0: XOR operation
// 0^1 = 1; 1^1 = 0; 0^0 = 0; 1^0 = 1
// bit operation XOR : x^0 = x; x^x = 0; (a^b)^c = a^(b^c)
// time complexity O(n)
// space complexity O(1)
var singleNumber = function (nums) {
  let ans = 0;
  for (let num of nums) {
    ans ^= num;
  }
  return ans;
};
