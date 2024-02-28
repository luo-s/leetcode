/*
You are given two 0-indexed arrays, nums1 and nums2, consisting of non-negative 
integers. There exists another array, nums3, which contains the bitwise XOR 
of all pairings of integers between nums1 and nums2 (every integer in nums1 is 
  paired with every integer in nums2 exactly once).

Return the bitwise XOR of all integers in nums3.
*/

// https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/

// x ^ x = 0, x ^ 0 = x
// time complexity: O(n + m)
// space complexity: O(1)
var xorAllNums = function (nums1, nums2) {
  let xor1 = 0,
    xor2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    xor1 ^= nums1[i];
  }
  for (let i = 0; i < nums2.length; i++) {
    xor2 ^= nums2[i];
  }
  return (nums1.length % 2 ? xor2 : 0) ^ (nums2.length % 2 ? xor1 : 0);
};

// optimized
// time complexity: O(n + m)
// space complexity: O(1)
var xorAllNums = function (nums1, nums2) {
  let ans = 0;
  if (nums1.length % 2) ans ^= nums2.reduce((acc, cur) => acc ^ cur, 0);
  if (nums2.length % 2) ans ^= nums1.reduce((acc, cur) => acc ^ cur, 0);
  return ans;
};
