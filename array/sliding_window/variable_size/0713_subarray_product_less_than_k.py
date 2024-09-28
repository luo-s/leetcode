# Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

# https://leetcode.com/problems/subarray-product-less-than-k/
# smiliar
# LC 209 https://leetcode.com/problems/minimum-size-subarray-sum/

# number of subarray that prod < k
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k <= 1: return 0
        left = right = cnt = 0
        l, window_prod = len(nums), 1
        while right < l:
            window_prod *= nums[right]
            while window_prod >= k:
                window_prod /= nums[left]
                left += 1
            # number of subarray that ends at nums[right]: right - left + 1
            cnt += right - left + 1
            right += 1
        return cnt
        