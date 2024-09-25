# You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

# Return the maximum score you can get by erasing exactly one subarray.

# An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

# https://leetcode.com/problems/maximum-erasure-value/
# similar 
# LC 3 https://leetcode.com/problems/longest-substring-without-repeating-characters/

# max sum of subarray without repeating characters
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        left = right = ans = window_sum = 0
        track = set()
        while right < len(nums):
            if nums[right] in track:
                window_sum -= nums[left]
                track.remove(nums[left])
                left += 1
            else:
                track.add(nums[right])
                window_sum += nums[right]
                ans = max(ans, window_sum)
                right += 1
        return ans

        

         
                


