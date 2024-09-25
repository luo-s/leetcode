# Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

# https://leetcode.com/problems/max-consecutive-ones-iii/
# similar
# LC 1493 https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        from collections import deque
        left = right = ans = 0
        l = len(nums)
        flip_idx = deque([])  # Store the indices of flipped 0s
        
        while right < l:
            if nums[right] == 0:
                flip_idx.append(right)  # Mark the current 0 as flipped

            # If we have flipped more than k 0s, slide the window
            if len(flip_idx) > k:
                left = flip_idx.popleft() + 1  # Move the left pointer past the oldest flipped 0

            # Calculate the max length of the window
            ans = max(ans, right - left + 1)
            
            # Move the right pointer
            right += 1

        return ans

class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        from collections import deque
        left = ans = 0
        flip_idx = deque([])  # Store the indices of flipped 0s
        
        for right in range(len(nums)):
            if nums[right] == 0:
                flip_idx.append(right)  # Mark the current 0 as flipped
            
            # If we have flipped more than k 0s, slide the window
            if len(flip_idx) > k:
                left = flip_idx.popleft() + 1  # Move the left pointer past the oldest flipped 0

            # Calculate the max length of the window
            ans = max(ans, right - left + 1)
        
        return ans
    
# let cnt0 denotes the number of 0 in the window
# what's the max sum of window when cnt0 <= k
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        ans = left = cnt0 = 0
        for right in range(len(nums)):
            cnt0 += 1 - nums[right]  # count the number of 0s inside window
            while cnt0 > k:
                cnt0 -= 1 - nums[left]
                left += 1
            ans = max(ans, right - left + 1)
        return ans
