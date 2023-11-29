/*
Given an integer array nums, return sorted array from min to max
*/

// bubble sort -- stable sort
// time complexity O(n^2)
// space complexity O(1)
var bubbleSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]; // destructuring assignment
        // let temp = nums[j];
        // nums[j] = nums[j + 1];
        // nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

// selection sort -- unstable sort
// time complexity O(n^2)
// space complexity O(1)
var selectionSort = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let minPosition = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minPosition]) minPosition = j;
    }
    if (nums[minPosition] < nums[i]) {
      let temp = nums[i];
      nums[i] = minPosition;
      nums[minPosition] = temp;
    }
  }
  return nums;
};

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

// merge sort -- stable sort
// time complexity O(nlogn)
// space complexity O(n)
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

// counting sort -- stable sort: only work for sorting integer array
// time complexity O(n+k)
// space complexity O(k)
var countingSort = function (nums) {
  const numsMin = Math.min(...nums);
  const numsMax = Math.max(...nums);
  const count = new Array(numsMax - numsMin + 1).fill(0);
  const result = new Array(nums.length).fill(0);
  // store the frequency
  for (let i = 0; i < nums.length; i++) {
    count[nums[i] - numsMin]++;
  }
  // accumulate the frequency
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  // sort
  for (let i = 0; i < nums.length; i++) {
    result[count[nums[i] - numsMin] - 1] = nums[i];
    count[nums[i] - numsMin]--;
  }
  return result;
};

// shell sort -- unstable sort
// time complexity O(nlogn) ~ O(n^2)
// space complexity
var shellSort = function (nums) {};

// test
let test = [1, 5, 8, 3, 0, -9, -4, 1, 6, -7, 8, -5, 4];
// let test = ["a", "s", "d", "f", "g", "q", "w", "e", "r", "t"];

console.log("bubble    sort: ", bubbleSort(test));
console.log("selection sort: ", selectionSort(test));
console.log("insertion sort: ", insertionSort(test));
console.log("quick     sort: ", quickSort(test));
console.log("merge     sort: ", mergeSort(test));
console.log("counting  sort: ", countingSort(test));
