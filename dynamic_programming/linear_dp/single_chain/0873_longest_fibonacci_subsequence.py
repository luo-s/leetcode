# A sequence x1, x2, ..., xn is Fibonacci-like if:

# n >= 3
# xi + xi+1 == xi+2 for all i + 2 <= n

# Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

# A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

# 3 <= arr.length <= 1000
# 1 <= arr[i] < arr[i + 1] <= 10**9

# https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/

# let dp[i][j] denotes the length of longest fibonacci subsequence ends at arr[i] and arr[j]
# dp[j][k] = max(dp[j][k], dp[i][j] + 1) if arr[i] + arr[j] == arr[k]
# need max(dp)
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        l, ans = len(arr), 0
        # use hashmap for O(1) search
        idx_map = {value: idx for idx, value in enumerate(arr)} 
        # dp[i][j] stores length of sequence ending with (i, j), initializing with 2
        dp = [[2] * l for _ in range(l)]
        # dp transition
        for i in range(l - 1):
            for j in range(i + 1, l):  # j < i, smaller iterator in the inner loop
                if arr[i] + arr[j] in idx_map:
                    k = idx_map[arr[i] + arr[j]]
                    dp[j][k] = max(dp[j][k], dp[i][j] + 1)
                    ans = max(ans, dp[j][k]) 

        return ans if ans >= 3 else 0
    
# in the above solution, we construct a l x l matrix dp wasted half of it (since i < j)
# to improve space efficiency, use list of dictionary instead of nested lists
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        l, ans = len(arr), 0
        idx_map = {value: idx for idx, value in enumerate(arr)}  # map value to index
        dp = [{} for _ in range(l)]  # dp[i][j] stores length of sequence ending with (i, j)

        for j in range(1, l):
            for i in range(j):  # ensure i < j
                k = idx_map.get(arr[j] + arr[i])  # find k such that arr[i] + arr[j] == arr[k]
                if k is not None and k > j:  # ensure j < k (i < j < k)
                    # If there's no previous sequence, start with length 2
                    dp[j][k] = dp[i].get(j, 2) + 1
                    ans = max(ans, dp[j][k])  # update the maximum subsequence length

        return ans if ans >= 3 else 0  # return 0 if no valid Fibonacci-like sequence is found
