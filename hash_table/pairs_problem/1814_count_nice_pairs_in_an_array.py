# You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

# 0 <= i < j < nums.length
# nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
# Return the number of nice pairs of indices. Since that number can be too large, return it modulo 10 ** 9 + 7.

# https://leetcode.com/problems/count-nice-pairs-in-an-array/description/

# nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]) ->
# nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
class Solution:
    def countNicePairs(self, nums: list[int]) -> int:
        ans, l, cnt, mod = 0, len(nums), dict(), 10 ** 9 + 7
        for i in range(l):
            value = nums[i] - self.rev(nums[i])
            if value not in cnt:
                cnt[value] = 1
            else:
                ans += cnt[value]
                cnt[value] += 1
        return ans % mod

    def rev(self, num: int) -> int:
        return int(str(num)[::-1])