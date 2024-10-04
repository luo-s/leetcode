# You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

# Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

# https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/

# for all the differences d: if d is odd, will never make it even
# for allthe differences: there are 2 situations: xy and yx
# 2 ways of change: 
#   1) swap same position: s1[i] = x and s2[i] = y: xy -= 1 and yx += 1
#   2) swap diff position: s1[i] = x and s2[j] = y: xy -= 1 and yx -= 1
# the goal is to make xy = yx = 0
# alway try method 2 first, until there is no qualifying pairs
class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        xy, yx = 0, 0
        n = len(s1)
        for a, b in zip(s1, s2):
            if a == 'x' and b == 'y':
                xy += 1
            if a == 'y' and b == 'x':
                yx += 1
        if (xy + yx) % 2 == 1:
            return -1
        # return (xy + yx) // 2 + xy % 2
        if xy % 2:
            return (xy + yx) // 2 + 1
        else:
            return (xy + yx) // 2
         

from collections import Counter
class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        cnt = Counter(x for x, y in zip(s1, s2) if x != y)
        d = cnt['x'] + cnt['y']
        return -1 if d % 2 else d // 2 + cnt['x'] % 2

