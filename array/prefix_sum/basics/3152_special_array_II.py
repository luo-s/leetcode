# An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

# You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that subarray nums[fromi..toi] is special or not.

# Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

# https://leetcode.com/problems/special-array-ii/

# every query will give us a subarray, check whether that subarry is special or not
# if an array is special: every pair of adjacent elements has different parity - one is odd and another is even
# every sum of adjacent pair has to be odd 
# brute force -- TLE O(n * k)
# for every query, did a lot of repeating calculation
class Solution:
    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        ans = []
        for i, j in queries:
            subarray = nums[i : j + 1]
            # edge case
            if j - i < 1:
                ans.append(True)
                continue
            # maintain window size of 2
            pair_sum = nums[i]
            for i in range(i + 1, j + 1):
                pair_sum += nums[i]
                special = True
                if pair_sum % 2 == 0:
                    ans.append(False)
                    special = False
                    break
                pair_sum -= nums[i - 1]
            if special:
                ans.append(True)
        return ans

# preSum: create a list pairs to count number of special adajcent pairs fromm start to ith element
# if subarry nums[i, j] is special: i - j = pairs[i] - pairs[j]
# time complexity O(n + k)
class Solution:
    def isArraySpecial(self, nums: List[int], queries: List[List[int]]) -> List[bool]:
        l = len(nums)
        pairs = [0] * l
        
        for i in range(1, l):
            pairs[i] = pairs[i - 1] + ((nums[i] & 1) ^ (nums[i - 1] & 1))

        ans = []
        for i, j in queries:
            ans.append(i - j == pairs[i] - pairs[j])
        return ans
