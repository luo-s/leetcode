/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) 
auxiliary space.
*/

/* there are n positive integers, so the answer is in range [1, n + 1]
store all numbers between [1, n] in a hash table, then iterate from 1 to n
  1) if missing: return i
  2) if not missing: return n + 1
make a hash table based on nums array to satisfy space complexity O(1)
*/
// time complexity O(n)
// space complexity O(1)
var firstMissingPositive = function (nums) {
  let n = nums.length;
  // change all non-pos numbers to n + 1; we don't care about them and
  // we will use negative value to mark the number as seen
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) nums[i] = n + 1;
  }
  // once we see a number in [1, n], change nums[num - 1] to negative (but
  // with same abs value) to mark it as seen
  for (let i = 0; i < n; i++) {
    let num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  // loop through nums array, which is now a hash table
  // if i has been seen, nums[i - 1] will be negative
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return n + 1;
};

// array manipulation
// time complexity O(nlogn)
// space complexity O(n)
var firstMissingPositive = function (nums) {
  let array = Array.from(
    new Set(nums.filter((ele) => ele > 0).sort((a, b) => a - b))
  );
  let i = 0;
  while (array[i] == i + 1) {
    i++;
  }
  return i + 1;
};

// hash table
// time complexity O(n)
// space compelxity O(n)
var firstMissingPositive = function (nums) {
  let dict = {};
  for (let num of nums) {
    if (num > 0 && dict[num] == undefined) {
      dict[num] = 1;
    }
  }
  console.log(dict);
  let length = Object.keys(dict).length;
  for (let i = 0; i < length; i++) {
    if (dict[i + 1] == undefined) return i + 1;
  }
  return length + 1;
};
