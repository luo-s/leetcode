/*
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to 
wait after the ith day to get a warmer temperature. If there is no future day 
for which this is possible, keep answer[i] == 0 instead.
*/

// https://leetcode.com/problems/daily-temperatures/description/

// stack
// time complexity O(n)
// space complexity O(n)
var dailyTemperatures = function (temperatures) {
  let ans = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }
  return ans;
};
