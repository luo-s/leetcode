// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative.

var rotate = function (nums, k) {
  let result = [];
  let l = nums.length;
  let kCopy = k;
  while (k > 0) {
    result.push(nums[l - k]);
    k--;
  }
  for (let i = 0; i < l - kCopy; i++) {
    result.push(nums[i]);
  }
  return result;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
