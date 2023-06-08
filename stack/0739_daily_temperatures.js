/*
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have 
to wait after the ith day to get a warmer temperature. If there is no future 
day for which this is possible, keep answer[i] == 0 instead.
*/
// https://leetcode.com/problems/daily-temperatures/

// brute force -- looking for the next greater element
// time complexity O(n^2) -- time limit exceeded
// space complexity O(1)
// var dailyTemperatures = function (temperatures) {
//   const result = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     let j = i;
//     while (temperatures[j] <= temperatures[i]) {
//       result[i]++;
//       j++;
//       if (j === temperatures.length) result[i] = 0;
//     }
//   }
//   return result;
// };

// // brute force -- nested loop
// // time complexity O(n^2)
// // space complexity O(1)
// const dailyTemperatures = (temperatures) => {
//   const res = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         res[i] = j - i;
//         break;
//       }
//     }
//   }
//   return res;
// };

// stack
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = [0];
  for (let i = 1; i < n; i++) {
    if (temperatures[i] < temperatures[stack[stack.length - 1]]) {
      stack.push(i);
    } else {
      while (
        stack.length &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const top = stack.pop();
        result[top] = i - top;
      }
      stack.push(i);
    }
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
