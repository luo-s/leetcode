/*
Given an integer array nums, return sorted array from min to max
*/

// bubble sort -- stable sort
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
console.log(
  "bubble    sort: ",
  bubbleSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8, 3, 5, 7, 9, 10, 23, 54, -5])
);

// selection sort -- unstable sort
// time complexity O(n^2)
// space complexity O(1)
var selectionSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minPosition = i;
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
  selectionSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8, 3, 5, 7, 9, 10, 23, 54, -5])
);

// insertion sort -- stable sort
// time complexity O(n^2)
// space complexity O(1)
var insertionSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    let j = i;
    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
  return nums;
};
console.log(
  "insertion sort: ",
  insertionSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8, 3, 5, 7, 9, 10, 23, 54, -5])
);

// quick sort -- unstable sort
// time complexity -- O(nlogn)
// space complexity -- O(n)
var quickSort = function (nums) {
  if (nums.length <= 1) {
    return nums; //base case;
  } else {
    let pivot = nums[0];
    let left = [];
    let right = [];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right));
  }
};
console.log(
  "quick     sort: ",
  quickSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8, 3, 5, 7, 9, 10, 23, 54, -5])
);

// merge sort -- stable sort
// time complexity O(nlogn)
// space complexity O(n)
var mergeSort = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

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
console.log(
  "merge     sort: ",
  mergeSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8, 3, 5, 7, 9, 10, 23, 54, -5])
);

// shell sort -- unstable sort
// time complexity O(nlogn) ~ O(n^2)
// space complexity
var shellSort = function (nums) {};
console.log(
  "shell sort: ",
  shellSort([9, -4, 5, 7, -3, 0, 1, -6, 2, 8, 3, 5, 7, 9, 10, 23, 54, -5])
);
