/*
There are some spherical balloons taped onto a flat wall that represents 
the XY-plane. The balloons are represented as a 2D integer array points 
where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter 
stretches between xstart and xend. You do not know the exact y-coordinates 
of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from 
different points along the x-axis. A balloon with xstart and xend is burst by 
an arrow shot at x if xstart <= x <= xend. 
There is no limit to the number of arrows that can be shot. 
A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot 
to burst all balloons.

1 <= points.length <= 10^5
points[i].length == 2
-2^31 <= xstart < xend <= 2^31 - 1
*/

// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/

/*
merge the overlapping intervals to smaller interval
we need the number of minimum non-overlapping intervals
*/
var findMinArrowShots = function (points) {
  // sort points by the xStart ASC
  points.sort((a, b) => a[0] - b[0]);
  let prev = points[0],
    array = [];
  for (let i = 1; i < points.length; i++) {
    // if overlapping
    if (points[i][0] <= prev[1]) {
      prev[0] = Math.max(prev[0], points[i][0]);
      prev[1] = Math.min(prev[1], points[i][1]);
    } else {
      // if not overlapping
      array.push(prev);
      prev = points[i];
    }
  }
  array.push(prev);
  return array.length;
};
