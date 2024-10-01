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
// related 0875 https://leetcode.com/problems/koko-eating-bananas/

// slowest method: ans == Math.max(...weight)
// linear search
// time complexity O(n^2) -- time limit exceeded
// space complexity O(1)
var shipWithinDays = function (weights, days) {
  let ans = Math.max(...weights);
  while (ans < Infinity) {
    if (numberOfDay(weights, ans) <= days) return ans;
    ans++;
  }
};

// binary search
// time complexity O(nlogn)
// space complexity O(1)
var shipWithinDays = function (weights, days) {
  let min = Math.max(...weights);
  let max = weights.reduce((acc, cur) => acc + cur);
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (numberOfDay(weights, mid) > days) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return min;
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
