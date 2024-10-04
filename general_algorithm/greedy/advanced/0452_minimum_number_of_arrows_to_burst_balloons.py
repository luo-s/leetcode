# There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

# Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

# Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

# https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
# similar problem
# LC 56 https://leetcode.com/problems/merge-intervals/

# basically merge only on intersections
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda pair:pair[0])
        low, hi, l = points[0][0], points[0][1], len(points)
        ans = []
        for i in range(1, l):
            if hi < points[i][0]:
                ans.append([low, hi])
                low = points[i][0]
                hi = points[i][1]
            else:
                low = max(low, points[i][0])
                hi = min(hi, points[i][1])
        # append the last
        ans.append([low, hi])
        return len(ans)
    
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points:
            return 0
        # sort by end position
        points.sort(key=lambda x: x[1])
        arrow_pos = points[0][1]
        count = 1
        for i in range(1, len(points)):
            # if next interval start after last end: we need another arrow
            # because we sorted based on end position
            if arrow_pos < points[i][0]:
                count += 1
                arrow_pos = points[i][1]
        return count
