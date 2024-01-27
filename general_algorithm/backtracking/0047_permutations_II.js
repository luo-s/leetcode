/*
Given a collection of numbers, nums, that might contain duplicates, 
return all possible unique permutations in any order.
*/
var permuteUnique = function (nums) {
  let result = [];
  let path = [];
  // used[i] represents whether nums[i] is used
  let used = new Array(nums.length).fill(false);
  // sort nums in ascending order
  nums.sort((a, b) => a - b);
  // define backtracking function
  var backtracking = function (nums) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
      // if nums[i] is used, skip
      if (used[i]) continue;
      // for consecutive duplicates, only use the first one
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtracking(nums);
      path.pop();
      used[i] = false;
    }
  };
  backtracking(nums);
  return result;
};

console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
