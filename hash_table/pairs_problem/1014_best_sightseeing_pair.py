# You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.

# The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.

# Return the maximum score of a pair of sightseeing spots.

# https://leetcode.com/problems/best-sightseeing-pair/description/

class Solution:
    def maxScoreSightseeingPair(self, values: list[int]) -> int:
        ans = mx = 0 
        for j, v in enumerate(values):
            ans = max(ans, mx + v - j)
            mx = max(mx, v + j)
        return ans
    
