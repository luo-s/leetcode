/*
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of days you have to 
wait after the ith day to get a warmer temperature. If there is no future day 
for which this is possible, keep answer[i] == 0 instead.
*/

// stack
// time complexity O(n)
// space complexity O(n)
var dailyTemperatures = function (temperatures) {
  let l = temperatures.length;
  let ans = new Array(l).fill(0);
  let stack = [];
  for (let i = l - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }
    if (stack.length) {
      ans[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
    console.log(i, stack, ans);
  }
  return ans;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
