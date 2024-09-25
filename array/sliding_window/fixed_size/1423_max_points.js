/*
There are several cards arranged in a row, and each card has an associated 
number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score 
you can obtain.

1 <= k <= cardPoints.length
*/

// sliding window -- best version: fix the overflow and slide
// time complexity O(n)
// space complexity O(1)
var maxScore = function (cardPoints, k) {
  let l = cardPoints.length;
  let left = l - k,
    right = l - k;
  let sum = 0,
    ans = 0;
  while (right < k + l) {
    sum += cardPoints[right % l];
    if (right - left + 1 >= k) {
      ans = Math.max(sum, ans);
      sum -= cardPoints[left % l];
      left++;
    }
    right++;
  }
  return ans;
};

// sliding window --  min the card didn't pick
// time complexity O(n)
// space complexity O(1)
var maxScore = function (cardPoints, k) {
  let length = cardPoints.length,
    left = 0,
    right = 0;
  let total = 0,
    sum = 0,
    ans = Infinity;
  // find the total of entire card
  for (let i = 0; i < length; i++) {
    total += cardPoints[i];
  }
  if (k == length) return total;
  // minimize the (length - k) card we didn't pick
  while (right < length) {
    sum += cardPoints[right];
    if (right - left + 1 >= length - k) {
      ans = Math.min(ans, sum);
      sum -= cardPoints[left];
      left++;
    }
    right++;
  }
  return total - ans;
};
