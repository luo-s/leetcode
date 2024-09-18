# You are given an integer array nums and an integer target.

# You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

# For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
# Return the number of different expressions that you can build, which evaluates to target.

# https://leetcode.com/problems/target-sum/

# dfs
# let dfs(i, cur_sum) denote the number of different expression that start with position = i and sum = cur_sum, end with position = l, sum = target 
# dfs formular: dfs(i, curSum) = dfs(i + 1, cur_sum - nums[i]) + dfs(i + 1, cur_sum + nums[i])
# time complexity O(2 ** n) -- TLE
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
    #   @cache  # automatic avoiding repeating calculation
      def dfs(i: int, cur_sum: int) -> int:
         if i == len(nums):
            return 1 if cur_sum == target else 0
         return dfs(i + 1, cur_sum - nums[i]) + dfs(i + 1, cur_sum + nums[i])
      return dfs(0, 0)
    
# dfs with memoization
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        table = dict()
        def dfs(i: int, cur_sum: int) -> int:
            # check memo first
            if (i, cur_sum) in table:
                return table[(i, cur_sum)]
            # base case
            if i == len(nums):
              return 1 if cur_sum == target else 0
            # recursive case
            cnt = dfs(i + 1, cur_sum - nums[i]) + dfs(i + 1, cur_sum + nums[i])
            table[(i, cur_sum)] = cnt
            return cnt
        return dfs(0, 0)

# dp
class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        total = sum(nums)
        
        # If the target is unreachable, return 0
        if abs(target) > total or (total + target) % 2 != 0:
            return 0
        
        # Calculate the subset sum we need to achieve
        # subset is the collection of elements we add together
        subset_sum = (total + target) // 2
        
        # Initialize the DP table
        dp = [0] * (subset_sum + 1)
        dp[0] = 1
        
        # Fill the DP table
        for num in nums:
            for j in range(subset_sum, num - 1, -1):
                dp[j] += dp[j - num]
        
        return dp[subset_sum]
