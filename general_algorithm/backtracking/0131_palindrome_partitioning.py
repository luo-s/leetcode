# Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

# https://leetcode.com/problems/palindrome-partitioning/

class Solution:
    def partition(self, s: str) -> List[List[str]]:
        res, path, l = [], [], len(s)
        
        def dfs(i):
            # base case
            if i >= l:
                res.append(path[:])
                return
            # recursive case
            for j in range(i, l):
                if self.isPalidromic(s, i, j):
                    path.append(s[i : j + 1])
                    dfs(j + 1)
                    path.pop()
            
        dfs(0)
        return res
        
    def isPalidromic(self, s, l, r):
        while l < r:
            if s[l] != s[r]:
                return False
            l += 1
            r -= 1
        return True
        