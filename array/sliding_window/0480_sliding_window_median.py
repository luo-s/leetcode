# The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle values.

# For examples, if arr = [2,3,4], the median is 3.
# For examples, if arr = [1,2,3,4], the median is (2 + 3) / 2 = 2.5.
# You are given an integer array nums and an integer k. There is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

# Return the median array for each window in the original array. Answers within 10-5 of the actual value will be accepted.

# https://leetcode.com/problems/sliding-window-median/description/
# related LC 220 https://leetcode.com/problems/contains-duplicate-iii/

# sortedcontainers provide O(logn)
class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        from sortedcontainers import SortedList
        medians, window = [], SortedList()        
        # Iterate through nums
        for i in range(len(nums)):
            # Add the current element to the sliding window
            window.add(nums[i])
            # Once we have a full window (size == k)
            if i >= k - 1:
                # Calculate the median
                if k % 2 == 1:
                    # If window size is odd, take the middle element
                    median = float(window[k // 2])
                else:
                    # If window size is even, take the average of the two middle elements
                    median = (window[k // 2 - 1] + window[k // 2]) / 2                
                # Append the calculated median to the result list
                medians.append(median)
                # Remove the element that's sliding out of the window
                window.remove(nums[i - k + 1])
        
        return medians
