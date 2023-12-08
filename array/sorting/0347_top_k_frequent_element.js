/*
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.

k is in the range [1, the number of unique elements in the array].

It is guaranteed that the answer is unique.
*/
// https://leetcode.com/problems/top-k-frequent-elements/

// hash table + sorting
// time complexity O(n * k)
// space complexity O(n)
var topKFrequent = function (nums, k) {
  const map = new Map();
  const res = [];
  // make a dictionary of nums
  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
  // sorting
  const store = [...map.entries()].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(store[i][0]);
  }
  return res;
};

// counting sort
// time complexity O(n * k)
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
