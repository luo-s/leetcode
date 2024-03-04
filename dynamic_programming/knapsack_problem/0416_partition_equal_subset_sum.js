/*
Given an integer array nums, return true if you can partition the array 
into two subsets such that the sum of the elements in both subsets is equal 
or false otherwise.

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/

// https://leetcode.com/problems/partition-equal-subset-sum/description/
// related https://leetcode.com/problems/subsets-ii/description/

/*
brute force: backtracking get all subsets, check if any subset's sum is equal to sum / 2
if sum % 2 !== 0, return false
*/
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2) return false;
  let target = sum / 2;
  var subsetsWithDup = function (nums) {
    let result = [];
    let path = [];
    nums.sort((a, b) => a - b);
    let used = new Array(nums.length).fill(false);
    var backtracking = function (nums, index) {
      result.push([...path]);
      if (index >= nums.length) return;
      for (let i = index; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        path.push(nums[i]);
        used[i] = true;
        backtracking(nums, i + 1);
        path.pop();
        used[i] = false;
      }
    };
    backtracking(nums, 0);
    return result;
  };
  return subsetsWithDup(nums).some(
    (subset) => subset.reduce((acc, cur) => acc + cur, 0) === target
  );
};
