/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any 
order.
*/

// Set featuers
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  for (let value of set1.values()) {
    if (set2.has(value)) result.push(value);
  }
  return result;
};

// sorting + two pointers
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let pointer1 = 0;
  let pointer2 = 0;
  let result = new Set();
  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else if (nums1[pointer1] > nums2[pointer2]) {
      pointer2++;
    } else {
      result.add(nums1[pointer1]);
      pointer1++;
      pointer2++;
    }
  }
  return Array.from(result);
};

// brute force; hash table
// time complexity O(n^2);
// space complexity O(n);
var intersection = function (nums1, nums2) {
  let result = {};
  for (let ele1 of nums1) {
    for (let ele2 of nums2) {
      if (ele1 === ele2) {
        if (result[ele1] === undefined) {
          result[ele1] = true;
        }
      }
    }
  }
  return Object.keys(result);
};
