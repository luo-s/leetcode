# Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

# https://neetcode.io/problems/meeting-schedule-ii

"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""
# brute force
# time complexity O(n^2)
class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if not intervals: 
            return 0
        intervals.sort(key=lambda i:i.start)
        l = len(intervals)
        meeting_end = [intervals[0].end]
        for i in range(1, l):
            flag = True
            for j in range(len(meeting_end)):
                if intervals[i].start >= meeting_end[j]:
                    meeting_end[j] = intervals[i].end
                    flag = False
                    break
            if flag:
                meeting_end.append(intervals[i].end)
        return len(meeting_end)
    
# priority queue
# time complexity O(nlogn)
import heapq
class Solution:
    def minMeetingRooms(self, intervals: List[Interval]) -> int:
        if not intervals:
            return 0
        # Sort the intervals by start time
        intervals.sort(key=lambda i: i.start)
        
        # initiate the Min-heap to track the earliest meeting end time
        meeting_end = []
        heapq.heappush(meeting_end, intervals[0].end)
        
        # Process all remaining meetings
        for i in range(1, len(intervals)):
            # If the meeting can use the room of the meeting that ends the earliest
            if intervals[i].start >= meeting_end[0]:
                heapq.heappop(meeting_end)  # Remove the room that has been freed
            # Push the current meeting's end time into the heap
            heapq.heappush(meeting_end, intervals[i].end)
        
        # The size of the heap is the number of meeting rooms required
        return len(meeting_end)

