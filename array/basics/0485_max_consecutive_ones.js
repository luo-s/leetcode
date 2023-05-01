/*
Given a binary array nums, return the maximum number of consecutive 1's 
in the array.
*/
// better solution O(n)
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }
  return Math.max(count, maxCount);
};

// //brute force O(n^2)
// var findMaxConsecutiveOnes = function (nums) {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (nums[j] === 1) {
//         count++;
//       } else {
//         break;
//       }
//     }
//     if (count > result) {
//       result = count;
//     }
//   }
//   return result;
// };
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
