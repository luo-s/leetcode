# Given an integer n, return the least number of perfect square numbers that sum to n.

# A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

# https://leetcode.com/problems/perfect-squares/

# bfs 
# time complexity O(n^1.5)
# space complexity O(n)
from collections import deque
class Solution:
    def numSquares(self, n: int) -> int:
        queue = deque([[n, 1]])
        while queue:
            num, cnt = queue.popleft()
            for i in range(1, isqrt(num) + 1):
                x = num - i * i
                if x == 0: return cnt
                queue.append([x, cnt + 1])

# bfs -- another approach
from collections import deque
class Solution:
    def numSquares(self, n: int) -> int:
        queue = deque([n])
        cnt = 0
        while queue:
            cnt += 1
            l = len(queue)
            for _ in range(l):
                num = queue.popleft()
                for i in range(1, isqrt(num) + 1):
                    x = num - i * i
                    if x == 0: return cnt
                    queue.append(x)