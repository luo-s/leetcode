# A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

# Given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

# If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

# https://leetcode.com/problems/frog-jump/

# let dfs(val, k) == true denotes the frog starting with lands on stone val with jump k ends with landing on the last stone successfully
# then dfs[val, k] = dfs(val + k, k) or dfs(val + k + 1, k + 1) or dfs(val + k - 1, k - 1)
class Solution:
    def canCross(self, stones: list[int]) -> bool:
        # edge case
        if stones[1] != 1: return False
        table = dict()
        def dfs(val, k):
            # base case
            if k <= 0: return False
            if val not in stones: return False
            if val == stones[-1]: return True
            # recursive case
            if (val, k) in table:
                return table[(val, k)]
            ans = dfs(val + k, k) or dfs(val + k + 1, k + 1) or dfs(val + k - 1, k - 1)
            table[(val, k)] = ans
            return ans
        return dfs(1, 1)
        
class Solution:
    def canCross(self, stones: list[int]) -> bool:
        # edge case
        if stones[1] != 1: return False
        @cache
        def dfs(val, k):
            # base case
            if k <= 0: return False
            if val not in stones: return False
            if val == stones[-1]: return True
            # recursive case
            return dfs(val + k, k) or dfs(val + k + 1, k + 1) or dfs(val + k - 1, k - 1)
        return dfs(1, 1)
