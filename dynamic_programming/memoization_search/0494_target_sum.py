# You are given an integer array nums and an integer target.

# You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

# For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
# Return the number of different expressions that you can build, which evaluates to target.

# https://leetcode.com/problems/target-sum/description/

# dfs
# let number of different expression that start with position = i and sum = cur_sum, end with position = l, sum = target is dfs(i, cur_sum)
# dfs formular: dfs(i, curSum) = dfs(i + 1, cur_sum - nums[i]) + dfs(i + 1, cur_sum + nums[i])
# time complexity O(2 ** n) -- TLE
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
      l = len(nums)
      def dfs(i, cur_sum):
         if i == l:
            return 1 if cur_sum == target else 0
         return dfs(i + 1, cur_sum - nums[i]) + dfs(i + 1, cur_sum + nums[i])
      return dfs(0, 0)
    
# memoization
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        l = len(nums)
        table = dict()
        def dfs(i, cur_sum):
            if i == l:
              return 1 if cur_sum == target else 0
            if (i, cur_sum) in table:
                return table[(i, cur_sum)]
            cnt = dfs(i + 1, cur_sum - nums[i]) + dfs(i + 1, cur_sum + nums[i])
            table[(i, cur_sum)] = cnt
            return cnt
        return dfs(0, 0)
