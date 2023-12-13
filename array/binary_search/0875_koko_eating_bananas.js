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

// traverse
// time complexity O(n) -- time limit exceeded
// space complexity O(1)
var minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let ans = 1;
  while (ans <= max) {
    let hour = 0;
    piles.forEach((element) => {
      if (element % ans == 0) {
        hour += element / ans;
      } else {
        hour += Math.floor(element / ans) + 1;
      }
    });
    console.log(ans, hour);
    if (hour <= h) return ans;
    ans++;
  }
};

//
