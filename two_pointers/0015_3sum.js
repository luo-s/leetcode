/*
Given an integer array nums, return all the triplets [nums[i], nums[j], 
nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + 
nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

// sorting + two pointer
// time complexity O(n^2)
// space complexity O(n)
var threeSum = function (nums) {
  let res = [];
  const n = nums.length;
  if (n < 3) return res;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else if (sum > 0) right--;
    }
  }
  return res;
};
