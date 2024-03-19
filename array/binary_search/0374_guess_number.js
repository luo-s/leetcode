/*
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
You call a pre-defined API int guess(int num), which returns three possible results:
-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/
// https://leetcode.com/problems/guess-number-higher-or-lower/

// time complexity O(logn)
// space complexity O(1)
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (guess(mid) === -1) {
      right = mid - 1;
    } else if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};

// another way
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (guess(mid) === 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};
