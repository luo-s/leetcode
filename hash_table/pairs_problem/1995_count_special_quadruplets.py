# Given a 0-indexed integer array nums, return the number of distinct quadruplets (a, b, c, d) such that:

# nums[a] + nums[b] + nums[c] == nums[d], and
# a < b < c < d

# https://leetcode.com/problems/count-special-quadruplets/
# similar LC 454 https://leetcode.com/problems/4sum-ii/

# 正常枚举O(n^4), 1-3分组枚举O(n^3), 两两分组枚举O(n^2)
# nums[a] + nums[b] = nums[d] - nums[c]
from collections import Counter
class Solution:
    def countQuadruplets(self, nums: List[int]) -> int: 
        n = len(nums)
        ans = 0
        cnt = Counter()
        # 逆序枚举 b 确保 a < b < c < d 因为内层循环变量 d > b
        for b in range(n - 3, 0, -1):
            for d in range(b + 2, n):
                # 维护 nums[d] - nums[c] 哈希表
                cnt[nums[d] - nums[b + 1]] += 1
            for a in range(b):
                if (total := nums[a] + nums[b]) in cnt:
                    ans += cnt[total]
        return ans
    
from collections import Counter
class Solution:
    def countQuadruplets(self, nums: List[int]) -> int: 
        n = len(nums)
        ans = 0
        cnt = Counter() 
        # 正序枚举 b
        for b in range(1, n - 2):
            for a in range(b):
                # 维护 nums[a] + nums[b] 哈希表
                cnt[nums[a] + nums[b]] += 1
            # 枚举 b 右边的 c 和 d
            for d in range(b + 2, n):
                total = nums[d] - nums[b + 1]
                if total in cnt:
                    ans += cnt[total] 
        return ans
