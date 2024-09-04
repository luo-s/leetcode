/*
The next greater element of some element x in an array is the first greater 
element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, 
where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] 
and determine the next greater element of nums2[j] in nums2. 
If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next 
greater element as described above.

1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 10^4
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.
*/

// https://leetcode.com/problems/next-greater-element-i/description/

// brute force
// time complexity: O(n^2)
// space complexity: O(n)
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let num of nums1) {
    let index = nums2.indexOf(num);
    let nextGreater = -1;
    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        nextGreater = nums2[i];
        break;
      }
    }
    result.push(nextGreater);
  }
  return result;
};

// monotone stack + hash map (only because nums1 and nums2 are unique)
// time complexity: O(n)
// space complexity: O(n)
var nextGreaterElement = function (nums1, nums2) {
  let result = [],
    stack = [],
    map = new Map();
  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  for (let num of nums1) {
    result.push(map.get(num) || -1);
  }
  return result;
};
