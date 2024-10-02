# You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

# Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

# Return intervals after the insertion.

# Note that you don't need to modify intervals in-place. You can make a new array and return it.

# https://leetcode.com/problems/insert-interval/

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        ans, added_new = [], False
        for low, hi in intervals:
            if hi < newInterval[0]:
                ans.append([low, hi])
            elif low > newInterval[1]:
                if added_new is False:
                    ans.append(newInterval)
                    added_new = True
                ans.append([low, hi])
            else:
                newInterval[0] = min(newInterval[0], low)
                newInterval[1] = max(newInterval[1], hi)
        if added_new is False:
            ans.append(newInterval)
        return ans

# without flag variable
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        ans = []
        for low, hi in intervals:
            # Current interval is completely before new interval
            if hi < newInterval[0]:  
                ans.append([low, hi])
            # Current interval is completely after new interval
            elif low > newInterval[1]:  
                ans.append(newInterval)
                # Update newInterval to the remaining part
                newInterval = [low, hi] 
            # Overlapping intervals 
            else:  
                newInterval[0] = min(newInterval[0], low)
                newInterval[1] = max(newInterval[1], hi)
        # Add the last interval (newInterval) that hasn't been added
        ans.append(newInterval)
        return ans
    
