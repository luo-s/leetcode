# You are given an integer array nums and an integer k.

# In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

# Return the maximum number of operations you can perform on the array.

# https://leetcode.com/problems/max-number-of-k-sum-pairs/

class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:
        ans, cnt = 0, dict()
        for num in nums:
            if cnt.get(k - num, 0) > 0:
                cnt[k - num] -= 1
                ans += 1
            else:
                cnt[num] = cnt.get(num, 0) + 1
        return ans

