# Given an integer array nums where every element appears three times except for one, 
# which appears exactly once. Find the single element and return it.

# You must implement a solution with a linear runtime complexity and use only 
# constant extra space.

# 1 <= nums.length <= 3 * 10 ** 4
# -2 ** 31 <= nums[i] <= 2 ** 31 - 1
# Each element in nums appears exactly three times except for one element which 
# appears once.

# https://leetcode.com/problems/single-number-ii/
# solution https://leetcode.cn/problems/single-number-ii/solutions/2482832/dai-ni-yi-bu-bu-tui-dao-chu-wei-yun-suan-wnwy/

# consider every bit: 3 x 0s or 3 x 1s, and 1 x 0 or 1 x 1
# sum all numbers in every bit and module 3 will give the bit of x

class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        a = b = 0
        for x in nums:
            b = (b ^ x) & ~a
            a = (a ^ x) & ~b
        return b

# what if every number appears 5 times except for one?
class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        a = b = c = d = 0
        for x in nums:
            d = (d ^ x) & ~c & ~b & ~a
            c = (c ^ x) & ~a & ~b & ~d
            b = (b ^ x) & ~a & ~c & ~d
            a = (a ^ x) & ~b & ~c & ~d
        return d