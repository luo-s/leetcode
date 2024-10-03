# You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

# Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

# 0 <= j <= nums[i] and
# i + j < n

# Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

# 1 <= nums.length <= 104
# 0 <= nums[i] <= 1000
# It's guaranteed that you can reach nums[n - 1].

# https://leetcode.com/problems/jump-game-ii/

# dynamic programming
# time complexity O(n^2)
# space complexity O(n)
class Solution:
    def jump(self, nums: List[int]) -> int:
        l = len(nums)
        dp = [float('inf')] * l
        dp[0] = 0
        for i in range(l):
            if dp[i] != float('inf'):
                for j in range(1, min(nums[i] + 1, l - i)):
                    dp[i + j] = min(dp[i + j], dp[i] + 1)
        return dp[l - 1]

# greedy
# everytime jump to the position that can reach the farthest the next jump 
class Solution:
    def jump(self, nums: List[int]) -> int:
        l = len(nums)
        cur_mx = nxt_mx = steps = 0
        for i in range(l - 1):
            nxt_mx = max(nxt_mx, nums[i] + i)
            if i == cur_mx:
                cur_mx = nxt_mx
                steps += 1
        return steps 