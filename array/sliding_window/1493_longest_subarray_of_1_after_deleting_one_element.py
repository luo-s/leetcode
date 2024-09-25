# Given a binary array nums, you should delete one element from it.

# Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

# https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
# similar
# LC 1004 https://leetcode.com/problems/max-consecutive-ones-iii/

# special case of LC 1004
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        from collections import deque
        left = right = ans = 0
        l = len(nums)
        flip_idx = deque([])  # Store the indices of deleted 0s
        
        while right < l:
            if nums[right] == 0:
                flip_idx.append(right)  # Mark the current 0 as deleted

            # If we have deleted more than k 0s, slide the window
            if len(flip_idx) > 1:
                left = flip_idx.popleft() + 1  # Move the left pointer past the oldest deleted 0

            # Calculate the max length of the window, also need to substract 1 from window size
            # if no 0s, we have to delete 1
            ans = max(ans, right - left)
            
            # Move the right pointer
            right += 1

        return ans
