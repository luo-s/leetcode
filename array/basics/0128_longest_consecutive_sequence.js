/*
Given an unsorted array of integers nums, return the length of the longest 
consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/
// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  const numsSorted = Array.from(set).sort((a, b) => a - b);
  if (numsSorted.length <= 1) return numsSorted.length;
  let countCurrent = 1;
  let countMax = 0;
  for (let i = 1; i < numsSorted.length; i++) {
    if (numsSorted[i] === numsSorted[i - 1] + 1) {
      countCurrent++;
    } else {
      countCurrent = 1;
    }
    countMax = Math.max(countMax, countCurrent);
  }
  return countMax;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
