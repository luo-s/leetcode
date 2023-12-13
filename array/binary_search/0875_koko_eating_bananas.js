/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] 
bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses 
some pile of bananas and eats k bananas from that pile. If the pile has less 
than k bananas, she eats all of them instead and will not eat any more bananas 
during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before 
the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
1 <= piles.length <= 10^4
piles.length <= h <= 10^9
1 <= piles[i] <= 10^9
*/

// https://leetcode.com/problems/koko-eating-bananas/

// linear search
// time complexity O(Math.max(...piles)) -- time limit exceeded
// space complexity O(1)
var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let ans = 1;
  while (ans <= max) {
    let hour = 0;
    piles.forEach((element) => {
      hour += Math.ceil(element / ans);
    });
    if (hour <= h) return ans;
    ans++;
  }
};

// find the smallest ans that makes hour <= h
// binary search
// time complexity O(n) vs. O(log(Math.max(...piles)))
// space complexity O(1)
var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let min = 1;
  let ans;
  while (min < max + 1) {
    // [min, max]
    let mid = Math.floor((max + min) / 2);
    let hour = 0;
    piles.forEach((element) => {
      hour += Math.ceil(element / mid);
    });
    console.log(mid, hour);
    if (hour > h) {
      // too slow
      min = mid + 1;
    } else if (hour <= h) {
      // might too fast, might not
      ans = mid; // placeholder
      max = mid - 1;
    }
  }
  return ans;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
