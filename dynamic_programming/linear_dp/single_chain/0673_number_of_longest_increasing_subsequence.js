/*
Given an integer array nums, return the number of longest increasing 
subsequences.

Notice that the sequence has to be strictly increasing.

1 <= nums.length <= 2000
-10^6 <= nums[i] <= 10^6
*/

/*
 let dp[i] be length of LIS ending at index i
 let count[i] be number of LIS ending at index i
 for every 0 <= j < i, if nums[j] < nums[i], then dp[i] = max(dp[i], dp[j] + 1)
 1) if dp[j] + 1 > dp[i]: length of LIS increase, count[i] = count[j]
 2) if dp[j] + 1 === dp[i], length of LIS not change, count[i] += count[j]
 3) if dp[j] + 1 < dp [i], LIS ending at nums[i] not affected, continue
*/
var findNumberOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let count = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
  }
  let max = Math.max(...dp);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] === max) {
      result += count[i];
    }
  }
  return result;
};
