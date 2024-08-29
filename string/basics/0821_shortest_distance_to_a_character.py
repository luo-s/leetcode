# Given a string s and a character c that occurs in s, return an array of integers answer 
# where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

# The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

# https://leetcode.com/problems/shortest-distance-to-a-character/

class Solution:
    def shortestToChar(self, s: str, c: str) -> list[int]:
        n = len(s)
        ans = [0] * n
        # the distance to left c
        idx = -n
        for i, char in enumerate(s):
            if char == c:
                idx = i
            ans[i] = i - idx
        # the distante to right c
        idx = 2 * n
        for i in range(n - 1, -1, -1):
            if s[i] == c:
                idx = i
            ans[i] = min(ans[i], idx - i)
        return ans