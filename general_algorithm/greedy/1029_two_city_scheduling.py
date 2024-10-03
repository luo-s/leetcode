# A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

# Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

# https://leetcode.com/problems/two-city-scheduling/

# priority queue
import heapq
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        min_heap = []
        l = len(costs)
        for (costA, costB) in costs:
            heapq.heappush(min_heap, [costA - costB, costA, costB])
        ans = 0
        for _ in range(l // 2):
            ans += heapq.heappop(min_heap)[1]
        while min_heap:
            ans += heapq.heappop(min_heap)[2]
        return ans

# sort
class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        l = len(costs)
        costs.sort(key=lambda x : x[0] - x[1])
        ans = 0
        for i in range(l // 2):
            ans += costs[i][0]
        for i in range(l // 2, l):
            ans += costs[i][1]
        return ans