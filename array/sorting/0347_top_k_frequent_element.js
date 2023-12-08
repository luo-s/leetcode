/*
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.

k is in the range [1, the number of unique elements in the array].

It is guaranteed that the answer is unique.
*/
// https://leetcode.com/problems/top-k-frequent-elements/

// counting sort
// time complexity O(nlogn)
// space complexity O(n)
var topKFrequent = function (nums, k) {
  const numsMin = Math.min(...nums);
  const numsMax = Math.max(...nums);
  const count = new Array(numsMax - numsMin + 1).fill(0);
  for (let num of nums) {
    count[num - numsMin]++;
  }
  const res = [];
  while (k > 0) {
    const countMax = Math.max(...count);
    const index = count.indexOf(countMax);
    res.push(index + numsMin);
    count[index] = -Infinity;
    k--;
  }
  return res;
};
