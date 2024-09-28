# Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].

# The test cases are generated so that the answer will fit in a 32-bit integer.

# https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/

# 1 <= nums.length <= 10**5
# 0 <= nums[i] <= 10**9
# 0 <= left <= right <= 10**9

# number of subarray that left <= max(subarray) <= right
# equivalent to (cnt max(subarray) <= right) - (cnt max(subarray) <= left - 1)
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        # Helper function to count subarrays with max element <= bound
        def count_subarrays(bound):
            count = 0
            current_count = 0
            for num in nums:
                if num <= bound:
                    current_count += 1
                    count += current_count
                else:
                    current_count = 0
            return count
        
        # Count subarrays where max element is <= right and subtract those <= left - 1
        return count_subarrays(right) - count_subarrays(left - 1)
            
# two pointers
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        cnt = 0  # Total count of valid subarrays
        start = 0  # Start of the current valid subarray
        valid_subarrays = 0  # Number of valid subarrays that can extend to current `end`
        
        for end in range(len(nums)):
            # If current element is within the bounds [left, right]
            if left <= nums[end] <= right:
                valid_subarrays = end - start + 1  # Update the count of valid subarrays
                cnt += valid_subarrays
            # If the current element is less than `left`, it can extend previous valid subarrays
            elif nums[end] < left:
                cnt += valid_subarrays  # Extend valid subarrays ending before `end`
            # If the current element is greater than `right`, reset the valid subarray window
            else:
                valid_subarrays = 0  # Reset the count of valid subarrays
                start = end + 1  # Move the start to the next position
            
        return cnt