/*
Given an array of intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of intervals you need to remove to make the rest 
of the intervals non-overlapping.

1 <= intervals.length <= 10^5
intervals[i].length == 2
-5 * 10^4 <= starti < endi <= 5 * 10^4
*/

// https://leetcode.com/problems/non-overlapping-intervals/description/

/* since we want to remove the minimum number of intervals, if two intervals 
overlap, we want to remove the larger one.
sort the intervals by the start, then loop through the intervals.
*/
var eraseOverlapIntervals = function (intervals) {
  // sort the intervals by the start
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0,
    range = [];
  // loop through the intervals
  for (let [start, end] of intervals) {
    // initialize range with the first interval
    if (!range.length) {
      range = [start, end];
      continue;
    }
    // if the current interval overlaps, remove the larger interval
    if (start < range[1]) {
      count++;
      // remove the larger interval
      range[1] = Math.min(range[1], end);
    }
    // if the current interval does not overlap with last interval
    // update range to the current interval
    else {
      range = [start, end];
    }
  }
  return count;
};
