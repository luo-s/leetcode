/*
You are given a 0-indexed integer array nums. In one operation, select any 
non-negative integer x and an index i, then update nums[i] to be equal to 
nums[i] AND (nums[i] XOR x).

Note that AND is the bitwise AND operation and XOR is the bitwise XOR operation.

Return the maximum possible bitwise XOR of all elements of nums after applying 
the operation any number of times.
*/

// https://leetcode.com/problems/maximum-xor-after-operations/

// XOR: can change any bits (0 -> 1, 1 -> 0), so nums[i] ^ x == x
// thus, nums[i] & (nums[i] ^ x) -> nums[i] & x
// AND: can change 1 to 0, but cannot change 0 to 1
// thus, nums[i] & x -> can change 1s in nums[i] to 0s

// ans = (nums[0] & x1) ^ (nums[1] & x2) ^ ... ^ (nums[n-1] & xn)
// max(ans): need as many 1s bit as possible in ans

// consider nums[0] ^ nums[1] ^ ... ^ nums[n-1] bit by bit
// for every bit, if (number of 1s % 2 === 1) the result will be 1
// else if (number of 1s % 2 === 0), the result will be 0
// but if number of 1s > 0, we can change some 1s to 0s to make this bit 1

// so as long as there is at least one 1 in this bit, we can make this bit 1
// if and only if all bits are 0s, this bit will be 0
// this is OR operation
var maximumXOR = function (nums) {
  return nums.reduce((acc, num) => acc | num, 0);
};
