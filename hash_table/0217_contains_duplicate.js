/*
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.
*/
// https://leetcode.com/problems/contains-duplicate/description/

// hash table
// time complexity O(n)
// space complexity O(n)
var containsDuplicate = function (nums) {
  let tracker = {};
  for (let num of nums) {
    if (tracker[num] !== undefined) {
      return true;
    } else {
      tracker[num] = 1;
    }
  }
  return false;
};

// sorting
// time complexity O(nlogn) -- quick sort
// space complexity O(n)
var containsDuplicate = function (nums) {
  // // bubble sort
  // var bubbleSort = function (array) {
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length - i - 1; j++) {
  //       if (array[j] > array[j + 1]) {
  //         let temp = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = temp;
  //       }
  //     }
  //   }
  //   return array;
  // };
  // let numsSorted = bubbleSort(nums);

  // // selection sort
  // var selectionSort = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     let minPosition = i;
  //     for (let j = i; j < nums.length; j++) {
  //       if (nums[j] < nums[minPosition]) minPosition = j;
  //     }
  //     if (nums[minPosition] < nums[i]) {
  //       let temp = nums[i];
  //       nums[i] = nums[minPosition];
  //       nums[minPosition] = temp;
  //     }
  //   }
  //   return nums;
  // };
  // let numsSorted = selectionSort(nums);

  // quick sort
  var quickSort = function (array) {
    if (array.length <= 1) {
      return array;
    } else {
      let pivot = array[0];
      let left = [];
      let right = [];
      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }
      return quickSort(left).concat(pivot).concat(quickSort(right));
    }
  };
  let numsSorted = quickSort(nums);

  for (let i = 0; i < numsSorted.length - 1; i++) {
    if (numsSorted[i] === numsSorted[i + 1]) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
