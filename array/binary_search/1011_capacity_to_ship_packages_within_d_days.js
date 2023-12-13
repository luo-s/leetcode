/*
A conveyor belt has packages that must be shipped from one port to another within 
days days.

The ith package on the conveyor belt has a weight of weights[i]. Each day, we 
load the ship with packages on the conveyor belt (in the order given by weights). 
We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages 
on the conveyor belt being shipped within days days.
1 <= days <= weights.length <= 5 * 10^4
1 <= weights[i] <= 500
*/

// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

// slowest method: ans == Math.max(...weight)
// linear search
// time complexity O(n) -- time limit exceeded
// space complexity O(1)
var shipWithinDays = function (weights, days) {
  let ans = Math.max(...weights);
  while (ans < Infinity) {
    console.log(ans, numberOfDay(weights, ans));
    if (numberOfDay(weights, ans) <= days) return ans;
    ans++;
  }
};
// define a funciton calculate the ship days based on loadCapacity
function numberOfDay(weights, loadCapacity) {
  let sum = 0;
  let d = 1;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (sum > loadCapacity) {
      d++;
      sum = 0;
      i--;
      continue;
    }
  }
  return d;
}
