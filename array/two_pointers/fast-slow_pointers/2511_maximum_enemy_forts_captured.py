# You are given a 0-indexed integer array forts of length n representing the positions of several forts. forts[i] can be -1, 0, or 1 where:

# -1 represents there is no fort at the ith position.
# 0 indicates there is an enemy fort at the ith position.
# 1 indicates the fort at the ith the position is under your command.
# Now you have decided to move your army from one of your forts at position i to an empty position j such that:

# 0 <= i, j <= n - 1
# The army travels over enemy forts only. Formally, for all k where min(i,j) < k < max(i,j), forts[k] == 0.
# While moving the army, all the enemy forts that come in the way are captured.

# Return the maximum number of enemy forts that can be captured. In case it is impossible to move your army, or you do not have any fort under your command, return 0.

# https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/

# brute force
# time complexity O(n * m)
class Solution:
    def captureForts(self, forts: list[int]) -> int:
        max_cnt, l = 0, len(forts)
        # loop through all forts under command
        for i in range(l):
            if forts[i] == 1:
                # move right
                j, cnt1 = 1, 0
                while i + j < l and forts[i + j] == 0:
                    cnt1 += 1
                    j += 1
                if i + j < l and forts[i + j] == -1:
                    max_cnt = max(max_cnt, cnt1)
                # move left
                j, cnt2  = 1, 0
                while i - j >= 0 and forts[i - j] == 0:
                    cnt2 += 1
                    j += 1
                if i - j >= 0 and forts[i - j] == -1:
                    max_cnt = max(max_cnt, cnt2)
        return max_cnt
      
# two-pointers
# time complexity O(n)
class Solution:
    def captureForts(self, forts: list[int]) -> int:
        # find the largest distance between 1 and -1 next to each other
        ans, pre = 0, -1
        for i, fort in enumerate(forts):
            # possible start and end location
            if fort == -1 or fort == 1:
                # i and pre are a pair of {1, -1}
                if pre >= 0 and fort != forts[pre]:
                    # i - pre - 1 is the distance between them 
                    ans = max(ans, i - pre - 1)
                # update pre
                pre = i
        return ans