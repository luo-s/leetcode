/* 
Given an integer array nums, return sorted array from min to max
*/

// bubble sort
// time complexity O(n^2)
// space complexity O(1)
var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
console.log("bubble sort: ", bubbleSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8]));

// selection sort
// time complexity O(n^2)
// space complexity O(1)
var selectionSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minPosition = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        minPosition = j;
      }
    }
    if (min !== nums[i]) {
      let temp = nums[i];
      nums[i] = min;
      nums[minPosition] = temp;
    }
  }
  return nums;
};
console.log(
  "selection sort: ",
  selectionSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8])
);
