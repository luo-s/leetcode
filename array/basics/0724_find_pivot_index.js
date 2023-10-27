/*Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly 
to the left of the index is equal to the sum of all the numbers strictly 
to the index's right.

If the index is on the left edge of the array, then the left sum is 0 
because there are no elements to the left. This also applies to the 
right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

//https://leetcode.com/problems/find-pivot-index/

// time complexity O(n)
// space complexity O(1)
var pivotIndex = function (nums) {
  let sum = nums.reduce((acu, cur) => acu + cur);
  let sumLeft = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sumLeft == sum - sumLeft - nums[i]) return i;
    sumLeft += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
