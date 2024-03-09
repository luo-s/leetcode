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
// time complexity: O(nlogn)
// space complexity: O(1)
var eraseOverlapIntervals = function (intervals) {
  // sort the intervals by the start
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0,
    range = intervals[0];
  // loop through the intervals
  for (let i = 1; i < intervals.length; i++) {
    // if the current interval overlaps, remove the larger interval
    if (intervals[i][0] < range[1]) {
      count++;
      // remove the larger interval
      range[1] = Math.min(range[1], intervals[i][1]);
    }
    // if the current interval does not overlap with last interval
    // update range to the current interval
    else {
      range = intervals[i];
    }
  }
  return count;
};

// another approach
// time complexity: O(nlogn)
// sapce complexity: O(1)
var eraseOverlapIntervals = function (intervals) {
  // sort the intervals by the end
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0],
    count = 0;
  for (let i = 1; i < intervals.length; i++) {
    // if the current interval overlaps, remove the larger interval
    if (prev[1] > intervals[i][0]) {
      count++;
      prev[0] = Math.max(prev[0], intervals[i][0]);
    } else prev = intervals[i];
  }
  return count;
};
