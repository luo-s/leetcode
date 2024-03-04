/*
Given an integer array nums, in which exactly two elements appear only once and 
all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only 
constant extra space.

2 <= nums.length <= 3 * 10^4
-2^31 <= nums[i] <= 2^31 - 1
Each integer in nums will appear twice, only two integers will appear once.
*/

// https://leetcode.com/problems/single-number-iii/

// bit operation
// time complexity O(n)
// space complexity O(1)
var singleNumber = function (nums) {
  // xorSum = a ^ b
  let xorSum = 0;
  for (let num of nums) {
    xorSum ^= num;
  }
  // since a !== b, there must be a bit that is different between a and b
  // which xorSum has 1 at that bit
  // in this case, find the least significant bit of xorSum
  const leastSignificantBit = xorSum & -xorSum;
  let type1 = 0, // has 1 at the least significant bit
    type2 = 0; // has 0 at the least significant bit
  // go through the array again, divide the numbers into two groups
  // a and b will be in different groups
  for (let num of nums) {
    // for each group, there will be only one number that appears once
    // do the xor operation, the result will be a and b
    if (num & leastSignificantBit) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  return [type1, type2];
};
