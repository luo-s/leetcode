/*
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions 
after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first 
bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version 
is bad. Implement a function to find the first bad version. 
You should minimize the number of calls to the API.
*/
// https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  // find the largest N that satisfies isBadVersion(N) == true;
  return function (n) {
    let left = 1,
      right = n; //search [1, n]
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      // let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid) == false) {
        // target belongs to [mid + 1, right]
        left = mid + 1;
      } else {
        // target belongs to [left, mid]
        right = mid;
      }
    }
    return left;
  };
};

// Using right shift method for midpoint results in Time Limit Exceeded
// let mid = left + (right - left) >> 1;
// Has something to do with API.
