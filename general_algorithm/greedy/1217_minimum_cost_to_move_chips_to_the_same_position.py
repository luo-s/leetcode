# We have n chips, where the position of the ith chip is position[i].

# We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:

# position[i] + 2 or position[i] - 2 with cost = 0.
# position[i] + 1 or position[i] - 1 with cost = 1.
# Return the minimum cost needed to move all the chips to the same position.

# https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

# no cost of moving 2: all coins can be move to 0 and 1 without any cost
# if cnt_0 < cnt_1, move cnt_0, otherwise
class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        cnt_0 = cnt_1 = 0
        for p in position:
            if p & 1:
                cnt_1 += 1
            else:
                cnt_0 += 1
        return min(cnt_0, cnt_1)
