# Given two strings s and p, return an array of all the start indices of p's 
# anagrams in s. You may return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different 
# word or phrase, typically using all the original letters exactly once.

# https://leetcode.com/problems/find-all-anagrams-in-a-string/
# similar
# LC 567 https://leetcode.com/problems/permutation-in-string/

class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        l1, l2 = len(p), len(s)
        map1, map2 = [0] * 26, [0] * 26
        left = right = 0
        ans = []
        
        for char in p:
            map1[ord(char) - ord('a')] += 1

        while right < l2:
            map2[ord(s[right]) - ord('a')] += 1
            if right - left + 1 == l1:
                if map1 == map2:
                    ans.append(left)
                map2[ord(s[left]) - ord('a')] -= 1
                left += 1
            right += 1
        return ans