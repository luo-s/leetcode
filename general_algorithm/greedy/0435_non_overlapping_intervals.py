# Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

# Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

# https://leetcode.com/problems/non-overlapping-intervals/

# greedy
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        # Sort intervals by their end times
        intervals.sort(key=lambda interval: interval[1])
        
        # Initialize with the end time of the first interval
        end = intervals[0][1]
        remove_count = 0
        
        # Iterate through intervals starting from the second one
        for i in range(1, len(intervals)):
            if intervals[i][0] < end:
                # Overlap found, increment remove count
                remove_count += 1
            else:
                # No overlap, update end to the current interval's end
                end = intervals[i][1]
        
        return remove_count