# Given two strings needle and haystack, return the index of the first occurrence of 
# needle in haystack, or -1 if needle is not part of haystack.

# 1 <= haystack.length, needle.length <= 10 ** 4
# haystack and needle consist of only lowercase English characters.

# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

# brute force
class Solution:
    def bf(self, haystack: str, needle: str) -> int:
        i, j, n, m = 0, 0, len(haystack), len(needle)
        if n < m:
            return -1
        
        while i < n:
            # if match: check the next one
            if haystack[i] == needle[j]:
                i += 1
                j += 1
            # if not match: start over
            else:
                i -= j - 1  # i has moved j steps, need to move back j - 1 steps to start next round of checking
                j = 0       # move j back to 0
            # if matching all letters in needle: return idx
            if j == m:  
                return i - j
        
        return -1
    
# Robin Karp algorithm
class Solution:
    def robin_karp(self, haystack: str, needle: str) -> int:
        D, Q = 26, 2 ** 16 + 1
        hash_needle, hash_haystack, n, m = 0, 0, len(haystack), len(needle)
        if n < m:
            return -1
        
        # initialize hash_haystack and calculate hash_needle
        for i in range(m):
            hash_needle = (hash_needle * D + ord(needle[i])) % Q
            hash_haystack = (hash_haystack * D + ord(haystack[i])) % Q
        
        for i in range(n - m + 1):
            # if matching hash, continue to check one by one
            if hash_haystack == hash_needle:
                match = True
                for j in range(m):
                    # if failed: move on
                    if haystack[i + j] != needle[j]:
                        match = False
                        break
                # if found a true match: return idx
                if match:
                    return i
            # update hash_haystack
            power = pow(D, m - 1) % Q  
            if i < n - m:
                hash_haystack = (hash_haystack - power * ord(haystack[i])) % Q  # remove haystack[i]
                hash_haystack = (hash_haystack * D + ord(haystack[i + m])) % Q  # add haystack[i + m]
                hash_haystack = (hash_haystack + Q) % Q # make hash_haystack >= 0
        
        return -1
        
# KMP algorithm
# If the prefix and suffix of pattern repeats, we can skip the repeated part (never move i back)
# LPS: longest proper prefix which is also suffix (proper prefix cannot be the whole string, thus lps[0] == 0)
class Solution:
    def kmp(self, haystack: str, needle: str) -> int:
        n, m = len(haystack), len(needle)
        if n < m:
            return -1
        # generate LPS array
        lps = self.generateLps(needle)

        j = 0
        for i in range(n):
            # not match: move j back according to LPS array
            while j > 0 and haystack[i] != needle[j]:
                j = lps[j - 1]
            # match: move j forward
            if haystack[i] == needle[j]:
                j += 1
            # if match all letters in needle: return idx
            if j == m:
                return i - j + 1
        
        return -1

    def generateLps(self, s: str) -> list[int]:
        m = len(s)
        lps = [0] * m  

        prevLPS = 0                                  
        for i in range(1, m):                   
            # not match, move back prevLPS
            while prevLPS > 0 and s[prevLPS] != s[i]: 
                prevLPS = lps[prevLPS - 1]
            # match found, move prevLPS forward, prevLPS also indicates the length of LPS
            if s[prevLPS] == s[i]:                 
                prevLPS += 1
            # update length of LPS, move i forward
            lps[i] = prevLPS                       
        
        return lps
    
    def generateLps(self, s: str) -> list[int]:
        m = len(s)
        lps = [0] * m  
        # two pointers
        prevLPS, i = 0, 1
        while i < m:
            if s[i] == s[prevLPS]:
                lps[i] = prevLPS + 1
                prevLPS += 1
                i += 1
            elif prevLPS == 0:
                lps[i] = 0
                i += 1
            else:
                prevLPS = lps[prevLPS - 1]