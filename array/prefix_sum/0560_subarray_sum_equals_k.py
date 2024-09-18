# Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

# A subarray is a contiguous non-empty sequence of elements within an array.

# https://leetcode.com/problems/subarray-sum-equals-k/
# same problem LC 930 https://leetcode.com/problems/binary-subarrays-with-sum/

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        preSum = res = 0
        cnt = {0:1}  # Initialize with 0 having count 1
        
        for num in nums:
            preSum += num 
            res += cnt.get(preSum - k, 0)
            cnt[preSum] = cnt.get(preSum, 0) + 1
        
        return res


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        preSum = res = 0
        cnt = dict()
        for num in nums:
            cnt[preSum] = cnt.get(preSum, 0) + 1
            preSum += num
            # 如果存在某个子数组和为k, cnt[preSum - k]即是满足条件的子数组的数量
            # 假设目前循环到nums[j], 则nums[:j]之和为preSum, 如果存在某个点i < j，使得nums[i:j]之和为preSum - k，那么nums[:i]之和为k。
            # cnt[preSum - k]返回符合条件的 i 的个数
            res += cnt.get(preSum - k, 0)
        return res