/*
Given an integer array nums, return all the triplets [nums[i], nums[j], 
nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + 
nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

// sorting + nested loop +  binary search
// time complexity O(nlogn) + O(n^2logn)
// space complexity O(n)
var threeSum = function (nums) {
  let result = [];
  var mergeSort = function (nums) {
    var merge = function (left, right) {
      const array = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          array.push(left.shift());
        } else {
          array.push(right.shift());
        }
      }
      return array.concat(left).concat(right);
    };

    if (nums.length <= 1) {
      return nums;
    }
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };
  const sorted = mergeSort(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    const twoSum = -sorted[i];
    const numsUpdated = sorted.slice(i + 1);
    for (let j = 0; j < nums.length - 2 - i; j++) {
      if (j > 0 && numsUpdated[j] === numsUpdated[j - 1]) continue;
      const target = twoSum - numsUpdated[j];
      const finalArr = numsUpdated.slice(j + 1);
      let left = 0;
      let right = finalArr.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (finalArr[mid] > target) {
          right = mid - 1;
        } else if (finalArr[mid] < target) {
          left = mid + 1;
        } else {
          result.push([sorted[i], numsUpdated[j], finalArr[mid]]);
          break;
        }
      }
    }
  }
  return result;
};

// merge sort + two pointers
// time complexity O(nlogn) + O(n^2)
// space complexity O(n)
var threeSum = function (nums) {
  let result = [];
  var mergeSort = function (nums) {
    var merge = function (left, right) {
      const array = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          array.push(left.shift());
        } else {
          array.push(right.shift());
        }
      }
      return array.concat(left).concat(right);
    };

    if (nums.length <= 1) {
      return nums;
    }
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };
  const sorted = mergeSort(nums);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    const target = -sorted[i];
    const sortedU = sorted.slice(i + 1);
    let left = 0;
    let right = sortedU.length - 1;
    while (left < right) {
      if (sortedU[left] === sortedU[left - 1]) {
        left++;
      } else if (sortedU[right] === sortedU[right + 1]) {
        right--;
      } else {
        if (sortedU[left] + sortedU[right] > target) {
          right--;
        } else if (sortedU[left] + sortedU[right] < target) {
          left++;
        } else {
          result.push([sorted[i], sortedU[left], sortedU[right]]);
          left++;
        }
      }
    }
  }
  return result;
};
