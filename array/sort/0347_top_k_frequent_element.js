/*
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.

k is in the range [1, the number of unique elements in the array].

It is guaranteed that the answer is unique.
*/
// https://leetcode.com/problems/top-k-frequent-elements/

// Array.prototype.sort((a, b) => a - b): sort ascending
// hash table
// time complexity O(nlogn) -- quicksort;
// space complexity O(n)
var topKFrequent = function (nums, k) {
  const tracker = {};
  for (let num of nums) {
    if (tracker[num] === undefined) {
      tracker[num] = 1;
    } else {
      tracker[num]++;
    }
  }
  const counts = Object.values(tracker);
  // var quickSort = function (nums) {
  //   if (nums.length <= 1) {
  //     return nums; //base case;
  //   } else {
  //     let pivot = nums[0];
  //     let left = [];
  //     let right = [];
  //     for (let i = 1; i < nums.length; i++) {
  //       if (nums[i] < pivot) {
  //         left.push(nums[i]);
  //       } else {
  //         right.push(nums[i]);
  //       }
  //     }
  //     return quickSort(left).concat(pivot).concat(quickSort(right));
  //   }
  // };
  // const countsSorted = quickSort(counts);
  const countsSorted = counts.sort((a, b) => a - b);
  const count = countsSorted[counts.length - k];
  const entries = Object.entries(tracker);
  let result = [];
  for (let entry of entries) {
    if (entry[1] >= count) {
      result.push(entry[0]);
    }
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(
  topKFrequent(
    [
      5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0,
      2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6,
      6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7,
      0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1,
      9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5,
    ],
    7
  )
); // [4, -1, 2, -5, -8, 0, 8]
