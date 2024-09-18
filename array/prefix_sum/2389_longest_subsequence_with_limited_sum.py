# You are given an integer array nums of length n, and an integer array queries of length m.

# Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

# A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

# https://leetcode.com/problems/longest-subsequence-with-limited-sum/

import bisect
class Solution:
    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        # Sort the numbers
        nums.sort()
        
        # Compute prefix sums
        preSum = [0] * (len(nums) + 1)
        for i, v in enumerate(nums):
            preSum[i + 1] = preSum[i] + v
        
        # Answer each query using binary search
        ans = []
        for query in queries:
            # Binary search to find the rightmost prefix sum that is <= query
            idx = bisect.bisect_right(preSum, query)
            ans.append(idx - 1)
        
        return ans
