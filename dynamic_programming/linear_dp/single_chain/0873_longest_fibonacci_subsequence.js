/*
A sequence x1, x2, ..., xn is Fibonacci-like if:

n >= 3
xi + xi+1 == xi+2 for all i + 2 <= n

Given a strictly increasing array arr of positive integers forming a 
sequence, return the length of the longest Fibonacci-like subsequence 
of arr. If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting any number 
of elements (including none) from arr, without changing the order of the 
remaining elements. 

For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

3 <= arr.length <= 1000
1 <= arr[i] < arr[i + 1] <= 10^9
*/

// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/

// dynamic programming
// we need at least 2 variables to identify a specific subsequence
// arr[i] + arr[j] == arr[k] -> we need a 2D array
// dp[j][k] is the length of the longest fib subsequence ending with
// [arr[j], arr[k]] that dp[j][k] = max(dp[j][k], dp[i][j] + 1)
// for every i, j, k that 0 <= i < j < k; if arr[i] + arr[j] == arr[k]
var lenLongestFibSubseq = function (arr) {
  let dp = new Array(arr.length)
    .fill()
    .map(() => new Array(arr.length).fill(2));
  for (let k = 2; k < arr.length; k++) {
    let i = 0,
      j = k - 1;
    while (i < j) {
      if (arr[i] + arr[j] < arr[k]) {
        i++;
      } else if (arr[i] + arr[j] > arr[k]) {
        j--;
      } else {
        dp[j][k] = Math.max(dp[j][k], dp[i][j] + 1);
        i++;
        j--;
      }
    }
  }
  let ans = Math.max(...dp.map((row) => Math.max(...row)));
  return ans > 2 ? ans : 0;
};
