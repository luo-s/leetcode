# You are given a 0-indexed array of strings words and a 2D array of integers queries.

# Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

# Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

# Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

# https://leetcode.com/problems/count-vowel-strings-in-ranges/description/

class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        vowels, helper, ans, l = ['a', 'e', 'i', 'o', 'u'], [0] * len(words), [], len(words)
        for i in range(l):
            if words[i][0] in vowels and words[i][-1] in vowels:
                helper[i] = 1
        # preSum is 1 longer than original array
        preSum = [0] * (l + 1)
        for i, v in enumerate(helper):
            preSum[i + 1] = preSum[i] + v
        for l, r in queries:
            ans.append(preSum[r + 1] - preSum[l])
        return ans
