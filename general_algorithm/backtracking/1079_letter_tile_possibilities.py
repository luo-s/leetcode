# You have n  tiles, where each tile has one letter tiles[i] printed on it.

# Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

# https://leetcode.com/problems/letter-tile-possibilities/description/

class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        res, l = set(), len(tiles)
        used = [False] * l

        def backtracking(comb, used):
            # base case
            if comb:
                res.add(comb)
            # recursive case
            for i in range(l):
                if not used[i]:
                    used[i] = True
                    backtracking(comb + tiles[i], used)
                    used[i] = False

        backtracking('', used)
        return len(res)