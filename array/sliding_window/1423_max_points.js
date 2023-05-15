/*
There are several cards arranged in a row, and each card has an associated 
number of points. The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score 
you can obtain.

1 <= k <= cardPoints.length
*/

// window sliding -- best version: fix the overflow and slide
// time complexity O(n)
// space complexity O(1)
var maxScore = function (cardPoints, k) {
  let left = 0;
  let right = cardPoints.length - k;
  let sum = 0;
  for (let i = right; i < cardPoints.length; i++) {
    sum += cardPoints[i];
  }
  let maxSum = sum;
  while (right < cardPoints.length) {
    sum += cardPoints[left] - cardPoints[right];
    maxSum = Math.max(sum, maxSum);
    right++;
    left++;
  }
  return maxSum;
};

// window sliding -- better version: min the card didn't pick
// time complexity O(n)
// space complexity O(1)
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

// window sliding -- make a new array
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
