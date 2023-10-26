/*
iven an integer array nums and an integer k, return true if there are two distinct 
indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

// https://leetcode.com/problems/contains-duplicate-ii/

// hash table
// time complexity O(n)
// space complexity O(n)
var containsNearbyDuplicate = function (nums, k) {
  let dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]] == undefined) {
      dict[nums[i]] = i;
    } else {
      if (i - dict[nums[i]] <= k) {
        return true;
      } else {
        dict[nums[i]] = i;
      }
    }
  }
  return false;
};
