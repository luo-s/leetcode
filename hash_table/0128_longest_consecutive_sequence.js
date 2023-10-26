/*
Given an unsorted array of integers nums, return the length of the longest 
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/
// https://leetcode.com/problems/longest-consecutive-sequence/

// hash table + dynamic programming
// time complexity O(n)
// space complexity O(n)
var longestConsecutive = function (nums) {
  let numsSet = new Set(nums);
  let ans = 0;
  for (let num of numsSet) {
    // filter out the start of streak, optimizing performance
    if (!numsSet.has(num - 1)) {
      let currNum = num;
      let currCount = 1;
      // start counting
      // ATTN: all the numbers in while loop will be filtered out the for loop above
      while (numsSet.has(currNum + 1)) {
        currNum++;
        currCount++;
      }
      ans = Math.max(ans, currCount);
    }
  }
  return ans;
};

// make an new array as a hash table - overflow error
// time complexity O(n)
// space complexity O(N)
var longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length;
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  max = Math.max(max, Math.abs(min));
  // in JS the maximum length of an array is 2 ** 32 - 1 < 10 ** 9, will result in error
  let array = new Array(max * 2).fill(0);
  for (let num of nums) {
    array[num + max] = 1;
  }
  let pointer = 0,
    count = 0,
    ans = 1;
  // traverse array with pointer and count
  while (pointer < array.length) {
    if (array[pointer] == 1) {
      count++;
    } else {
      ans = Math.max(ans, count);
      count = 0;
    }
    pointer++;
  }
  return Math.max(ans, count);
};
