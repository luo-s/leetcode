/*
There are several cards arranged in a row, and each card has an associated 
number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score 
you can obtain.

1 <= k <= cardPoints.length
*/
// window sliding -- better version
// time complexity O(n)
// space complexity O(n)
var maxScore = function (cardPoints, k) {
  if (k === cardPoints.length) return cardPoints.reduce((a, b) => a + b);
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let min = Infinity;
  while (right < cardPoints.length) {
    windowSum += cardPoints[right];
    if (right - left + 1 >= cardPoints.length - k) {
      min = Math.min(min, windowSum);
      windowSum -= cardPoints[left];
      left++;
    }
    right++;
  }
  return cardPoints.reduce((a, b) => a + b) - min;
};

// window sliding
// time complexity O(n)
// space complexity O(n)
var maxScore = function (cardPoints, k) {
  const arr = [];
  for (let i = 1; i <= k; i++) {
    arr.unshift(cardPoints[cardPoints.length - i]);
    arr.push(cardPoints[i - 1]);
  }
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let max = -Infinity;
  while (right < arr.length) {
    windowSum += arr[right];
    if (right - left + 1 >= k) {
      max = Math.max(max, windowSum);
      windowSum -= arr[left];
      left++;
    }
    right++;
  }
  return max;
};
