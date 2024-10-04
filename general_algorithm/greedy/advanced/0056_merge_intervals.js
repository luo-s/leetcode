/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.
*/

// https://leetcode.com/problems/merge-intervals/description/

var merge = function (intervals) {
  if (intervals.length === 0) return [];
  if (intervals.length === 1) return intervals;
  // sort the intervals by the start point
  intervals.sort((a, b) => a[0] - b[0]);
  // initialize the result array with the first interval
  let prev = intervals[0],
    ans = [];
  // loop through the intervals
  for (let i = 1; i < intervals.length; i++) {
    // if the current interval overlaps, merge
    if (intervals[i][0] <= prev[1]) {
      prev[1] = Math.max(prev[1], intervals[i][1]);
      // if not overlapping, push and update the prev
    } else {
      ans.push(prev);
      prev = intervals[i];
    }
  }
  // push the last interval
  ans.push(prev);
  return ans;
};
