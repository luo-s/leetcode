/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays 
and you may return the result in any order.
*/

// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// hash table
// time complexity O(n)
// space complexity O(n)
var intersect = function (nums1, nums2) {
  let dict1 = {},
    dict2 = {},
    dict3 = {};
  for (let num of nums1) {
    if (!dict1[num]) dict1[num] = 1;
    else dict1[num]++;
  }
  for (let num of nums2) {
    if (!dict2[num]) dict2[num] = 1;
    else dict2[num]++;
  }
  for (let key of Object.keys(dict1)) {
    if (dict2[key]) dict3[key] = Math.min(dict1[key], dict2[key]);
  }
  let ans = [];
  for (let entry of Object.entries(dict3)) {
    while (entry[1] > 0) {
      ans.push(entry[0]);
      entry[1]--;
    }
  }
  return ans;
};
